# create-reactforums-app

<b>The official starter CLI for reactForums projects.</b>

Quickly scaffold a new browser, mobile, or desktop app that connects seamlessly to the `@reactforums/core` package.

<hr>

## What is it?

`create-reactforums-app` is the zero-config way to spin up a reactForums app.

It scaffolds a project that already know how to:

- Integrate with `@reactforums/core` (domain logic, service clients, repositories, adapters).
- Run with a Node.js backend (via Tanstack Start or Next.js).
- Set up UI + API routes that talk to the core service layer.
- Ship to browser, mobile, or desktop with consisten APIs.

<hr>

## Usage

```bash
    npx create-reactforums-app my-forum
```

<hr>

## Project Types

1. <b>Browser App</b>
   - React + Node.js backend with TanStack Start or Next.js
   - Ships with UI, API routes, and service client integration.

2. <b>Mobile App</b>
   - Expo (React Native)
   - Preconfigured to use service clients that connect to your browser app backend.

3. <b>Desktop App</b>
   - Electron or Tauri + React
   - Can run in "thin client" mode (connects to browser backend) or offline-first with SQLite + sync.

<hr>

## Example Project Structure

```
my-forum/
├─ apps/
│  ├─ browser/            # Browser app (TanStack Start || Next.js)
│  ├─ mobile/             # Mobile app (React Native + Expo)
│  ├─ desktop/            # Desktop app (Electron || Tauri)
│
├─ turbo.json             # Monorepo build config
├─ package.json

```

<hr>

## Deployment

- <b>Browser App:</b> Vercel, Netlify, AWS
- <b>Mobile App:</b> iOS / Android via Expo
- <b>Desktop App:</b> Windows / macOS / Linus via Electron/Tauri

<hr>

## License

MIT &copy; reactForums Contributors
