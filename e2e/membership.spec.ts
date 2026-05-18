import { expect, test } from '@playwright/test';
import {
  hookBrowserDialogs,
  mockCommonApi,
  mockMembershipPlans,
  mockNoMembership,
  seedMemberAuth,
} from './test-helpers';

test.describe('Membership Management - Comprehensive Cases', () => {
  test.beforeEach(async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);
    await mockMembershipPlans(page);
    await page.unroute('**/api/v1/memberships/my');
    await page.route('**/api/v1/memberships/my', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          membershipId: 'plan-basic',
          membershipName: 'Basic',
          startDate: '2026-01-01',
          endDate: '2026-12-31',
        }),
      });
    });
  });

  test('shows current membership status when active membership exists', async ({ page }) => {
    await page.goto('/user/dashboard/membership-management');
    await expect(page.getByTestId('membership-status-card')).toBeVisible();
    await expect(page.getByTestId('membership-status-card').getByText('Basic')).toBeVisible();
    await expect(page.getByTestId('membership-update-btn')).toBeVisible();
  });

  test('shows empty state when user has no active membership', async ({ page }) => {
    await page.unroute('**/api/v1/memberships/my');
    await mockNoMembership(page);
    await page.goto('/user/dashboard/membership-management');
    await expect(page.getByTestId('membership-empty-state')).toBeVisible();
    await expect(page.getByTestId('membership-register-cta')).toBeVisible();
  });

  test('opens and closes plan modal from empty state', async ({ page }) => {
    await page.unroute('**/api/v1/memberships/my');
    await mockNoMembership(page);
    await page.goto('/user/dashboard/membership-management');
    await page.getByTestId('membership-register-cta').click();
    await expect(page.getByTestId('membership-plan-modal')).toBeVisible();
    await page.getByTestId('membership-modal-close').click();
    await expect(page.getByTestId('membership-plan-modal')).toBeHidden();
  });

  test('allows selecting membership plan in modal', async ({ page }) => {
    await page.goto('/user/dashboard/membership-management');
    await page.getByTestId('membership-update-btn').click();
    await expect(page.getByTestId('membership-plan-modal')).toBeVisible();
    await page.getByTestId('membership-modal-plan-option').nth(1).click();
    await expect(page.getByTestId('membership-proceed-checkout')).toBeEnabled();
  });

  test('navigates to checkout URL after successful checkout creation', async ({ page }) => {
    await page.route('**/api/v1/memberships/*/checkout', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: { checkoutUrl: 'http://127.0.0.1:4200/home' },
        }),
      });
    });

    await page.goto('/user/dashboard/membership-management');
    await page.getByTestId('membership-update-btn').click();
    await page.getByTestId('membership-modal-plan-option').first().click();
    await page.getByTestId('membership-proceed-checkout').click();
    await expect(page).toHaveURL(/\/home/);
  });

  test('shows alert when checkout endpoint fails', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);
    await page.route('**/api/v1/memberships/*/checkout', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal error' }),
      });
    });

    await page.goto('/user/dashboard/membership-management');
    await page.getByTestId('membership-update-btn').click();
    await page.getByTestId('membership-modal-plan-option').first().click();
    await page.getByTestId('membership-proceed-checkout').click();

    await expect.poll(() => dialogs.alerts.length).toBeGreaterThan(0);
  });
});
