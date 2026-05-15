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
}
