import { expect, test } from '@playwright/test';
import { makeJwt, seedMemberAuth } from './test-helpers';

test.describe('Login - Comprehensive Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('shows required validations when submit empty form', async ({ page }) => {
    await page.getByTestId('login-submit').click();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('shows invalid email format validation', async ({ page }) => {
    await page.getByTestId('login-email').fill('abc');
    await page.getByTestId('login-submit').click();
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });

  test('shows backend error for bad credentials', async ({ page }) => {
    await page.route('**/api/v1/auth/login', async (route) => {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ error: { error: { message: 'Invalid credentials' } } }),
      });
    });

    await page.getByTestId('login-email').fill('member@example.com');
    await page.getByTestId('login-password').fill('wrong-password');
    await page.getByTestId('login-submit').click();

    await expect(page.getByTestId('login-error-message')).toContainText('Invalid email or password');
  });

  test('stores token and role after successful login', async ({ page }) => {
    await page.route('**/api/v1/auth/login', async (route) => {
      const accessToken = makeJwt({
        sub: 'member-1',
        email: 'member@example.com',
        roles: ['MEMBER'],
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 3600,
      });
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: { accessToken, newRefreshToken: 'refresh-token' },
        }),
      });
    });

    await page.getByTestId('login-email').fill('member@example.com');
    await page.getByTestId('login-password').fill('Password123!');
    await page.getByTestId('login-submit').click();

    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('token')))
      .toBeTruthy();
    await expect(page).not.toHaveURL(/\/login/);
  });

  test('redirects logged-in member away from login page', async ({ page }) => {
    await seedMemberAuth(page);
    await page.goto('/login');
    await expect(page).toHaveURL(/\/user\/dashboard\/membership-management/);
  });
});

test.describe('Verify Email - Comprehensive Cases', () => {
  test('shows missing token error', async ({ page }) => {
    await page.goto('/verify-email');
    await expect(page.getByTestId('verify-error-message')).toContainText('Verification token is missing');
  });

  test('shows error when token landing validation fails', async ({ page }) => {
    await page.route('**/api/v1/user/verify-email?token=*', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          error: { message: 'Invalid or expired token.' },
        }),
      });
    });

    await page.goto('/verify-email?token=bad-token');
    await expect(page.getByTestId('verify-error-message')).toBeVisible();
  });

  test('renders password setup form when backend requires password', async ({ page }) => {
    await page.route('**/api/v1/user/verify-email?token=*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<html><input name="password" /></html>',
      });
    });
    await page.route('**/api/v1/user/verify-email', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/verify-email?token=ok-token');
    await expect(page.getByTestId('verify-password')).toBeVisible();
    await expect(page.getByTestId('verify-confirm-password')).toBeVisible();
  });

  test('shows password mismatch validation', async ({ page }) => {
    await page.route('**/api/v1/user/verify-email?token=*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<html><input name="password" /></html>',
      });
    });
    await page.route('**/api/v1/user/verify-email', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/verify-email?token=ok-token');
    await page.getByTestId('verify-password').fill('Password123!');
    await page.getByTestId('verify-confirm-password').fill('Password456!');
    await page.getByTestId('verify-submit').click();

    await expect(page.getByText('Passwords do not match.')).toBeVisible();
  });

  test('verifies successfully and shows success message', async ({ page }) => {
    await page.route('**/api/v1/user/verify-email?token=*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<html>No password field required</html>',
      });
    });
    await page.route('**/api/v1/user/verify-email', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/verify-email?token=ok-token');
    await page.getByTestId('verify-submit').click();
    await expect(page.getByTestId('verify-success-message')).toContainText('Email verified successfully');
  });
});
