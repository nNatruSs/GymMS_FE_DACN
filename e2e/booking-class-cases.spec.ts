import { expect, test } from '@playwright/test';
import { hookBrowserDialogs, mockCommonApi, seedMemberAuth } from './test-helpers';

function mockClassCatalog(page: any) {
  return page.route('**/api/v1/class-schedule/classes', async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [{ category: 'Yoga' }, { category: 'Cardio' }],
      }),
    });
  });
}

test.describe('Class Booking - Comprehensive Cases', () => {
  test.beforeEach(async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);
  });

  test('membership-required state disables booking continuation', async ({ page }) => {
    await page.unroute('**/api/v1/memberships/my');
    await page.route('**/api/v1/memberships/my', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: 'null',
      });
    });

    await page.goto('/user/dashboard/bookings/book');
    await expect(page.getByText('Membership required to continue.')).toBeVisible();
    await expect(page.getByTestId('booking-mode-class')).toHaveClass(/disabled/);
    await expect(page.getByTestId('booking-mode-trainer')).toHaveClass(/disabled/);
    await expect(page).toHaveURL(/\/bookings\/book/);
  });

  test('opens class booking modal and keeps submit disabled for invalid date range', async ({ page }) => {
    await mockClassCatalog(page);
    await page.route('**/api/v1/class-schedule/list**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            docs: [
              {
                id: 'schedule-1',
                className: 'Morning Yoga',
                category: 'Yoga',
                dayOfWeek: 'MON',
                startTime: '08:00:00',
                endTime: '09:00:00',
                location: 'Room A',
                capacity: 20,
                remainingSlots: 12,
                validFrom: '2026-05-01',
                validUntil: '2026-05-30',
              },
            ],
            totalDocs: 1,
            totalPages: 1,
            hasNext: false,
            hasPrev: false,
          },
        }),
      });
    });

    await page.goto('/user/dashboard/bookings/book');
    await page.getByTestId('booking-mode-class').click();
    await page.getByTestId('booking-item-card').first().click();
    await expect(page.getByTestId('class-booking-modal')).toBeVisible();

    await page.getByTestId('class-booking-start-date').fill('2026-05-20');
    await page.getByTestId('class-booking-end-date').fill('2026-05-10');
    await expect(page.getByTestId('class-booking-submit')).toBeDisabled();
  });

  test('creates class booking and closes modal on success', async ({ page }) => {
    await mockClassCatalog(page);
    await page.route('**/api/v1/class-schedule/list**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            docs: [
              {
                id: 'schedule-1',
                className: 'Morning Yoga',
                category: 'Yoga',
                dayOfWeek: 'MON',
                startTime: '08:00:00',
                endTime: '09:00:00',
                location: 'Room A',
                capacity: 20,
                remainingSlots: 12,
                validFrom: '2026-05-01',
                validUntil: '2026-05-30',
              },
            ],
            totalDocs: 1,
            totalPages: 1,
            hasNext: false,
            hasPrev: false,
          },
        }),
      });
    });

    await page.route('**/api/v1/class-booking/my-bookings', async (route) => {
      if (route.request().method() !== 'POST') return route.fallback();
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ data: [{ id: 'booking-1' }] }),
      });
    });
    await page.route('**/api/v1/class-booking/*/checkout', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: { checkoutUrl: 'https://checkout.example.test' } }),
      });
    });

    await page.goto('/user/dashboard/bookings/book');
    await page.getByTestId('booking-mode-class').click();
    await page.getByTestId('booking-item-card').first().click();
    await page.getByTestId('class-booking-submit').click();
    await expect(page.getByTestId('class-booking-modal')).toBeHidden();
  });

  test('shows alert when checkout URL is missing', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);
    await mockClassCatalog(page);
    await page.route('**/api/v1/class-schedule/list**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            docs: [
              {
                id: 'schedule-1',
                className: 'Morning Yoga',
                category: 'Yoga',
                dayOfWeek: 'MON',
                startTime: '08:00:00',
                endTime: '09:00:00',
                location: 'Room A',
                capacity: 20,
                remainingSlots: 12,
                validFrom: '2026-05-01',
                validUntil: '2026-05-30',
              },
            ],
            totalDocs: 1,
            totalPages: 1,
            hasNext: false,
            hasPrev: false,
          },
        }),
      });
    });

    await page.route('**/api/v1/class-booking/my-bookings', async (route) => {
      if (route.request().method() !== 'POST') return route.fallback();
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ data: [{ id: 'booking-1' }] }),
      });
    });
    await page.route('**/api/v1/class-booking/*/checkout', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: {} }),
      });
    });

    await page.goto('/user/dashboard/bookings/book');
    await page.getByTestId('booking-mode-class').click();
    await page.getByTestId('booking-item-card').first().click();
    await page.getByTestId('class-booking-submit').click();

    await expect.poll(() => dialogs.alerts.length).toBeGreaterThan(0);
  });

  test('supports pagination controls in class booking list', async ({ page }) => {
    await mockClassCatalog(page);
    await page.route('**/api/v1/class-schedule/list**', async (route) => {
      const requestUrl = new URL(route.request().url());
      const currentPage = Number(requestUrl.searchParams.get('page') ?? '1');
      const docs =
        currentPage === 1
          ? [
              {
                id: 'schedule-1',
                className: 'Morning Yoga',
                category: 'Yoga',
                dayOfWeek: 'MON',
                startTime: '08:00:00',
                endTime: '09:00:00',
                location: 'Room A',
                validFrom: '2026-05-01',
                validUntil: '2026-05-30',
              },
            ]
          : [
              {
                id: 'schedule-2',
                className: 'Evening Cardio',
                category: 'Cardio',
                dayOfWeek: 'TUE',
                startTime: '18:00:00',
                endTime: '19:00:00',
                location: 'Room B',
                validFrom: '2026-05-01',
                validUntil: '2026-05-30',
              },
            ];

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            docs,
            totalDocs: 2,
            totalPages: 2,
            hasNext: currentPage === 1,
            hasPrev: currentPage === 2,
          },
        }),
      });
    });

    await page.goto('/user/dashboard/bookings/book');
    await page.getByTestId('booking-mode-class').click();
    await expect(page.getByText('Morning Yoga')).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Evening Cardio')).toBeVisible();
  });
});
