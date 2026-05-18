import { expect, test } from '@playwright/test';

test.describe('Registration - Comprehensive Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/user-registration');
  });

  test('shows required validation errors on empty submit', async ({ page }) => {
    await page.getByTestId('register-submit').click();
    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Gender is required')).toBeVisible();
    await expect(page.getByText('Date of birth is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
    await expect(page.getByText('Please confirm your password')).toBeVisible();
  });

  test('shows invalid email validation message', async ({ page }) => {
    await page.getByTestId('register-email').fill('not-an-email');
    await page.getByTestId('register-submit').click();
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });

  test('shows password length validation message', async ({ page }) => {
    await page.getByTestId('register-password').fill('123');
    await page.getByTestId('register-submit').click();
    await expect(page.getByText('Password must be at least 8 characters')).toBeVisible();
  });

  test('shows confirm password mismatch validation message', async ({ page }) => {
    await page.getByTestId('register-password').fill('Password123!');
    await page.getByTestId('register-confirm-password').fill('Password1234!');
    await page.getByTestId('register-submit').click();
    await expect(page.getByText('Passwords do not match')).toBeVisible();
  });

  test('shows API error message for duplicate email', async ({ page }) => {
    await page.route('**/api/v1/auth/register', async (route) => {
      await route.fulfill({
        status: 409,
        contentType: 'application/json',
        body: JSON.stringify({
          error: { error: { message: 'Email already exists.' } },
        }),
      });
    });

    await page.getByTestId('register-first-name').fill('New');
    await page.getByTestId('register-last-name').fill('Member');
    await page.getByTestId('register-email').fill('duplicate@example.com');
    await page.getByTestId('register-gender').selectOption('MALE');
    await page.getByTestId('register-dob').fill('1998-01-20');
    await page.getByTestId('register-password').fill('Password123!');
    await page.getByTestId('register-confirm-password').fill('Password123!');
    await page.getByTestId('register-submit').click();

    await expect(page.getByTestId('register-error-message')).toBeVisible();
  });

  test('successful registration redirects to login with success message', async ({ page }) => {
    await page.route('**/api/v1/auth/register', async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ data: { id: 'member-2' } }),
      });
    });

    await page.getByTestId('register-first-name').fill('New');
    await page.getByTestId('register-last-name').fill('Member');
    await page.getByTestId('register-email').fill('new.member@example.com');
    await page.getByTestId('register-phone').fill('0900000000');
    await page.getByTestId('register-gender').selectOption('MALE');
    await page.getByTestId('register-dob').fill('1998-01-20');
    await page.getByTestId('register-address').fill('123 Test Street');
    await page.getByTestId('register-password').fill('Password123!');
    await page.getByTestId('register-confirm-password').fill('Password123!');
    await page.getByTestId('register-submit').click();

    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByTestId('login-success-message')).toContainText('Account created');
  });
});
