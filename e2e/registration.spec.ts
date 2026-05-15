import { expect, test } from '@playwright/test';

test.describe('Registration', () => {
  test('member can register and is redirected to login', async ({ page }) => {
    await page.route('**/api/v1/auth/register', async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            id: 'member-2',
            email: 'new.member@example.com',
          },
        }),
      });
    });

    await page.goto('/user-registration');

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
