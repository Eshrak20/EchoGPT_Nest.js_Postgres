
# EchoGPT Backend API

A REST API backend for EchoGPT, a multi-AI chat Chrome extension, built with NestJS, PostgreSQL, Prisma ORM, and Swagger/OpenAPI.

This project was developed as part of the Software Engineering Internship (Backend) technical assignment for AppifyDevs.

The backend provides authentication, subscription management, AI provider integration, multi-model chat, conversation history, streaming responses, web search, and administrative APIs.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Swagger API Documentation](#swagger-api-documentation)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Email Verification](#email-verification)
- [Subscription and Usage Management](#subscription-and-usage-management)
- [AI Provider Configuration](#ai-provider-configuration)
- [Chat and Streaming](#chat-and-streaming)
- [Web Search](#web-search)
- [Admin APIs](#admin-apis)
- [Postman Testing](#postman-testing)
- [Security](#security)
- [Database Schema](#database-schema)
- [Docker](#docker)
- [Project Structure](#project-structure)
- [Git Workflow](#git-workflow)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)

---

## Overview

EchoGPT is a backend service designed to support a multi-AI chat application.

The system allows users to interact with different AI providers, manage conversations, search the web, and access features based on their subscription plans.

Administrators can manage users, subscriptions, AI providers, and monitor application usage and system health.

The application follows a modular NestJS architecture, separating controllers, services, DTOs, database access, authentication, and provider integrations.

### Project Reference

Chrome Extension:

https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj

---

## Features

### 1. Authentication and Authorization

- User registration and login.
- JWT access-token authentication.
- Refresh-token support with token rotation.
- Secure logout and logout from all sessions.
- Argon2id password hashing.
- Email verification with expiring verification tokens.
- Resend email verification.
- Prevent unverified users from logging in.
- Role-based access control for USER and ADMIN.
- Protected routes using NestJS guards.

### 2. User Management

- Get authenticated user profile.
- Update profile information.
- Change password.
- Delete user account.
- User listing and pagination.
- Retrieve individual user information.
- Administrative role and account-status management.

### 3. Subscription Management

- FREE and PREMIUM subscription plans.
- Subscription status and current plan.
- Upgrade and downgrade operations.
- Request limits based on subscription plans.
- Track subscription usage.
- Get remaining requests and usage statistics.

### 4. AI Provider Management

Supported provider integrations:

- OpenAI
- Anthropic Claude
- Google Gemini

Features:

- Create, update, and delete AI providers.
- Add and manage provider models.
- Enable or disable providers and models.
- Encrypt provider API keys before database storage.
- Select a default provider.
- Provider health-check endpoint.

### 5. Chat API

- Send prompts to AI models.
- Select an AI provider model.
- Create and manage conversations.
- Retrieve conversation history.
- Delete conversations.
- Persist user and assistant messages.
- Server-Sent Events (SSE) streaming responses.

### 6. Web Search

- Web search using Tavily.
- Search history.
- Recent searches.
- Search suggestions based on user history.
- Search result caching to reduce repeated external requests.

### 7. Admin Panel APIs

- Dashboard statistics.
- User management and pagination.
- Subscription statistics and management.
- AI provider overview.
- API usage analytics.
- Provider usage analytics.
- API request logs.
- System health monitoring.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| NestJS | Backend application framework |
| TypeScript | Application programming language |
| Bun | JavaScript runtime and package manager |
| PostgreSQL | Relational database |
| Prisma ORM | Database access, schema, and migrations |
| Swagger / OpenAPI | Interactive API documentation |
| Passport JWT | Authentication |
| Argon2 | Password hashing |
| Node.js Crypto | Secure tokens and API-key encryption |
| Tavily | Web search integration |
| Postman | API testing |

---

## System Architecture

The application uses a modular architecture based on NestJS.

```text
Client / Postman / Chrome Extension
                 |
                 v
          NestJS Application
                 |
                 v
         Controllers / DTOs
                 |
       Guards / Validation
                 |
                 v
              Services
                 |
        +--------+---------+
        |                  |
        v                  v
   Prisma ORM         External APIs
        |                  |
        v          +-------+-------+
    PostgreSQL     |       |       |
                   v       v       v
                OpenAI  Anthropic Gemini
                   
                   Tavily Search
```

### Architecture principles

- Controllers handle HTTP requests and responses.
- Services contain application and business logic.
- DTOs validate incoming requests.
- Guards handle authentication and authorization.
- Prisma provides database access.
- Provider integrations are separated from the chat business logic.
- Environment variables store application configuration and secrets.

---

## Prerequisites

The following software is required to run the project locally.

| Software | Purpose |
|---|---|
| Ubuntu Linux | Development environment |
| Git | Source control |
| Bun | Runtime and package manager |
| PostgreSQL | Database |
| Postman | API testing |

Node.js may also be required by certain tooling or dependencies.

Check your installed versions:

```bash
bun --version
node --version
git --version
psql --version
```

Install Bun if it is not already installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

Restart your terminal or reload your shell configuration, then verify:

```bash
bun --version
```

Install Git and PostgreSQL on Ubuntu if needed:

```bash
sudo apt update
sudo apt install git postgresql postgresql-contrib
```

Start PostgreSQL:

```bash
sudo systemctl start postgresql
```

Check the service:

```bash
sudo systemctl status postgresql
```

---

## Installation and Setup

### 1. Clone the repository

Replace the repository URL below with the actual GitHub repository URL.

```bash
git clone https://github.com/Eshrak20/EchoGPT_Nest.js_Postgres.git
```

Navigate into the project:

```bash
cd EchoGPT_Nest.js_Postgres
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

Create your local environment file:

```bash
cp .env.example .env
```

Open the file:

```bash
nano .env
```

Fill in the required configuration values.

See the [Environment Variables](#environment-variables) section for details.

### 4. Create the PostgreSQL database

Create a database named `echogpt_db`.

If you already have a PostgreSQL user with database-creation privileges:

```bash
createdb echogpt_db
```

Alternatively, enter the PostgreSQL shell:

```bash
sudo -u postgres psql
```

Execute:

```sql
CREATE DATABASE echogpt_db;
```

Create or configure a PostgreSQL user and password if needed, then ensure the `DATABASE_URL` in `.env` uses the correct credentials.

Exit the PostgreSQL shell:

```sql
\q
```

### 5. Run database migrations

Apply the committed Prisma migrations:

```bash
bunx prisma migrate deploy
```

Generate the Prisma Client:

```bash
bunx prisma generate
```

If you are setting up the project for the first time during development and need to create a new migration after modifying the Prisma schema, use:

```bash
bunx prisma migrate dev --name your_migration_name
```

Do not use `migrate dev` as a production deployment command.

### 6. Start the application

```bash
bun run start:dev
```

The development server should start on:

```text
http://localhost:3000
```

The API uses the global prefix:

```text
/api
```

For example:

```text
http://localhost:3000/api/auth/register
```

---

## Environment Variables

Create a `.env.example` file in the project root.

Use placeholders only. Never commit real passwords, API keys, JWT secrets, or encryption keys.

```env
# Application
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000

# PostgreSQL
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/echogpt_db"

# JWT Authentication
JWT_ACCESS_SECRET="replace-with-a-secure-random-secret"
JWT_ACCESS_EXPIRES_IN="15m"
REFRESH_TOKEN_EXPIRES_DAYS=30

# AI Provider Encryption
PROVIDER_ENCRYPTION_KEY="replace-with-64-character-hex-key"

# Web Search
TAVILY_API_KEY="your-tavily-api-key"
```

### Generate secure secrets

Generate a random JWT secret:

```bash
openssl rand -base64 48
```

Generate a 32-byte encryption key encoded as 64 hexadecimal characters:

```bash
openssl rand -hex 32
```

Copy the generated encryption key into `PROVIDER_ENCRYPTION_KEY`.

The provider encryption key must remain stable because existing encrypted provider API keys depend on it.

If you change the key without re-encrypting stored values, previously stored provider credentials may become unreadable.

The actual variables required by the application should match the configuration used in the source code.

Do not commit `.env` to GitHub.

---

## Database Setup

The project uses PostgreSQL with Prisma ORM.

The Prisma schema is organized into multiple files inside the Prisma schema directory.

```text
prisma/
├── schema/
│   ├── schema.prisma
│   ├── user.prisma
│   ├── auth.prisma
│   ├── subscription.prisma
│   ├── provider.prisma
│   ├── chat.prisma
│   ├── search.prisma
│   └── admin.prisma
├── migrations/
└── seed.ts
```

The schema files define the database models, enums, and relationships.

### Migration commands

Apply existing migrations:

```bash
bunx prisma migrate deploy
```

Create a new migration during development:

```bash
bunx prisma migrate dev --name descriptive_migration_name
```

Regenerate the Prisma Client:

```bash
bunx prisma generate
```

Inspect the database using Prisma Studio:

```bash
bunx prisma studio
```

Prisma Studio typically opens at:

```text
http://localhost:5555
```

### Database migration guidelines

- Commit migration files to the repository.
- Do not manually edit production database tables without a migration.
- Test migrations against a clean database before submission.
- Keep `.env` and database credentials out of Git.
- Use `migrate deploy` for applying committed migrations in a deployment environment.

---

## Running the Application

### Development

Start the application with file watching:

```bash
bun run start:dev
```

### Production build

Build the application:

```bash
bun run build
```

Start the compiled application using the configured production script:

```bash
bun run start:prod
```

The production script should be defined in `package.json`.

### Run tests

If the project's test scripts are configured:

```bash
bun run test
```

Run end-to-end tests:

```bash
bun run test:e2e
```

Run linting:

```bash
bun run lint
```

Run formatting:

```bash
bun run format
```

Check the available scripts in `package.json` if a command is not configured.

---

## Swagger API Documentation

Swagger is used to document and interactively test the REST API.

Open the Swagger UI after starting the application:

```text
http://localhost:3000/api/docs
```

Swagger provides:

- API endpoint descriptions.
- Request body schemas.
- Query and path parameters.
- Response schemas.
- Authentication configuration.
- Interactive API testing.

### Authentication in Swagger

1. Register a user using the registration endpoint.
2. Verify the user's email.
3. Login using the login endpoint.
4. Copy the returned access token.
5. Click the **Authorize** button in Swagger UI.
6. Enter the access token in the Bearer authentication field.
7. Execute protected endpoints.

The access token should be supplied using the HTTP Authorization header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Public authentication endpoints such as registration, login, email verification, and resend verification should not require a Bearer token.

---

## API Endpoints

The following endpoint groups describe the implemented API structure.

All paths are relative to:

```text
/api
```

### 1. Authentication

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/auth/register` | Register a new user | Public |
| POST | `/auth/login` | Login and obtain tokens | Public |
| POST | `/auth/refresh` | Rotate refresh token | Refresh token |
| POST | `/auth/logout` | Logout current session | Protected |
| POST | `/auth/logout-all` | Revoke all sessions | Protected |
| GET | `/auth/me` | Get authenticated user | Protected |
| GET | `/auth/verify-email` | Verify email with token | Public |
| POST | `/auth/resend-verification` | Resend verification link | Public |

### 2. User Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users/me` | Get current user profile |
| PATCH | `/users/me` | Update profile |
| PATCH | `/users/me/password` | Change password |
| DELETE | `/users/me` | Delete account |
| GET | `/users` | List users |
| GET | `/users/:id` | Get user details |
| PATCH | `/users/:id/role` | Update user role |
| PATCH | `/users/:id/status` | Update account status |

Administrative user-management endpoints require the appropriate role and authentication.

### 3. Subscription Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/subscriptions/plans` | List available plans |
| GET | `/subscriptions/me` | Get current subscription |
| POST | `/subscriptions/upgrade` | Upgrade subscription |
| POST | `/subscriptions/downgrade` | Downgrade subscription |
| GET | `/subscriptions/status` | Get subscription status |
| GET | `/subscriptions/usage` | Get usage and remaining requests |

### 4. AI Provider Management

| Method | Endpoint | Description |
|---|---|---|
| POST | `/providers` | Create provider |
| GET | `/providers` | List providers |
| GET | `/providers/:id` | Get provider details |
| PATCH | `/providers/:id` | Update provider |
| DELETE | `/providers/:id` | Delete provider |
| PATCH | `/providers/:id/status` | Enable or disable provider |
| PATCH | `/providers/:id/default` | Set default provider |
| GET | `/providers/:id/health` | Check provider health |
| POST | `/providers/:providerId/models` | Create provider model |
| GET | `/providers/:providerId/models` | List provider models |
| PATCH | `/providers/:providerId/models/:modelId` | Update model |
| DELETE | `/providers/:providerId/models/:modelId` | Delete model |

### 5. Chat API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/chat` | Send prompt and receive AI response |
| POST | `/chat/stream` | Stream AI response using SSE |
| GET | `/chat/conversations` | List conversations |
| GET | `/chat/conversations/:id` | Get conversation history |
| DELETE | `/chat/conversations/:id` | Delete conversation |

### 6. Web Search API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/search` | Search the web |
| GET | `/search/history` | Get search history |
| GET | `/search/recent` | Get recent searches |
| GET | `/search/suggestions` | Get search suggestions |

Search requests support query parameters such as `q` and `limit`.

Example:

```http
GET /api/search?q=NestJS%20dependency%20injection&limit=5
```

### 7. Admin APIs

All admin endpoints require an authenticated ADMIN user.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/admin/dashboard` | Dashboard statistics |
| GET | `/admin/users` | Administrative user listing |
| GET | `/admin/subscriptions` | List subscriptions |
| GET | `/admin/subscriptions/stats` | Subscription statistics |
| GET | `/admin/providers` | Provider overview |
| GET | `/admin/usage` | API usage analytics |
| GET | `/admin/usage/providers` | Provider usage analytics |
| GET | `/admin/logs` | Request logs |
| GET | `/admin/health` | System health |

Pagination is supported by applicable endpoints using query parameters:

```text
?page=1&limit=20
```

The actual endpoint behavior and schemas are available through Swagger UI.

---

## Authentication Flow

The authentication system uses short-lived JWT access tokens and longer-lived refresh tokens.

### Registration

```http
POST /api/auth/register
Content-Type: application/json
```

Example request:

```json
{
  "name": "Hasan G",
  "email": "hasan@example.com",
  "password": "Password123!"
}
```

The registration process creates the user, hashes the password, and generates an email verification token.

### Login

```http
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "email": "hasan@example.com",
  "password": "Password123!"
}
```

Unverified users cannot log in.

After successful login, the application returns the access and refresh tokens according to the authentication response schema.

### Refresh token

```http
POST /api/auth/refresh
```

The refresh endpoint validates the refresh token, rotates it, and returns a new token pair.

Refresh tokens are stored as hashes in the database and associated with individual sessions.

### Logout

```http
POST /api/auth/logout
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The logout endpoint revokes the current session.

The logout-all endpoint revokes all sessions associated with the authenticated user.

---

## Email Verification

Email verification is implemented using cryptographically secure random tokens.

### Development mode

During local development, the application generates a verification URL and logs it to the terminal instead of sending an actual email.

This allows the complete verification flow to be tested without an external email service.

### Verification process

1. Register a new account.
2. Copy the verification URL from the application terminal.
3. Open the URL or send a GET request using Postman.
4. The backend validates the token.
5. The user's email verification status is updated.

Example:

```http
GET /api/auth/verify-email?token=YOUR_VERIFICATION_TOKEN
```

### Resend verification

```http
POST /api/auth/resend-verification
Content-Type: application/json
```

```json
{
  "email": "hasan@example.com"
}
```

A new verification token is generated for an existing unverified account.

Previous unused tokens are invalidated when a new token is issued.

The verification endpoint rejects invalid, expired, and previously used tokens.

For production, replace terminal logging with a proper email delivery service.

---

## Subscription and Usage Management

The application supports FREE and PREMIUM subscription plans.

Subscription limits are defined in the application configuration.

Example configuration:

| Plan | Monthly Requests |
|---|---:|
| FREE | 50 |
| PREMIUM | 1000 |

These values are application defaults and can be adjusted according to business requirements.

### Usage tracking

The backend tracks subscription usage and provides APIs to retrieve:

- Current subscription plan.
- Subscription status.
- Request usage.
- Remaining requests.
- Usage period information.

The chat service checks the user's available subscription usage before processing requests.

Usage updates should be performed using database transactions or atomic conditional updates to prevent concurrent requests from exceeding subscription limits.

For production billing, integrate a payment gateway and implement verified payment callbacks before granting paid subscriptions.

---

## AI Provider Configuration

The provider management module allows administrators to configure multiple AI providers and models.

### Supported providers

| Provider | Integration |
|---|---|
| OpenAI | OpenAI API |
| Anthropic | Claude API |
| Google | Gemini API |

### Provider setup

1. Log in as an administrator.
2. Open Swagger UI.
3. Authorize using the ADMIN access token.
4. Create an AI provider.
5. Add the provider's API key and base URL if required.
6. Add one or more provider models.
7. Enable the provider and model.
8. Set the default provider if needed.
9. Test the provider health endpoint.

Provider API keys are encrypted using AES-256-GCM before storage.

The encryption key is configured using `PROVIDER_ENCRYPTION_KEY`.

API keys should never be returned in provider API responses or written to application logs.

The provider health-check endpoint can be used to verify provider connectivity and configuration.

---

## Chat and Streaming

The chat module supports normal and streaming AI responses.

### Normal chat request

```http
POST /api/chat
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
```

```json
{
  "message": "Explain dependency injection in NestJS",
  "providerModelId": "YOUR_PROVIDER_MODEL_UUID"
}
```

To continue an existing conversation, include the conversation ID:

```json
{
  "message": "Give me a practical example",
  "conversationId": "YOUR_CONVERSATION_UUID",
  "providerModelId": "YOUR_PROVIDER_MODEL_UUID"
}
```

The backend retrieves the conversation history, sends the relevant messages to the selected provider, and stores the resulting conversation messages.

The conversation ID is associated with the authenticated user.

Users cannot access conversations belonging to other users.

### Streaming chat

```http
POST /api/chat/stream
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
```

```json
{
  "message": "Explain how JWT authentication works",
  "providerModelId": "YOUR_PROVIDER_MODEL_UUID"
}
```

The streaming endpoint returns Server-Sent Events using the `text/event-stream` content type.

Clients should process the incoming stream incrementally rather than expecting one complete JSON response.

Streaming support currently includes the implemented Gemini integration.

---

## Web Search

The web search module uses Tavily to retrieve web search results.

### Search request

```http
GET /api/search?q=NestJS%20tutorial&limit=5
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The search service:

1. Validates the search query.
2. Checks the search cache.
3. Calls Tavily if no valid cached result is available.
4. Stores search history.
5. Caches search results for subsequent requests.

Search history, recent searches, and suggestions are associated with the authenticated user.

The Tavily API key must be configured in the `.env` file.

---

## Admin APIs

The administrative API module provides system-level management and monitoring.

Only users with the ADMIN role can access these endpoints.

### Dashboard statistics

```http
GET /api/admin/dashboard
Authorization: Bearer ADMIN_ACCESS_TOKEN
```

Returns statistics such as:

- Total and active users.
- Verified users.
- Total conversations and messages.
- Active AI providers.
- Active subscriptions.

### User and subscription management

Administrators can view users, inspect subscriptions, and retrieve subscription statistics.

Pagination is supported where applicable.

### API usage analytics

The usage endpoints provide aggregated subscription usage and provider-model activity.

### Request logs

The request-log endpoint provides paginated API request records, including request methods, paths, status codes, response times, and timestamps.

Sensitive credentials, authorization headers, and raw verification tokens must not be recorded.

### System health

The system health endpoint reports application and database health information, uptime, memory usage, and environment information.

Avoid exposing sensitive infrastructure information through publicly accessible endpoints.

---

## Postman Testing

Postman can be used to test the REST API independently of the frontend.

Recommended collection structure:

```text
EchoGPT Backend
|
|-- Authentication
|   |-- Register
|   |-- Login
|   |-- Refresh Token
|   |-- Logout
|   |-- Logout All
|   |-- Get Me
|   |-- Verify Email
|   |-- Resend Verification
|
|-- Users
|   |-- Get Profile
|   |-- Update Profile
|   |-- Change Password
|   |-- Delete Account
|
|-- Subscriptions
|   |-- Get Plans
|   |-- Get My Subscription
|   |-- Upgrade
|   |-- Downgrade
|   |-- Get Usage
|
|-- Providers
|   |-- Create Provider
|   |-- List Providers
|   |-- Add Model
|   |-- Set Default
|   |-- Health Check
|
|-- Chat
|   |-- Send Message
|   |-- Stream Message
|   |-- Conversation History
|   |-- Delete Conversation
|
|-- Search
|   |-- Search
|   |-- Search History
|   |-- Recent Searches
|   |-- Suggestions
|
|-- Admin
    |-- Dashboard
    |-- Users
    |-- Subscriptions
    |-- Providers
    |-- Usage
    |-- Logs
    |-- Health
```

### Postman environment

Create a Postman environment with:

```text
baseUrl = http://localhost:3000
accessToken = YOUR_ACCESS_TOKEN
refreshToken = YOUR_REFRESH_TOKEN
verificationToken = YOUR_VERIFICATION_TOKEN
providerModelId = YOUR_PROVIDER_MODEL_UUID
conversationId = YOUR_CONVERSATION_UUID
```

Use these variables in request URLs:

```text
{{baseUrl}}/api/auth/login
```

For protected requests, set:

```http
Authorization: Bearer {{accessToken}}
```

After successful login, save the access token and refresh token in the Postman environment.

The verification token can be copied from the development terminal output.

---

## Security

The project incorporates the following security practices:

- Argon2id password hashing.
- JWT access-token authentication.
- Refresh-token hashing, rotation, and revocation.
- Role-based authorization.
- Email verification before login.
- Validation of request bodies and parameters.
- Database relations and foreign-key constraints.
- Encryption of stored AI provider API keys.
- User-specific access control for conversations.
- Environment-based configuration.
- Generic resend-verification responses to reduce email enumeration.
- Request logging without storing authentication credentials.

### Production considerations

Before production deployment, configure:

- HTTPS and secure transport.
- Production email delivery.
- Rate limiting and brute-force protection.
- Secure CORS policies.
- Production database credentials.
- Secret management and key rotation.
- Monitoring, backups, and error tracking.
- Payment verification for paid subscriptions.

Never commit `.env` or actual API keys to GitHub.

---

## Database Schema

The database uses a normalized relational structure with PostgreSQL.

The main entities include:

| Model | Purpose |
|---|---|
| User | User accounts and profile information |
| Role | USER and ADMIN roles |
| Session | Refresh-token sessions |
| EmailVerificationToken | Email verification tokens |
| Subscription | User subscription plans and status |
| SubscriptionUsage | Subscription request usage |
| Provider | AI provider configuration |
| ProviderModel | AI models belonging to providers |
| Conversation | User conversations |
| Message | Chat messages |
| SearchHistory | User search history |
| SearchCache | Cached web search results |
| ApiRequestLog | API request activity and performance |

The schema uses UUID identifiers, foreign keys, indexes, unique constraints, and cascade behavior where appropriate.

Database changes are managed through Prisma migrations.

---

## Docker

Docker is optional for this assignment.

The application can run directly on Ubuntu using Bun and a locally installed PostgreSQL server.

A PostgreSQL-only Docker Compose setup can also be used for local development.

If using Docker, ensure that the database credentials and connection string match the environment configuration.

Do not use a development database password in a public deployment.

---

## Project Structure

The project follows a modular NestJS structure.

```text
src/
|
|-- auth/
|   |-- dto/
|   |-- guards/
|   |-- strategies/
|   |-- decorators/
|   |-- auth.controller.ts
|   |-- auth.service.ts
|   |-- auth.module.ts
|
|-- users/
|
|-- subscriptions/
|
|-- providers/
|   |-- dto/
|   |-- providers.controller.ts
|   |-- providers.service.ts
|   |-- providers-encryption.service.ts
|   |-- providers.module.ts
|
|-- chat/
|
|-- search/
|   |-- dto/
|   |-- providers/
|   |-- search.controller.ts
|   |-- search.service.ts
|   |-- search.module.ts
|
|-- admin/
|   |-- dto/
|   |-- admin.controller.ts
|   |-- admin.service.ts
|   |-- admin.module.ts
|
|-- common/
|   |-- interceptors/
|
|-- prisma/
|   |-- prisma.module.ts
|   |-- prisma.service.ts
|
|-- app.module.ts
|-- main.ts

prisma/
|-- schema/
|-- migrations/
|-- seed.ts

.env.example
.gitignore
package.json
bun.lock
README.md
```

Some file names may differ depending on the current implementation.

---

## Git Workflow

The project uses Git for version control.

Recommended commit message conventions:

```text
feat: add authentication and authorization
feat: implement email verification and resend flow
feat: add subscription usage management
feat: implement AI provider management
feat: add chat streaming responses
feat: implement web search and caching
feat: add admin dashboard APIs
docs: add project setup and API documentation
```

Before committing:

```bash
git status
```

Make sure `.env`, credentials, and generated secrets are not staged.

Commit changes:

```bash
git add .
git commit -m "docs: complete EchoGPT project documentation"
```

Push to GitHub:

```bash
git push origin main
```

Use the actual branch name configured in your repository.

---

## Troubleshooting

### PostgreSQL connection error

Verify that PostgreSQL is running:

```bash
sudo systemctl status postgresql
```

Check the database:

```bash
psql -h localhost -U postgres -d echogpt_db
```

Ensure `DATABASE_URL` contains the correct username, password, host, port, and database name.

### Prisma Client errors

Regenerate the Prisma Client:

```bash
bunx prisma generate
```

Apply migrations:

```bash
bunx prisma migrate deploy
```

If you are developing a new schema change, create a migration using:

```bash
bunx prisma migrate dev --name descriptive_migration_name
```

### Swagger is not opening

Confirm that the application is running and that Swagger is configured in `main.ts`.

Check:

```text
http://localhost:3000/api/docs
```

Verify that the global prefix and Swagger setup use the same paths.

### Unauthorized or forbidden errors

- `401 Unauthorized`: Check the access token, expiration, and Authorization header.
- `403 Forbidden`: Check whether the authenticated user has the required role.
- Ensure the user account is active.
- For admin endpoints, verify that the database role is ADMIN.
- Obtain a fresh access token after changing the user's role.

### AI provider errors

Check:

- The provider is enabled.
- The selected model exists and is enabled.
- The API key is valid.
- The encryption key matches the key used to encrypt the stored credential.
- The provider API is reachable.

### Email verification errors

Check the verification URL printed in the terminal.

Expired or previously used tokens cannot be reused. Request a new verification link using the resend endpoint.

---

## Future Improvements

Potential future improvements include:

- Integrating a production email delivery service.
- Adding payment gateway integration for subscriptions.
- Adding rate limiting and request throttling.
- Adding automated unit and end-to-end tests.
- Improving API usage analytics with dedicated AI request records.
- Adding Docker Compose for a fully reproducible environment.
- Adding CI/CD pipelines.
- Implementing advanced monitoring and structured logging.

---

## Author

**Eshrak G**

Backend & Full Stack Developer

GitHub: https://github.com/Eshrak20

Portfolio: https://e.veringroup.com/

---

## Assignment

Software Engineering Internship (Backend)

AppifyDevs

**Assignment:** EchoGPT Backend REST API Development using NestJS, PostgreSQL & Swagger.
