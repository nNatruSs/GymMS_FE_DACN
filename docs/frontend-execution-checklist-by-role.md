# Frontend Execution Checklist By Role

This document turns `docs/backend-api-role-guide.md` into a frontend build checklist.

## Quick test accounts (from seed)

Source: `prisma/seed.demo-users.ts` in backend source.

- Admin: `admin@gym.local` / `Admin@123456`
- Member: `member@gym.local` / `Member@123456`
- Trainer: `trainer@gym.local` / `Trainer@123456`
- Additional seeded users often use: `Password@123456`

If backend deploy overrides env vars (`SEED_*`), credentials can differ.

## Shared foundation (do first)

- [ ] Create `AuthService` for `POST /auth/login`, `POST /auth/refresh-token`, `POST /auth/logout`
- [ ] Implement token storage (`accessToken`, `refreshToken`) and refresh interceptor
- [ ] Build role-aware route guard using `GET /user/{userId}/roles` after login
- [ ] Centralize API response unwrap (many endpoints wrap data in a common response object)
- [ ] Add error normalizer for `401`, `403`, validation errors

## Minimal shared DTOs

```ts
export type RoleName = 'ADMIN' | 'TRAINER' | 'MEMBER';

export interface LoginRequestDto {
  username: string;
  password: string;
  ip?: string;
  rememberMe?: boolean;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface ApiEnvelope<T> {
  status?: string;
  message?: string;
  data: T;
}

export interface PaginationQueryDto {
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  sortBy?: string;
}
```

## Public flows (unauthenticated)

### 1) Auth pages

- [ ] Login page -> `POST /auth/login`
- [ ] Register page -> `POST /auth/register`
- [ ] Email verify callback page -> `GET /user/verify-email?token=...`, `POST /user/verify-email`

Minimal DTOs:

```ts
export interface RegisterRequestDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender?: string;
  dob?: string; // YYYY-MM-DD
  address?: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyEmailRequestDto {
  token: string;
  password?: string;
  confirmPassword?: string;
}
```

## Member role checklist

### 1) Member dashboard shell

- [ ] My profile summary -> `GET /users/me` (if present in your role guide) or role-specific current-user endpoint
- [ ] Notifications bell -> `GET /notifications`, `GET /notifications/unread-count`
- [ ] Mark read -> `PATCH /notifications/{id}/read`, `PATCH /notifications/read-all`

### 2) Membership

- [ ] Membership plans page -> `GET /memberships`
- [ ] Membership detail -> `GET /memberships/{id}`
- [ ] My membership card -> `GET /memberships/my`
- [ ] Purchase flow -> `POST /memberships/{id}/checkout`

Minimal DTOs:

```ts
export interface MembershipDto {
  id: string;
  name: string;
  price: number;
  durationDays: number;
  description?: string;
}

export interface CheckoutSessionDto {
  checkoutUrl: string;
}
```

### 3) Class booking

- [ ] Class discovery/schedule list -> class-schedule list endpoint(s) from role guide
- [ ] Create booking -> member booking create endpoint(s)
- [ ] My bookings history -> member booking history endpoint(s)
- [ ] Cancel booking -> member booking cancel endpoint(s)

Minimal DTOs:

```ts
export interface ClassScheduleDto {
  id: string;
  classId: string;
  trainerId: string;
  date?: string;
  startTime: string;
  endTime: string;
  capacity: number;
  bookedCount?: number;
}

export interface CreateClassBookingRequestDto {
  classScheduleId: string;
}
```

### 4) Trainer discovery + booking

- [ ] Trainer list/filter -> `GET /trainer-bookings/trainers`
- [ ] Trainer detail -> `GET /trainer-bookings/trainers/{trainerId}`
- [ ] Trainer slots -> `GET /trainer-bookings/trainers/{trainerId}/slots`
- [ ] Book trainer session -> trainer booking create endpoint in role guide
- [ ] Cancel trainer booking -> `POST /trainer-bookings/{id}/cancel`

Minimal DTOs:

```ts
export interface TrainerListQueryDto {
  q?: string;
  specialization?: string;
  date?: string; // ISO
  availableOnly?: boolean;
  priceMin?: number;
  priceMax?: number;
}

export interface TrainerSlotDto {
  startAt: string; // ISO
  endAt: string; // ISO
  available: boolean;
}

export interface CancelTrainerBookingRequestDto {
  reason: string;
}
```

### 5) Trainer messaging + chatbot

- [ ] Contacts -> `GET /trainer-messaging/contacts`
- [ ] Conversation list -> `GET /trainer-messaging/conversations`
- [ ] Create/open conversation -> `POST /trainer-messaging/conversations`
- [ ] Message list/send/read -> `GET/POST .../messages`, `POST .../read`
- [ ] Chatbot session + messages -> `/chatbot/session*` endpoints

Minimal DTOs:

```ts
export interface CreateConversationRequestDto {
  partnerId: string;
}

export interface SendMessageRequestDto {
  content: string;
}

export interface ChatbotSendMessageRequestDto {
  message: string;
}
```

## Trainer role checklist

### 1) Trainer dashboard

- [ ] Personal stats cards -> trainer reporting endpoints in role guide
- [ ] Upcoming sessions -> trainer-booking list endpoint(s) for current trainer
- [ ] Session detail -> `GET /trainer-bookings/{id}`

### 2) Availability and schedule

- [ ] Weekly availability editor -> trainer availability endpoints from role guide
- [ ] Save availability -> trainer update endpoint(s)
- [ ] Schedule exceptions -> trainer exception endpoint(s), if allowed

### 3) Trainer messaging

- [ ] Same messaging stack as member, trainer perspective
- [ ] Ensure conversation query supports pagination and infinite scroll

### 4) Support and notifications

- [ ] Notifications center -> `/notifications*`
- [ ] Send feedback -> `POST /support/feedback`

## Admin role checklist

### 1) Admin shell + user management

- [ ] User list/search/filter -> `GET /user/list`
- [ ] User detail -> `GET /user/{id}`
- [ ] Create user -> `POST /user/create`
- [ ] Update/delete user -> `PATCH /user/{id}`, `DELETE /user/{id}`
- [ ] Assign/revoke roles -> `POST /user/{userId}/roles`, `DELETE /user/{userId}/roles/{roleId}`

Minimal DTOs:

```ts
export interface UserListQueryDto extends PaginationQueryDto {
  q?: string;
  email?: string;
  role?: RoleName | 'ALL';
  searchField?: string;
  counted?: boolean;
}

export interface CreateUserRequestDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender?: string;
  dob?: string;
}

export interface AssignRolesRequestDto {
  roleIds: string[];
}
```

### 2) Roles management

- [ ] Role list/create/update/delete -> all `/roles*` admin endpoints in role guide
- [ ] Users by role view -> `GET /user/by-role/{roleId}`

### 3) Class schedule + class booking operations

- [ ] CRUD class schedule -> `/class-schedule/*` admin endpoints
- [ ] Manage schedule exceptions -> `/class-schedule/{scheduleId}/exceptions`, `/class-schedule/exceptions/{exceptionId}`
- [ ] CRUD class booking (admin ops) -> `/class-booking/*` admin endpoints

### 4) Membership + trainer admin operations

- [ ] Membership CRUD/pricing -> admin memberships endpoints
- [ ] Trainer profile/admin update -> admin trainer endpoints

### 5) Reporting and finance

- [ ] KPI dashboard -> `/reporting/summary-kpis`
- [ ] Revenue analytics -> `/reporting/revenue-analytics`
- [ ] Class performance -> `/reporting/class-performance`
- [ ] Payments reconciliation screens -> `/payments*` admin endpoints

## Multi-role restricted checklist

For endpoints marked as multi-role in `backend-api-role-guide.md`:

- [ ] Add route-level role matrix in frontend config (feature flags by role)
- [ ] Reuse one page component with per-role action controls
- [ ] Hide unavailable actions in UI, but still rely on backend authorization

Suggested role matrix type:

```ts
export type FeatureKey =
  | 'VIEW_REPORTING'
  | 'MANAGE_USERS'
  | 'BOOK_TRAINER'
  | 'USE_MESSAGING'
  | 'MANAGE_CLASS_SCHEDULE';

export const ROLE_FEATURES: Record<RoleName, FeatureKey[]> = {
  ADMIN: ['VIEW_REPORTING', 'MANAGE_USERS', 'MANAGE_CLASS_SCHEDULE'],
  TRAINER: ['USE_MESSAGING'],
  MEMBER: ['BOOK_TRAINER', 'USE_MESSAGING'],
};
```

## Suggested implementation order

1. Public auth + token refresh
2. Shared notifications + profile/avatar
3. Member core flows (membership, class booking, trainer booking)
4. Trainer messaging + booking management
5. Admin user/role management
6. Admin reporting + payment operations

## Practical notes

- Use `backend-api-role-guide.md` as API truth for route/path/method and sample payload format.
- Some response schemas are missing in Swagger; infer by testing real responses with seeded accounts.
- Keep DTO files in `src/app/core/api/dto/*` and map server objects to view models in feature modules.
