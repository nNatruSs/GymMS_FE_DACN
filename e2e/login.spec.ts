import { expect, test } from '@playwright/test';
import { makeJwt } from './test-helpers';

test.describe('Login', () => {
  test('member can login and session is stored', async ({ page }) => {
    await page.route('**/api/v1/auth/login', async (route) => {
      const accessToken = makeJwt({
        sub: 'member-1',
        email: 'member@example.com',
        roles: ['MEMBER'],
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      });

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            accessToken,
            newRefreshToken: 'refresh-token',
          },
        }),
      });
    });

    await page.goto('/login');
    await page.getByTestId('login-email').fill('member@example.com');
    await page.getByTestId('login-password').fill('Password123!');
    await page.getByTestId('login-submit').click();

    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('token')))
      .toBeTruthy();
    await expect(page).not.toHaveURL(/\/login/);
  });
});
