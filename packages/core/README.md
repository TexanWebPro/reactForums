# @reactforums/core

<b>The heart of the reactForums ecosystem.</b>

This package contains the domain logic, models, services, and abstractions that power the browser, mobile, and desktop apps. It is framework-agnostic, database-agnostic, and designed to be extensible through adapters.

## Features

- <b>Shared Domain Models</b>

  Canonical TypeScript types and enums for posts, forums, users, roles, permissions, and more.

- <b>Service Clients</b>

  Lightweight API clients that wrap fetch calls, enabling UI apps (browser, mobile, desktop) to communicate with the backend consistently.

- <b>Repositories</b>

  Standardized interfaces for database access (e.g., `PostRepository`, `UserRepository`).
  - Keeps the domain layer database agnostic.
  - Can be implemented with Postgres or MySQL, Prisma or Drizzle.

- <b>Authorization Utilities</b>

  Role/permission-based access control with fine-grained checks (ABAD-ready). Example:

  ```ts
  ability.can(Permission.CreatePost, { forumId: "123", role: "moderator" });
  ```

- <b>In-memory Mocks</b>

  Drop-in test-friendly repositories, storage, and event busses. Great for unit testing without external dependencies.

<hr>

## Installation

```bash
    npm install @reactforums/core
```

<hr>

## Project Structure

```
src/
├─ domain/          # Core models, enums, DTOs
│   ├─ dtos.ts      # CreatePostDTO, UpdateUserDTO, etc.
|   ├─ errors.ts    # Error messages
│   ├─ models.ts    # Post, User, Forum, Comment, etc.│
├─ repositories/    # Interfaces for persistence
├─ services/        # Business logic (PostService, UserService, etc.)
├─ utils/           # Constants, permissions, input sanitizer, dates
```

## Usage

### Frontend (Browser, Mobile, Desktop)

```ts
import {
  ForumService,
  ThreadService,
  PostService,
  UserService,
} from "@reactforums/core";
import { repository } from "./data/drizzleAdapter";

const baseUrl = "localhost:9999";

// instantiate services
export const forumService = new ForumService(baseUrl, repository.forum);
export const threadService = new ThreadService(baseUrl, repository.thread);
export const postService = new PostService(baseUrl, repository.post);
export const userService = new UserService(baseUrl, repository.user);
export const statsService = new StatsService(baseUrl, repository.stats);
```

<hr>

## Philosophy

- <b>Core-first:</b> All business rules live here, not in the apps.
- <b>Pluggable adapters:</b> Swap Postgres for MySQL or Clerk for OAuth without changing core.
- <b>Thin clients:</b> UI apps only talk to service clients; they never touch the database.
- <b>Extensible:</b> Add new adapters or repositories without breaking existing ones.

## License

MIT &copy; reactForums Contributors
