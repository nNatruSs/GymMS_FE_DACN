import type { Page } from '@playwright/test';

type JwtPayload = {
  sub: string;
  email: string;
  roles: string[];
  iat?: number;
  exp?: number;
};

function base64UrlEncode(value: string): string {
  return Buffer.from(value).toString('base64url');
}

export function makeJwt(payload: JwtPayload): string {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64UrlEncode(JSON.stringify(payload));
  return `${header}.${body}.signature`;
}

export async function seedMemberAuth(page: Page) {
  const token = makeJwt({
    sub: 'member-1',
    email: 'member@example.com',
    roles: ['MEMBER'],
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  });

  await page.addInitScript(({ accessToken }) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', 'refresh-token');
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: 'member-1',
        email: 'member@example.com',
        roles: ['MEMBER'],
      }),
    );
    window.open = () => null;
  }, { accessToken: token });
}

export async function seedTrainerAuth(page: Page) {
  const token = makeJwt({
    sub: 'trainer-1',
    email: 'trainer@example.com',
    roles: ['TRAINER'],
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  });

  await page.addInitScript(({ accessToken }) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', 'refresh-token');
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: 'trainer-1',
        email: 'trainer@example.com',
        roles: ['TRAINER'],
      }),
    );
  }, { accessToken: token });
}

export async function seedAdminAuth(page: Page) {
  const token = makeJwt({
    sub: 'admin-1',
    email: 'admin@example.com',
    roles: ['ADMIN'],
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  });

  await page.addInitScript(({ accessToken }) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', 'refresh-token');
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: 'admin-1',
        email: 'admin@example.com',
        roles: ['ADMIN'],
      }),
    );
  }, { accessToken: token });
}

export async function mockCommonApi(page: Page) {
  await page.route('**/api/v1/memberships/my', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: {
          id: 'mem-1',
          name: 'Gold',
          status: 'ACTIVE',
        },
      }),
    });
  });

  await page.route('**/api/v1/trainer-messaging/conversations', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [],
      }),
    });
  });
}

export async function mockNoMembership(page: Page) {
  await page.route('**/api/v1/memberships/my', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: 'null',
    });
  });
}

export async function mockMembershipPlans(page: Page) {
  await page.route('**/api/v1/memberships', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: [
          {
            id: 'plan-basic',
            name: 'Basic',
            description: 'Basic fitness access',
            purchasePrice: 100000,
            level: 'BEGINNER',
          },
          {
            id: 'plan-pro',
            name: 'Pro',
            description: 'Premium training support',
            purchasePrice: 250000,
            level: 'ADVANCED',
          },
        ],
      }),
    });
  });
}

export async function hookBrowserDialogs(page: Page) {
  const alerts: string[] = [];
  const confirms: string[] = [];

  page.on('dialog', async (dialog) => {
    if (dialog.type() === 'alert') {
      alerts.push(dialog.message());
      await dialog.accept();
      return;
    }

    if (dialog.type() === 'confirm') {
      confirms.push(dialog.message());
      await dialog.accept();
      return;
    }

    await dialog.dismiss();
  });

  return { alerts, confirms };
}
