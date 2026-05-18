import { expect, test } from '@playwright/test';
import { mockCommonApi, seedMemberAuth } from './test-helpers';

test.describe('User Sidebar Navigation Cases', () => {
  test.beforeEach(async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);
    await page.route('**/api/v1/memberships', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: [] }),
      });
    });
    await page.route('**/api/v1/class-booking/list?**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: { docs: [], totalDocs: 0, totalPages: 1, hasNext: false, hasPrev: false } }),
      });
    });
    await page.route('**/api/v1/class-booking/my-bookings', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ data: [] }) });
    });
  });

  test('navigates from sidebar to bookings page', async ({ page }) => {
    await page.goto('/user/dashboard/membership-management');
    await page.getByTestId('nav-bookings').click();
    await expect(page).toHaveURL(/\/user\/dashboard\/bookings/);
  });

  test('navigates from sidebar to memberships page', async ({ page }) => {
    await page.goto('/user/dashboard/bookings');
    await page.getByTestId('nav-memberships').click();
    await expect(page).toHaveURL(/\/user\/dashboard\/membership-management/);
  });

  test('toggles sidebar collapsed state', async ({ page }) => {
    await page.goto('/user/dashboard/membership-management');
    const nav = page.locator('nav.sidebar').first();
    await page.getByTestId('user-sidebar-toggle').click();
    await expect(nav).toHaveClass(/collapsed/);
  });

  test('shows unread badge when message unread count exists', async ({ page }) => {
    await page.route('**/api/v1/trainer-messaging/conversations', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            { conversationId: 'c1', unreadCount: 1 },
            { conversationId: 'c2', unreadCount: 2 },
          ],
        }),
      });
    });

    await page.goto('/user/dashboard/membership-management');
    await expect(page.getByTestId('nav-messages-unread-badge')).toContainText('3');
  });
});
