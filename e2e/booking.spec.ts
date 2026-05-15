import { expect, test } from '@playwright/test';
import { mockCommonApi, seedMemberAuth } from './test-helpers';

test.describe('Booking', () => {
  test('member can open class booking modal and submit booking', async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);

    await page.route('**/api/v1/class-schedule/classes', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [{ category: 'Yoga' }],
        }),
      });
    });

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
      if (route.request().method() === 'POST') {
        await route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify({
            data: [{ id: 'booking-1' }],
          }),
        });
        return;
      }
      await route.fallback();
    });

    await page.route('**/api/v1/class-booking/*/checkout', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          checkoutUrl: 'https://example.test/checkout',
        }),
      });
    });

    await page.goto('/user/dashboard/bookings/book');

    await page.getByTestId('booking-mode-class').click();
    await expect(page.getByTestId('booking-item-card').first()).toBeVisible();

    await page.getByTestId('booking-item-card').first().click();
    await expect(page.getByTestId('class-booking-modal')).toBeVisible();

    await page.getByTestId('class-booking-submit').click();
    await expect(page.getByTestId('class-booking-modal')).toBeHidden();
  });
});
