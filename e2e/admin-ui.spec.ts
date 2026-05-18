import { expect, test } from '@playwright/test';
import { hookBrowserDialogs, mockCommonApi, seedAdminAuth, seedMemberAuth } from './test-helpers';

async function mockAdminCoreApi(page: any) {
  await page.route('**/api/v1/memberships', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [
          { id: 'tier-1', name: 'Basic', level: 'BASIC', minPrice: 100000, purchasePrice: 150000, description: 'Basic tier' },
          { id: 'tier-2', name: 'Premium', level: 'PREMIUM', minPrice: 200000, purchasePrice: 300000, description: 'Premium tier' },
        ],
      }),
    });
  });

  await page.route('**/api/v1/roles?**', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: {
          items: [
            { id: 'role-1', name: 'MEMBER' },
            { id: 'role-2', name: 'TRAINER' },
            { id: 'role-3', name: 'ADMIN' },
          ],
        },
      }),
    });
  });

  await page.route('**/api/v1/user/list?**', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: {
          docs: [
            {
              id: 'user-1',
              firstName: 'Amy',
              lastName: 'Lee',
              email: 'amy@example.com',
              status: 'active',
              roles: [{ id: 'role-1', name: 'MEMBER' }],
              memberships: [{ id: 'tier-1', name: 'Basic' }],
            },
          ],
          totalDocs: 1,
          totalPages: 1,
          currentPage: 1,
          hasNext: false,
          hasPrev: false,
          limit: 10,
        },
      }),
    });
  });
}

test.describe('Admin UI Testing', () => {
  test('member role is blocked from admin route by guard', async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);
    await page.goto('/admin/dashboard/memberships');
    await expect(page).toHaveURL(/\/home/);
  });

  test('admin can access dashboard home', async ({ page }) => {
    await seedAdminAuth(page);
    await mockAdminCoreApi(page);
    await page.goto('/admin/dashboard');
    await expect(page).toHaveURL(/\/admin\/dashboard/);
    await expect(page.locator('app-admin-sidebar')).toBeVisible();
  });

  test('admin sidebar navigation works for memberships and users', async ({ page }) => {
    await seedAdminAuth(page);
    await mockAdminCoreApi(page);
    await page.goto('/admin/dashboard');

    await page.getByTestId('admin-nav-memberships').click();
    await expect(page).toHaveURL(/\/admin\/dashboard\/memberships/);
    await expect(page.getByText('Membership Tiers')).toBeVisible();

    await page.getByTestId('admin-nav-users').click();
    await expect(page).toHaveURL(/\/admin\/dashboard\/users/);
    await expect(page.getByText('User Management')).toBeVisible();
  });

  test('admin sidebar toggle applies collapsed class', async ({ page }) => {
    await seedAdminAuth(page);
    await mockAdminCoreApi(page);
    await page.goto('/admin/dashboard');
    const nav = page.locator('nav.sidebar').first();
    await page.getByTestId('admin-sidebar-toggle').click();
    await expect(nav).toHaveClass(/collapsed/);
  });

  test('admin membership page opens create tier modal', async ({ page }) => {
    await seedAdminAuth(page);
    await mockAdminCoreApi(page);
    await page.goto('/admin/dashboard/memberships');
    await page.getByRole('button', { name: 'Create New Membership Tier' }).click();
    await expect(page.getByText('Create New Tier')).toBeVisible();
  });

  test('admin membership create shows validation/confirm flow', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);
    await seedAdminAuth(page);
    await mockAdminCoreApi(page);
    await page.route('**/api/v1/memberships', async (route: any) => {
      if (route.request().method() !== 'POST') return route.fallback();
      await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ data: { id: 'tier-3' } }) });
    });

    await page.goto('/admin/dashboard/memberships');
    await page.getByRole('button', { name: 'Create New Membership Tier' }).click();
    await page.locator('input[formcontrolname="name"]').fill('VIP');
    await page.locator('textarea[formcontrolname="description"]').fill('VIP tier');
    await page.locator('input[formcontrolname="minPrice"]').fill('300000');
    await page.locator('input[formcontrolname="purchasePrice"]').fill('500000');
    await page.getByRole('button', { name: 'Create New Tier' }).click();
    await expect.poll(() => dialogs.confirms.length).toBeGreaterThan(0);
  });

  test('admin user page opens create user modal', async ({ page }) => {
    await seedAdminAuth(page);
    await mockAdminCoreApi(page);
    await page.goto('/admin/dashboard/users');
    await page.getByRole('button', { name: 'Create User' }).click();
    await expect(page.getByRole('heading', { name: 'Create User' })).toBeVisible();
  });
});
