# Backend API Role Guide (Generated)

Total endpoints: **120**

Role source: `@Public()` and `@Roles(...)` decorators in backend controllers with global `AuthGuard` + `RolesGuard`.

## Public APIs (8)

### POST /auth/login
- Purpose: AuthController_login
- Role access: Public (no token required)
- Params: none
- Request body example:
```json
{
  "username": "admin1@example.com",
  "password": "password123",
  "ip": "192.168.1.1",
  "rememberMe": true
}
```
- Response example: not defined in OpenAPI schema

### POST /auth/logout
- Purpose: AuthController_logout
- Role access: Public (no token required)
- Params: none
- Request body example:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
- Response example: not defined in OpenAPI schema

### POST /auth/refresh-token
- Purpose: AuthController_refreshToken
- Role access: Public (no token required)
- Params: none
- Request body example:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "ip": "192.168.1.1"
}
```
- Response example: not defined in OpenAPI schema

### POST /auth/register
- Purpose: Public member self-registration with email verification
- Role access: Public (no token required)
- Params: none
- Request body example:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "member@example.com",
  "phone": "010-1234-5678",
  "gender": "male",
  "dob": "1995-01-01",
  "address": "123 Main St",
  "password": "SecurePass@123",
  "confirmPassword": "SecurePass@123"
}
```
- Response example: not defined in OpenAPI schema

### GET /health
- Purpose: AppController_getHealth
- Role access: Public (no token required)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /payments/webhook/stripe
- Purpose: Stripe webhook endpoint
- Role access: Public (no token required)
- Params:
  - `header` `stripe-signature` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /user/verify-email
- Purpose: Verify a newly created user email address
- Role access: Public (no token required)
- Params:
  - `query` `token` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /user/verify-email
- Purpose: Activate a verified user, optionally setting the initial password when the verification flow requires it
- Role access: Public (no token required)
- Params: none
- Request body example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "password": "SecurePass@123",
  "confirmPassword": "SecurePass@123"
}
```
- Response example: not defined in OpenAPI schema

## Authenticated (Any Role) (32)

### POST /chatbot/session
- Purpose: Create or return the active chatbot session
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /chatbot/session/active
- Purpose: Get the active chatbot session for the member
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /chatbot/session/{sessionId}/close
- Purpose: Close a member chatbot session
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `sessionId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /chatbot/session/{sessionId}/messages
- Purpose: Get chat messages for a member session
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `sessionId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /chatbot/session/{sessionId}/messages
- Purpose: Send a member message to the chatbot
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `sessionId` (required=true), example: `"string"`
- Request body example:
```json
{
  "message": "What classes do I have booked?"
}
```
- Response example: not defined in OpenAPI schema

### GET /exercises
- Purpose: List workout exercises
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /memberships
- Purpose: List all membership tiers
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /memberships/my
- Purpose: Get my active membership
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /memberships/{id}
- Purpose: Get a membership tier by ID
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /memberships/{id}/checkout
- Purpose: Purchase a membership via Stripe checkout
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /notifications
- Purpose: Get paginated notifications for the current user
- Role access: Authenticated user (any logged-in role)
- Params:
  - `query` `page` (required=false), example: `"1"`
  - `query` `limit` (required=false), example: `"10"`
  - `query` `unreadOnly` (required=false), example: `"true"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /notifications/read-all
- Purpose: Mark all notifications as read for the current user
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /notifications/unread-count
- Purpose: Get unread notification count for the current user
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /notifications/{id}/read
- Purpose: Mark one notification as read
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /payments/checkout
- Purpose: Create a Stripe checkout session
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
{
  "targetType": "CLASS_BOOKING",
  "targetId": "550e8400-e29b-41d4-a716-446655440000",
  "amount": 50000,
  "currency": "VND"
}
```
- Response example: not defined in OpenAPI schema

### GET /reporting/class-performance
- Purpose: Get class performance insights for the admin dashboard
- Role access: Authenticated user (any logged-in role)
- Params:
  - `query` `startDate` (required=false), example: `"2026-01-01"`
  - `query` `endDate` (required=false), example: `"2026-06-30"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /reporting/revenue-analytics
- Purpose: Get revenue analytics time series for the admin dashboard
- Role access: Authenticated user (any logged-in role)
- Params:
  - `query` `startDate` (required=false), example: `"2026-01-01"`
  - `query` `endDate` (required=false), example: `"2026-06-30"`
  - `query` `interval` (required=false), example: `"month"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /reporting/summary-kpis
- Purpose: Get summary KPIs for the admin dashboard
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /support/feedback
- Purpose: Submit support feedback
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
{}
```
- Response example: not defined in OpenAPI schema

### GET /trainer-bookings/trainers
- Purpose: List trainers available for trainer booking
- Role access: Authenticated user (any logged-in role)
- Params:
  - `query` `q` (required=false), example: `"strength"`
  - `query` `specialization` (required=false), example: `"Strength & Conditioning"`
  - `query` `date` (required=false), example: `"2026-04-10T00:00:00.000Z"`
  - `query` `availableOnly` (required=false), example: `true`
  - `query` `priceMin` (required=false), example: `150000`
  - `query` `priceMax` (required=false), example: `500000`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer-bookings/trainers/{trainerId}
- Purpose: Get trainer booking profile details
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `trainerId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer-bookings/trainers/{trainerId}/slots
- Purpose: Get bookable slots for a trainer
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `trainerId` (required=true), example: `"string"`
  - `query` `from` (required=false), example: `"2026-04-10T00:00:00.000Z"`
  - `query` `to` (required=false), example: `"2026-04-16T00:00:00.000Z"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer-bookings/{id}
- Purpose: Get trainer booking details
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer-bookings/{id}/cancel
- Purpose: Cancel an eligible trainer booking
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "reason": "Trainer unavailable due to event"
}
```
- Response example: not defined in OpenAPI schema

### GET /trainer-messaging/contacts
- Purpose: List booking-eligible trainer messaging contacts
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer-messaging/conversations
- Purpose: List trainer messaging conversations for the caller
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer-messaging/conversations
- Purpose: Create or return the conversation for a trainer-member pair
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
{
  "partnerId": "df7b6f79-4d34-495e-9ce9-0e47779f4ff0"
}
```
- Response example: not defined in OpenAPI schema

### GET /trainer-messaging/conversations/{conversationId}/messages
- Purpose: Get paginated messages for a trainer-member conversation
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `conversationId` (required=true), example: `"string"`
  - `query` `beforeMessageAt` (required=false), example: `"2026-04-09T12:00:00.000Z"`
  - `query` `limit` (required=false), example: `0`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer-messaging/conversations/{conversationId}/messages
- Purpose: Send a message in a trainer-member conversation
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `conversationId` (required=true), example: `"string"`
- Request body example:
```json
{
  "content": "Can we move our session to later this week?"
}
```
- Response example: not defined in OpenAPI schema

### POST /trainer-messaging/conversations/{conversationId}/read
- Purpose: Mark a trainer-member conversation as read for the caller
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `conversationId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /user/avatar
- Purpose: Upload avatar for the current authenticated user
- Role access: Authenticated user (any logged-in role)
- Params: none
- Request body example:
```json
{
  "file": "string"
}
```
- Response example: not defined in OpenAPI schema

### GET /user/{userId}/roles
- Purpose: Get user roles
- Role access: Authenticated user (any logged-in role)
- Params:
  - `path` `userId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

## Admin APIs (32)

### POST /class-booking/create
- Purpose: Create a new class booking (Admin only)
- Role access: ADMIN
- Params: none
- Request body example:
```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "bookingStartDate": "2025-01-01",
  "bookingEndDate": "2025-01-31",
  "status": "confirmed",
  "classScheduleId": [
    "123e4567-e89b-12d3-a456-426614174001",
    "123e4567-e89b-12d3-a456-426614174002"
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /class-booking/{id}
- Purpose: Delete class booking permanently (Admin only)
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /class-booking/{id}
- Purpose: Update class booking status (Admin only)
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "status": "confirmed"
}
```
- Response example: not defined in OpenAPI schema

### POST /class-schedule/create
- Purpose: Create a new class schedule
- Role access: ADMIN
- Params: none
- Request body example:
```json
{
  "classId": "123e4567-e89b-12d3-a456-426614174000",
  "trainerId": "123e4567-e89b-12d3-a456-426614174000",
  "dayOfWeek": "MON",
  "daysOfWeek": [
    "MON",
    "WED",
    "FRI"
  ],
  "startTime": "2025-01-01T09:00:00Z",
  "endTime": "2025-01-01T10:00:00Z",
  "validFrom": "2025-01-01",
  "validUntil": "2025-12-31",
  "location": "Studio A",
  "capacity": 20,
  "isActive": true
}
```
- Response example: not defined in OpenAPI schema

### DELETE /class-schedule/exceptions/{exceptionId}
- Purpose: Delete an exception
- Role access: ADMIN
- Params:
  - `path` `exceptionId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /class-schedule/exceptions/{exceptionId}
- Purpose: Update an exception
- Role access: ADMIN
- Params:
  - `path` `exceptionId` (required=true), example: `"string"`
- Request body example:
```json
{
  "type": "CANCELLED",
  "reason": "string",
  "newStartTime": "10:00",
  "newEndTime": "11:00"
}
```
- Response example: not defined in OpenAPI schema

### DELETE /class-schedule/{id}
- Purpose: Delete class schedule
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-schedule/{id}
- Purpose: Get class schedule by ID
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
  - `query` `date` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /class-schedule/{id}
- Purpose: Update class schedule information
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "classId": "123e4567-e89b-12d3-a456-426614174000",
  "trainerId": "123e4567-e89b-12d3-a456-426614174000",
  "dayOfWeek": "MON",
  "daysOfWeek": [
    "MON",
    "WED",
    "FRI"
  ],
  "startTime": "2025-01-01T09:00:00Z",
  "endTime": "2025-01-01T10:00:00Z",
  "validFrom": "2025-01-01",
  "validUntil": "2025-12-31",
  "location": "Studio A",
  "capacity": 20,
  "isActive": true
}
```
- Response example: not defined in OpenAPI schema

### POST /class-schedule/{scheduleId}/exceptions
- Purpose: Add an exception date to a schedule
- Role access: ADMIN
- Params:
  - `path` `scheduleId` (required=true), example: `"string"`
- Request body example:
```json
{
  "exceptionDate": "2025-12-25",
  "type": "CANCELLED",
  "reason": "Christmas Day - Gym Closed",
  "newStartTime": "10:00",
  "newEndTime": "11:00"
}
```
- Response example: not defined in OpenAPI schema

### POST /memberships
- Purpose: Create a membership tier (admin only)
- Role access: ADMIN
- Params: none
- Request body example:
```json
{
  "name": "Premium",
  "description": "Access to all gym facilities",
  "minPrice": 500000,
  "purchasePrice": 480000,
  "level": "PREMIUM"
}
```
- Response example: not defined in OpenAPI schema

### DELETE /memberships/{id}
- Purpose: Delete a membership tier (admin only)
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /memberships/{id}
- Purpose: Update a membership tier (admin only)
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "name": "Premium",
  "description": "Access to all gym facilities",
  "minPrice": 500000,
  "purchasePrice": 480000,
  "level": "PREMIUM"
}
```
- Response example: not defined in OpenAPI schema

### GET /roles
- Purpose: Get all roles with pagination and search
- Role access: ADMIN
- Params:
  - `query` `page` (required=false), example: `0`
  - `query` `limit` (required=false), example: `0`
  - `query` `search` (required=false), example: `"string"`
  - `query` `sortBy` (required=false), example: `"name"`
  - `query` `sortOrder` (required=false), example: `"asc"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /roles
- Purpose: Create a new role
- Role access: ADMIN
- Params: none
- Request body example:
```json
{
  "name": "CUSTOM_MANAGER",
  "description": "Custom manager role for specific department"
}
```
- Response example: not defined in OpenAPI schema

### GET /roles/search
- Purpose: Search roles
- Role access: ADMIN
- Params:
  - `query` `page` (required=false), example: `0`
  - `query` `limit` (required=false), example: `0`
  - `query` `search` (required=false), example: `"string"`
  - `query` `sortBy` (required=false), example: `"name"`
  - `query` `sortOrder` (required=false), example: `"asc"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### DELETE /roles/{id}
- Purpose: Delete role
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
  - `query` `force` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /roles/{id}
- Purpose: Get role by ID
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /roles/{id}
- Purpose: Update role
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "name": "CUSTOM_MANAGER",
  "description": "Custom manager role for specific department"
}
```
- Response example: not defined in OpenAPI schema

### GET /roles/{id}/users
- Purpose: Get all users with specific role
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
  - `query` `page` (required=true), example: `0`
  - `query` `limit` (required=true), example: `0`
  - `query` `search` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /roles/{id}/users
- Purpose: Assign role to multiple users
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "userIds": [
    "uuid-1",
    "uuid-2"
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /roles/{roleId}/users/{userId}
- Purpose: Revoke role from user
- Role access: ADMIN
- Params:
  - `path` `roleId` (required=true), example: `"string"`
  - `path` `userId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer/create
- Purpose: Create a new trainer
- Role access: ADMIN
- Params: none
- Request body example:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com",
  "phone": "010-1234-5678",
  "gender": "male",
  "dob": "1995-01-01",
  "address": "123 Main St",
  "password": "SecurePass@123",
  "status": "active",
  "ptSessionPrice30": 150000,
  "ptSessionPrice60": 250000,
  "ptSessionPrice90": 350000,
  "specialization": "Strength & Conditioning",
  "experienceYears": 6,
  "biography": "Certified coach focused on strength, mobility, and sustainable progress.",
  "certifications": [
    "NASM CPT",
    "Precision Nutrition Level 1"
  ],
  "areasOfExpertise": [
    "Hypertrophy",
    "Fat Loss",
    "Mobility"
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /trainer/{id}
- Purpose: Delete trainer
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /user/by-role/{roleId}
- Purpose: Get users by role
- Role access: ADMIN
- Params:
  - `path` `roleId` (required=true), example: `"string"`
  - `query` `page` (required=true), example: `0`
  - `query` `limit` (required=true), example: `0`
  - `query` `search` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /user/create
- Purpose: Create a new user and send a verification link for password setup
- Role access: ADMIN
- Params: none
- Request body example:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com",
  "role": "MEMBER",
  "phone": "010-1234-5678",
  "gender": "male",
  "dob": "1995-01-01",
  "address": "123 Main St"
}
```
- Response example: not defined in OpenAPI schema

### GET /user/list
- Purpose: Get paginated list of users
- Role access: ADMIN
- Params:
  - `query` `page` (required=false), example: `"1"`
  - `query` `limit` (required=false), example: `"10"`
  - `query` `sort` (required=false), example: `"asc"`
  - `query` `sortBy` (required=false), example: `"createdAt"`
  - `query` `counted` (required=false), example: `true`
  - `query` `role` (required=false), example: `"ADMIN"`
  - `query` `q` (required=false), example: `"john"`
  - `query` `email` (required=false), example: `"john.doe@gmail.com"`
  - `query` `searchField` (required=false), example: `"firstName"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### DELETE /user/{id}
- Purpose: Delete user
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /user/{id}
- Purpose: Get user by ID
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /user/{id}
- Purpose: Update user information
- Role access: ADMIN
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com",
  "phone": "010-1234-5678",
  "gender": "male",
  "dob": "1995-01-01",
  "address": "123 Main St",
  "status": "active",
  "role": "ADMIN",
  "password": "newPassword123"
}
```
- Response example: not defined in OpenAPI schema

### POST /user/{userId}/roles
- Purpose: Assign roles to user
- Role access: ADMIN
- Params:
  - `path` `userId` (required=true), example: `"string"`
- Request body example:
```json
{
  "roleIds": [
    "role-uuid-1",
    "role-uuid-2"
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /user/{userId}/roles/{roleId}
- Purpose: Remove role from user
- Role access: ADMIN
- Params:
  - `path` `userId` (required=true), example: `"string"`
  - `path` `roleId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

## Trainer APIs (13)

### POST /diet-plans
- Purpose: Create a draft private diet plan
- Role access: TRAINER
- Params: none
- Request body example:
```json
{
  "title": "Lean Bulk Daily Plan",
  "description": "High-protein daily plan for weekday training",
  "durationDays": 30,
  "calorieTarget": 2400,
  "meals": [
    {
      "sequence": 1,
      "mealType": "BREAKFAST",
      "mealTitle": "Breakfast",
      "scheduledTime": "07:30:00",
      "foodItemsText": "Oats, eggs, banana, black coffee",
      "calories": 520,
      "proteinGrams": 35,
      "carbsGrams": 55,
      "fatGrams": 18,
      "notes": "Prioritize hydration before this meal"
    }
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /diet-plans/{id}
- Purpose: Delete an unused draft private diet plan
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /diet-plans/{id}
- Purpose: Update a never-assigned diet plan
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "title": "Lean Bulk Daily Plan",
  "description": "High-protein daily plan for weekday training",
  "durationDays": 30,
  "calorieTarget": 2400,
  "meals": [
    {
      "sequence": 1,
      "mealType": "BREAKFAST",
      "mealTitle": "Breakfast",
      "scheduledTime": "07:30:00",
      "foodItemsText": "Oats, eggs, banana, black coffee",
      "calories": 520,
      "proteinGrams": 35,
      "carbsGrams": 55,
      "fatGrams": 18,
      "notes": "Prioritize hydration before this meal"
    }
  ],
  "status": "ACTIVE"
}
```
- Response example: not defined in OpenAPI schema

### POST /diet-plans/{id}/archive
- Purpose: Archive a private diet plan
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /diet-plans/{id}/assignments
- Purpose: Create diet-plan assignments
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "assignments": [
    {
      "memberId": "11111111-1111-4111-8111-111111111111",
      "effectiveFrom": "2026-03-31",
      "effectiveTo": "2026-04-30"
    }
  ]
}
```
- Response example: not defined in OpenAPI schema

### PATCH /diet-plans/{id}/assignments/{assignmentId}
- Purpose: End or remove a diet-plan assignment
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
  - `path` `assignmentId` (required=true), example: `"string"`
- Request body example:
```json
{
  "status": "ENDED",
  "effectiveTo": "2026-03-31",
  "endReason": "Nutrition block completed successfully"
}
```
- Response example: not defined in OpenAPI schema

### POST /diet-plans/{id}/clone
- Purpose: Clone an immutable assigned diet plan into a new draft
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer-bookings/trainer/me
- Purpose: List trainer bookings assigned to current trainer
- Role access: TRAINER
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer-bookings/{id}/accept
- Purpose: Accept a pending trainer booking request
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer-bookings/{id}/reject
- Purpose: Reject a pending trainer booking request
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "reason": "Trainer unavailable due to event"
}
```
- Response example: not defined in OpenAPI schema

### GET /trainer/me/clients
- Purpose: List active clients for the current trainer
- Role access: TRAINER
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /workout-plans
- Purpose: Create a workout plan with items and assignments
- Role access: TRAINER
- Params: none
- Request body example:
```json
{
  "title": "Lower Body Strength A",
  "duration": 60,
  "status": "DRAFT",
  "visibility": "PRIVATE",
  "assignedMemberIds": [
    "123e4567-e89b-12d3-a456-426614174001",
    "123e4567-e89b-12d3-a456-426614174002"
  ],
  "planItems": [
    {
      "exerciseId": "123e4567-e89b-12d3-a456-426614174000",
      "sequence": 1,
      "targetSet": 4,
      "targetRep": 8,
      "targetWeight": 100,
      "dayOfWeek": "MON",
      "notes": "Use RPE 7 on the last set"
    }
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /workout-plans/{id}
- Purpose: Delete a workout plan
- Role access: TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

## Member/User APIs (8)

### POST /class-booking/{id}/checkout
- Purpose: Initiate payment checkout for a booking
- Role access: MEMBER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /memberships/my/change-plan
- Purpose: Create a Stripe checkout to change the authenticated member active membership tier
- Role access: MEMBER
- Params: none
- Request body example:
```json
{
  "targetMembershipId": "11111111-2222-3333-4444-555555555555"
}
```
- Response example: not defined in OpenAPI schema

### POST /memberships/my/renew
- Purpose: Renew the authenticated member active membership via Stripe checkout
- Role access: MEMBER
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer-bookings
- Purpose: Create a trainer booking request
- Role access: MEMBER
- Params: none
- Request body example:
```json
{
  "trainerId": "550e8400-e29b-41d4-a716-446655440000",
  "startAt": "2026-04-10T09:00:00.000Z",
  "endAt": "2026-04-10T10:00:00.000Z",
  "notes": "Focus on deadlift form"
}
```
- Response example: not defined in OpenAPI schema

### GET /trainer-bookings/me
- Purpose: List trainer bookings for current member
- Role access: MEMBER
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /workout-sessions
- Purpose: Start a workout session
- Role access: MEMBER
- Params: none
- Request body example:
```json
{
  "workoutPlanId": "123e4567-e89b-12d3-a456-426614174000",
  "startTime": "2026-03-24T08:00:00.000Z",
  "notes": "Felt strong today"
}
```
- Response example: not defined in OpenAPI schema

### PATCH /workout-sessions/{id}/complete
- Purpose: Complete a workout session
- Role access: MEMBER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "endTime": "2026-03-24T09:05:00.000Z",
  "notes": "Completed with one extra warmup set"
}
```
- Response example: not defined in OpenAPI schema

### POST /workout-sessions/{sessionId}/sets
- Purpose: Log a completed exercise set
- Role access: MEMBER
- Params:
  - `path` `sessionId` (required=true), example: `"string"`
- Request body example:
```json
{
  "exerciseId": "123e4567-e89b-12d3-a456-426614174000",
  "planItemId": "123e4567-e89b-12d3-a456-426614174001",
  "setNumber": 1,
  "actualRep": 8,
  "actualWeight": 100,
  "rpe": 7
}
```
- Response example: not defined in OpenAPI schema

## Multi-Role Restricted APIs (27)

### GET /class-booking/class-schedule/{classScheduleId}
- Purpose: Get bookings by class schedule ID
- Role access: ADMIN, STAFF
- Params:
  - `path` `classScheduleId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-booking/list
- Purpose: Get paginated list of class bookings
- Role access: ADMIN, STAFF
- Params:
  - `query` `page` (required=false), example: `"1"`
  - `query` `limit` (required=false), example: `"10"`
  - `query` `sort` (required=false), example: `"desc"`
  - `query` `sortBy` (required=false), example: `"createdAt"`
  - `query` `counted` (required=false), example: `true`
  - `query` `userId` (required=false), example: `"123e4567-e89b-12d3-a456-426614174000"`
  - `query` `classScheduleId` (required=false), example: `"123e4567-e89b-12d3-a456-426614174000"`
  - `query` `status` (required=false), example: `"confirmed"`
  - `query` `q` (required=false), example: `"yoga"`
  - `query` `searchField` (required=false), example: `"name"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-booking/my-bookings
- Purpose: Get current user's bookings
- Role access: MEMBER, TRAINER, STAFF, ADMIN
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-booking/user/{userId}
- Purpose: Get bookings by user ID (Admin/Staff only)
- Role access: ADMIN, STAFF
- Params:
  - `path` `userId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-booking/{id}
- Purpose: Get class booking by ID
- Role access: ADMIN, STAFF
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /class-booking/{id}/cancel
- Purpose: Cancel a class booking (Members can cancel their own)
- Role access: ADMIN, MEMBER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /class-schedule/check-conflict
- Purpose: Check if a schedule conflicts with existing schedules
- Role access: ADMIN, STAFF
- Params: none
- Request body example:
```json
{
  "trainerId": "123e4567-e89b-12d3-a456-426614174000",
  "dayOfWeek": "MON",
  "startTime": "2025-01-01T09:00:00Z",
  "endTime": "2025-01-01T10:00:00Z",
  "excludeScheduleId": "123e4567-e89b-12d3-a456-426614174000"
}
```
- Response example: not defined in OpenAPI schema

### GET /class-schedule/exceptions/{exceptionId}
- Purpose: Get a specific exception by ID
- Role access: ADMIN, STAFF
- Params:
  - `path` `exceptionId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-schedule/list
- Purpose: Get paginated list of class schedules
- Role access: ADMIN, STAFF, TRAINER, MEMBER
- Params:
  - `query` `page` (required=false), example: `"1"`
  - `query` `limit` (required=false), example: `"10"`
  - `query` `sort` (required=false), example: `"asc"`
  - `query` `sortBy` (required=false), example: `"createdAt"`
  - `query` `counted` (required=false), example: `true`
  - `query` `q` (required=false), example: `"yoga"`
  - `query` `searchField` (required=false), example: `"className"`
  - `query` `dayOfWeek` (required=false), example: `"MON"`
  - `query` `trainerId` (required=false), example: `"123e4567-e89b-12d3-a456-426614174000"`
  - `query` `classId` (required=false), example: `"123e4567-e89b-12d3-a456-426614174000"`
  - `query` `isActive` (required=false), example: `true`
  - `query` `date` (required=false), example: `"2026-02-03"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /class-schedule/{scheduleId}/exceptions
- Purpose: Get all exceptions for a schedule
- Role access: ADMIN, STAFF, TRAINER
- Params:
  - `path` `scheduleId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /diet-plans
- Purpose: List accessible diet plans
- Role access: ADMIN, STAFF, TRAINER, MEMBER
- Params:
  - `query` `page` (required=false), example: `1`
  - `query` `limit` (required=false), example: `10`
  - `query` `status` (required=false), example: `"ACTIVE"`
  - `query` `includeArchived` (required=false), example: `false`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /diet-plans/{id}
- Purpose: Get a diet plan detail view
- Role access: ADMIN, STAFF, TRAINER, MEMBER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /exercises
- Purpose: Create a workout exercise
- Role access: ADMIN, STAFF, TRAINER
- Params: none
- Request body example:
```json
{
  "name": "Back Squat",
  "description": "Compound lower-body barbell movement",
  "category": "Strength",
  "equipmentRequired": "Barbell"
}
```
- Response example: not defined in OpenAPI schema

### DELETE /exercises/{id}
- Purpose: Delete a workout exercise
- Role access: ADMIN, STAFF, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /exercises/{id}
- Purpose: Update a workout exercise
- Role access: ADMIN, STAFF, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "name": "Back Squat",
  "description": "Compound lower-body barbell movement",
  "category": "Strength",
  "equipmentRequired": "Barbell"
}
```
- Response example: not defined in OpenAPI schema

### POST /trainer-bookings/{id}/complete
- Purpose: Mark a confirmed trainer booking as completed
- Role access: ADMIN, STAFF, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer/list
- Purpose: Get paginated list of trainers
- Role access: ADMIN, STAFF
- Params:
  - `query` `page` (required=false), example: `"1"`
  - `query` `limit` (required=false), example: `"10"`
  - `query` `sort` (required=false), example: `"asc"`
  - `query` `sortBy` (required=false), example: `"createdAt"`
  - `query` `counted` (required=false), example: `true`
  - `query` `q` (required=false), example: `"john"`
  - `query` `email` (required=false), example: `"trainer@example.com"`
  - `query` `searchField` (required=false), example: `"firstName"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /trainer/{id}
- Purpose: Get trainer by ID
- Role access: ADMIN, STAFF, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PATCH /trainer/{id}
- Purpose: Update trainer information
- Role access: ADMIN, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com",
  "phone": "010-1234-5678",
  "gender": "male",
  "dob": "1995-01-01",
  "address": "123 Main St",
  "status": "active",
  "role": "ADMIN",
  "password": "newPassword123",
  "ptSessionPrice30": 150000,
  "ptSessionPrice60": 250000,
  "ptSessionPrice90": 350000,
  "specialization": "Strength & Conditioning",
  "experienceYears": 6,
  "biography": "Certified coach focused on strength, mobility, and sustainable progress.",
  "certifications": [
    "NASM CPT",
    "Precision Nutrition Level 1"
  ],
  "areasOfExpertise": [
    "Hypertrophy",
    "Fat Loss",
    "Mobility"
  ]
}
```
- Response example: not defined in OpenAPI schema

### GET /trainer/{id}/availability
- Purpose: Get trainer availability slots
- Role access: ADMIN, STAFF, TRAINER, MEMBER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### PUT /trainer/{id}/availability
- Purpose: Set trainer availability (replaces all existing slots)
- Role access: ADMIN, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
{
  "slots": [
    {
      "dayOfWeek": "MON",
      "startTime": "09:00",
      "endTime": "17:00",
      "isAvailable": true
    }
  ]
}
```
- Response example: not defined in OpenAPI schema

### DELETE /trainer/{id}/availability/{slotId}
- Purpose: Delete a single availability slot
- Role access: ADMIN, TRAINER
- Params:
  - `path` `id` (required=true), example: `"string"`
  - `path` `slotId` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### POST /trainer/{trainerId}/clients
- Purpose: Create a trainer-client link
- Role access: ADMIN, STAFF
- Params:
  - `path` `trainerId` (required=true), example: `"string"`
- Request body example:
```json
{
  "memberId": "11111111-1111-4111-8111-111111111111"
}
```
- Response example: not defined in OpenAPI schema

### PATCH /trainer/{trainerId}/clients/{linkId}/end
- Purpose: End a trainer-client link
- Role access: ADMIN, STAFF
- Params:
  - `path` `trainerId` (required=true), example: `"string"`
  - `path` `linkId` (required=true), example: `"string"`
- Request body example:
```json
{
  "endReason": "Client moved to another coach"
}
```
- Response example: not defined in OpenAPI schema

### GET /workout-plans
- Purpose: List accessible workout plans
- Role access: TRAINER, MEMBER
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /workout-plans/{id}
- Purpose: Get workout plan details
- Role access: TRAINER, MEMBER
- Params:
  - `path` `id` (required=true), example: `"string"`
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema

### GET /workout-sessions
- Purpose: List accessible workout sessions
- Role access: MEMBER, TRAINER
- Params: none
- Request body example:
```json
null
```
- Response example: not defined in OpenAPI schema
