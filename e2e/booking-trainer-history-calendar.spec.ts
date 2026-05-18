import { expect, test } from '@playwright/test';
import { hookBrowserDialogs, mockCommonApi, seedMemberAuth } from './test-helpers';

test.describe('Trainer Booking, History and Calendar Cases', () => {
  test.beforeEach(async ({ page }) => {
    await seedMemberAuth(page);
    await mockCommonApi(page);
  });

  test('creates trainer booking request successfully', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);

    await page.route('**/api/v1/trainer-bookings/trainers?**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            {
              id: 'trainer-1',
              firstName: 'John',
              lastName: 'Doe',
              specializations: ['Strength'],
            },
          ],
        }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/trainers/trainer-1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            id: 'trainer-1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
          },
        }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/trainers/trainer-1/slots**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            {
              startAt: '2026-06-01T10:00:00.000Z',
              endAt: '2026-06-01T11:00:00.000Z',
              isAvailable: true,
            },
          ],
        }),
      });
    });
    await page.route('**/api/v1/trainer-bookings', async (route) => {
      if (route.request().method() !== 'POST') return route.fallback();
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ data: { id: 'tb-1' } }),
      });
    });

    await page.goto('/user/dashboard/bookings/book');
    await page.getByTestId('booking-mode-trainer').click();
    await page.getByTestId('booking-item-card').first().click();
    await expect(page.getByTestId('trainer-booking-modal')).toBeVisible();

    await page.getByTestId('trainer-slot-option').first().click();
    await page.getByTestId('trainer-booking-notes').fill('Need posture correction');
    await page.getByTestId('trainer-booking-submit').click();

    await expect.poll(() => dialogs.alerts.length).toBeGreaterThan(0);
  });

  test('shows trainer-booking error alert on create failure', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);

    await page.route('**/api/v1/trainer-bookings/trainers?**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [{ id: 'trainer-1', firstName: 'John', lastName: 'Doe' }],
        }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/trainers/trainer-1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: { id: 'trainer-1' } }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/trainers/trainer-1/slots**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [{ startAt: '2026-06-01T10:00:00.000Z', endAt: '2026-06-01T11:00:00.000Z' }],
        }),
      });
    });
    await page.route('**/api/v1/trainer-bookings', async (route) => {
      if (route.request().method() !== 'POST') return route.fallback();
      await route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({}) });
    });

    await page.goto('/user/dashboard/bookings/book');
    await page.getByTestId('booking-mode-trainer').click();
    await page.getByTestId('booking-item-card').first().click();
    await page.getByTestId('trainer-slot-option').first().click();
    await page.getByTestId('trainer-booking-submit').click();

    await expect.poll(() => dialogs.alerts.length).toBeGreaterThan(0);
  });

  test('switches history mode to trainer and opens trainer detail modal', async ({ page }) => {
    await page.route('**/api/v1/class-booking/list?**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: { docs: [], totalDocs: 0, totalPages: 1, hasNext: false, hasPrev: false } }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/me', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            {
              id: 'tb-1',
              trainer: { firstName: 'John', lastName: 'Doe' },
              startAt: '2026-06-01T10:00:00.000Z',
              endAt: '2026-06-01T11:00:00.000Z',
              status: 'pending',
            },
          ],
        }),
      });
    });

    await page.goto('/user/dashboard/bookings/history');
    await page.getByTestId('history-mode-trainer').click();
    await expect(page.getByTestId('history-trainer-row').first()).toBeVisible();
    await page.getByTestId('history-trainer-row').first().click();
    await expect(page.getByTestId('history-trainer-modal')).toBeVisible();
  });

  test('cancels trainer booking from history modal', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);
    await page.route('**/api/v1/class-booking/list?**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: { docs: [], totalDocs: 0, totalPages: 1, hasNext: false, hasPrev: false } }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/me', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            {
              id: 'tb-1',
              trainer: { firstName: 'John', lastName: 'Doe' },
              startAt: '2026-06-01T10:00:00.000Z',
              endAt: '2026-06-01T11:00:00.000Z',
              status: 'pending',
            },
          ],
        }),
      });
    });
    await page.route('**/api/v1/trainer-bookings/tb-1/cancel', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/user/dashboard/bookings/history');
    await page.getByTestId('history-mode-trainer').click();
    await page.getByTestId('history-trainer-row').first().click();
    await page.getByTestId('history-cancel-trainer-booking').click();

    await expect.poll(() => dialogs.confirms.length).toBeGreaterThan(0);
  });

  test('opens class booking detail and cancels class booking from history', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);
    await page.route('**/api/v1/class-booking/list?**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            docs: [
              {
                id: 'cb-1',
                status: 'confirmed',
                bookingStartDate: '2026-06-01',
                bookingEndDate: '2026-06-30',
                classSchedule: {
                  className: 'Morning Yoga',
                  category: 'Yoga',
                  dayOfWeek: 'MON',
                  startTime: '08:00:00',
                  endTime: '09:00:00',
                  location: 'Room A',
                },
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
    await page.route('**/api/v1/class-booking/cb-1/cancel', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/user/dashboard/bookings/history');
    await page.getByTestId('history-class-row').first().click();
    await expect(page.getByTestId('history-class-modal')).toBeVisible();
    await page.getByTestId('history-cancel-class-booking').click();
    await expect.poll(() => dialogs.confirms.length).toBeGreaterThan(0);
  });

  test('opens booking calendar modal from occupied slot', async ({ page }) => {
    await page.route('**/api/v1/class-booking/my-bookings', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            {
              id: 'cb-1',
              status: 'upcoming',
              bookingStartDate: '2020-01-01',
              bookingEndDate: '2030-12-31',
              classSchedule: {
                className: 'Morning Yoga',
                daysOfWeek: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                startTime: '08:00:00',
                endTime: '09:00:00',
                location: 'Room A',
              },
            },
          ],
        }),
      });
    });

    await page.goto('/user/dashboard/bookings/calendar');
    await page.getByTestId('calendar-next-week').click();
    await page.getByTestId('calendar-prev-week').click();

    const occupiedCell = page.locator('[data-testid="calendar-cell"].class-booking').first();
    await expect(occupiedCell).toBeVisible();
    await occupiedCell.click();
    await expect(page.getByTestId('calendar-booking-modal')).toBeVisible();
  });

  test('cancels class booking from calendar modal', async ({ page }) => {
    const dialogs = await hookBrowserDialogs(page);
    await page.route('**/api/v1/class-booking/my-bookings', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: [
            {
              id: 'cb-1',
              status: 'upcoming',
              bookingStartDate: '2020-01-01',
              bookingEndDate: '2030-12-31',
              classSchedule: {
                className: 'Morning Yoga',
                daysOfWeek: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                startTime: '08:00:00',
                endTime: '09:00:00',
                location: 'Room A',
              },
            },
          ],
        }),
      });
    });
    await page.route('**/api/v1/class-booking/cb-1/cancel', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/user/dashboard/bookings/calendar');
    await page.locator('[data-testid="calendar-cell"].class-booking').first().click();
    await page.getByTestId('calendar-cancel-booking').click();
    await expect.poll(() => dialogs.confirms.length).toBeGreaterThan(0);
  });
});
