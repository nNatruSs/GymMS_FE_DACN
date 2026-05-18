import { expect, test } from '@playwright/test';
import { mockCommonApi, seedMemberAuth, seedTrainerAuth } from './test-helpers';

async function mockTrainerCoreApi(page: any) {
  await page.route('**/api/v1/trainer-messaging/conversations', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [
          { conversationId: 't1', unreadCount: 2 },
          { conversationId: 't2', unreadCount: 1 },
        ],
      }),
    });
  });

  await page.route('**/api/v1/trainer/trainer-1/availability', async (route: any) => {
    if (route.request().method() === 'PUT') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ data: {} }) });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: {
          trainerId: 'trainer-1',
          availability: [{ id: 'slot-1', dayOfWeek: 1, startTime: '09:00', endTime: '12:00', isAvailable: true }],
        },
      }),
    });
  });

  await page.route('**/api/v1/trainer-bookings/trainer/me', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [
          {
            id: 'tb-1',
            memberId: 'member-1',
            trainerId: 'trainer-1',
            startAt: '2026-06-01T09:00:00.000Z',
            endAt: '2026-06-01T10:00:00.000Z',
            status: 'pending',
            member: { id: 'member-1', firstName: 'Amy', lastName: 'Lee' },
          },
        ],
      }),
    });
  });

  await page.route('**/api/v1/exercises', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [{ id: 'ex-1', name: 'Push Up', category: 'Strength', equipmentRequired: 'None' }],
      }),
    });
  });

  await page.route('**/api/v1/workout-plans', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [{ id: 'wp-1', title: 'Starter Plan', duration: 60, status: 'DRAFT' }],
      }),
    });
  });
}

test.describe('Trainer UI Testing', () => {
  test('member role is blocked from trainer route by guard', async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);
    await page.goto('/trainer/dashboard/schedule');
    await expect(page).toHaveURL(/\/home/);
  });

  test('trainer can access dashboard and default schedule route', async ({ page }) => {
    await seedTrainerAuth(page);
    await mockTrainerCoreApi(page);
    await page.goto('/trainer/dashboard');
    await expect(page).toHaveURL(/\/trainer\/dashboard\/schedule/);
    await expect(page.getByText('Weekly availability planner', { exact: false })).toBeVisible();
  });

  test('trainer sidebar navigation works for workout', async ({ page }) => {
    await seedTrainerAuth(page);
    await mockTrainerCoreApi(page);
    await page.goto('/trainer/dashboard/schedule');
    await page.getByTestId('trainer-nav-workout').click();
    await expect(page).toHaveURL(/\/trainer\/dashboard\/workout/);
    await expect(page.getByRole('heading', { name: 'Workout', exact: true })).toBeVisible();
  });

  test('trainer sidebar toggle applies collapsed class', async ({ page }) => {
    await seedTrainerAuth(page);
    await mockTrainerCoreApi(page);
    await page.goto('/trainer/dashboard/schedule');
    const nav = page.locator('nav.sidebar').first();
    await page.getByTestId('trainer-sidebar-toggle').click();
    await expect(nav).toHaveClass(/collapsed/);
  });

  test('trainer sidebar unread badge shows total unread count', async ({ page }) => {
    await seedTrainerAuth(page);
    await mockTrainerCoreApi(page);
    await page.goto('/trainer/dashboard/schedule');
    await expect(page.getByTestId('trainer-nav-unread-badge')).toContainText('3');
  });

  test('trainer schedule shows validation when end time is before start', async ({ page }) => {
    await seedTrainerAuth(page);
    await mockTrainerCoreApi(page);
    await page.goto('/trainer/dashboard/schedule');
    await page.locator('input[type="time"]').nth(0).fill('15:00');
    await page.locator('input[type="time"]').nth(1).fill('14:00');
    await page.getByRole('button', { name: 'Add Slot' }).click();
    await expect(page.getByText('End time must be after start time.')).toBeVisible();
  });

  test('trainer workout opens create exercise modal', async ({ page }) => {
    await seedTrainerAuth(page);
    await mockTrainerCoreApi(page);
    await page.goto('/trainer/dashboard/workout');
    await page.getByRole('button', { name: 'Add Exercise' }).click();
    await expect(page.getByText('Create Exercise')).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).first().click();
    await expect(page.getByText('Create Exercise')).toBeHidden();
  });
});
