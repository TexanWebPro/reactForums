# @reactforums/adapters

<b>The integration layer of the reactForums ecosystem.</b>

This package contains concrete adapter implementations for external systems such as databases, authentication providers, storage backends, event buses, and third-party services.

Adapters implement the interfaces defined in `@reactforums/core`, allowing the core domain and services to remain fully framework-agnostic, database-agnostic, and infrastructure-agnostic.

No business logic lives here. Adapters are pure infrastructure.

## What This Package Is (and Is Not)

<b>This package is:</b>

- A collection of <i>concrete implementations</i> for core-defined interfaces.
- Responsible for <i>how</i> data is stored, fetched, transmitted, or emitted.
- Free to use any database schema, ORM, query builder, SDK, or vendor-specific API.
- Designed to be swapped without modifying core services or UI clients.

<b>This package is not:</b>

- A place for business rules.
- A place for domain validation or authorization.
- A required dependency for advanced users (you may roll your own adapters).

<hr>

## Relationship to `@reactforums/core`

`@reactforums/core` defines the contracts.

`@reactforums/adapters` fulfills them.

Core owns:

- Domain models
- Repository interfaces
- Service abstractions
- Authorization rules
- Application-level behavior

Adapters own:

- SQL queries
- ORM models
- Table schemas
- Vendor SDKs
- Network and IO concerns

This separation allows experienced backend developers to write highly optimized, idiomatic data access logic without being constrained by a prepackaged persistence layer.

<hr>

## Features

- <b>Database Adapters</b>

  Concrete implementations of core repository interfaces:
  - Postgres
  - MySQL
  - SQLite
  - Prisma
  - Drizzle
  - In-memory (testing)

  Each adapter maps its own schema to core domain models.

- <b>Auth Adapters</b>

  Authentication and identity provider integrations:
  - Clerk
  - OAuth providers
  - SSO
  - JWT
  - Custom identity systems

- <b>Storage Adapters</b>

  File and asset storage backends:
  - AWS S3
  - Google Cloud Storage
  - Azure Blob Storage
  - Local filesystem

- <b>Event Adapters</b>

  Messaging and event transport:
  - Kafka
  - Redis
  - RabbitMQ
  - In-memory event bus

- <b>Notification Adapters</b>

  Outbound messaging:
  - SMTP / SES email
  - Push notifications
  - Webhooks
  - Slack / Discord

- <b>Search & Analytics Adapters</b>

  External indexing and telemetry:
  - Elasticsearch
  - Algolia
  - Segment
  - Amplitude

<hr>

## Installation

```bash
npm install @reactforums/adapters
```

<hr>

## Project Structure

```
src/
├─ database/
│   ├─ postgres/
│   │   ├─ PostgresUserRepository.ts
│   │   ├─ PostgresPostRepository.ts
│   │   └─ schema.sql
│   ├─ prisma/
│   │   ├─ PrismaUserRepository.ts
│   │   └─ prisma.schema
│   ├─ in-memory/
│   │   └─ InMemoryUserRepository.ts
│
├─ auth/
│   ├─ clerk/
│   ├─ oauth/
│   └─ jwt/
│
├─ storage/
│   ├─ s3/
│   ├─ gcs/
│   └─ local/
│
├─ events/
│   ├─ kafka/
│   ├─ redis/
│   └─ in-memory/
│
├─ notifications/
│   ├─ email/
│   └─ push/
│
├─ search/
│   ├─ elasticsearch/
│   └─ algolia/
```

<hr>

## Usage

### Backend Composition

Adapters are imported, called, and return a `repository` object containing all implemented repositories. These should be injected into services from `@reactforums/core`.

```ts
import { ForumService /* other services */ } from "@reactforums/core";
import { drizzleAdapter } from "@reactforums/adapters";

const repository = drizzleAdapter();
const baseUrl = "localhost:9999";

// instantiate all services
export const forumService = new ForumService(baseUrl, repository.forum);
// export other services
```

The service has no knowledge of:

- SQL
- Prisma
- Table names
- Indexes
- Vendor APIs

Only the adapter does.

### Rolling Your Own Adapters

You are not required to use this package.

Advanced users may implement core repository interfaces directly:

```ts
class CustomUserRepository implements UserRepository {
  async findById(id: string) {
    // your schema, your queries, your optimizations
  }
}
```

As long as the interface contract is satisfied, the core services will work unchanged.

<hr>

## Architectural Guarantees

- <b>Adapters are replaceable:</b> Swap Prisma for raw SQL without touching core.
- <b>Adapters are isolated:</b> No adapter imports application services.
- <b>Adapters are dumb:</b> No business rules, no permissions, no orchestration.
- <b>Core remains clean:</b> Infrastructure concerns never leak upward.

<hr>

## Philosophy

- <b>Interfaces over implementations:</b> Core defines behavior; adapters define execution.
- <b>Backend freedom:</b> Let experts write optimal persistence logic.
- <b>No magic:</b> Adapters are explicit, inspectable, and predictable.
- <b>Long-term stability:</b> Core evolves slowly; adapters evolve quickly.

## License

MIT &copy; reactForums Contributors
