<p align="center">
  <img src="client/src/assets/walrusHead.png" alt="FAANG Connector walrus logo" width="120">
</p>

<h1 align="center">FAANG Connector</h1>

<p align="center"><em>Connect top tech jobs with top tech candidates.</em></p>

FAANG Connector scrapes job postings from FAANG company career sites and candidate
profiles from [SignalHire](https://www.signalhire.com/), then matches candidates to
open roles based on their skills. Open a job and you'll see the candidates who are a
good fit for it.

Jobs and candidates are re-scraped automatically once a day. To protect candidate
privacy, contact information is never displayed.

## How it works

```text
                          ┌──────────────────────────────────┐
                          │  Daily cron (midnight)            │
                          │  Puppeteer scrapers               │
                          │   • FAANG career sites → jobs     │
                          │   • SignalHire        → candidates│
                          └────────────────┬─────────────────┘
                                           │ writes
                                           ▼
   ┌───────────┐   HTTP/JSON   ┌──────────────────┐      ┌──────────────┐
   │  client   │ ────────────▶ │  server          │ ───▶ │  PostgreSQL  │
   │  (React)  │ ◀──────────── │  (Express API)   │ ◀─── │  (via Knex)  │
   └───────────┘    matches    └──────────────────┘      └──────────────┘
```

The React client is a static single-page app that calls the Express API over HTTP.
The server owns the database, the REST API, and the scheduled web scrapers. The two
are decoupled — the client only knows the server through the `REACT_APP_API_URL`
environment variable — which is why each can be developed, deployed, and scaled
independently.

## Screenshots

The landing page, served by the React client:

<p align="center">
  <img src="docs/screenshot-home.png" alt="FAANG Connector home page" width="800">
</p>

## Tech stack

| Layer    | Technology                                              |
| -------- | ------------------------------------------------------- |
| Client   | React 17, React Router, styled-components, axios        |
| Server   | Node.js, Express, node-cron                             |
| Database | PostgreSQL, accessed through Knex (migrations included) |
| Scraping | Puppeteer (headless Chrome)                             |
| Hosting  | Netlify (client) · Heroku (server)                      |

## Repository layout

This is a monorepo containing two independent packages:

```text
.
├── client/   # React single-page app
└── server/   # Express API, Knex/Postgres data layer, and Puppeteer scrapers
```

Each package has its own `package.json` and dependencies — install and run them
separately (see below).

## Getting started

### Prerequisites

- Node.js and npm
- A PostgreSQL database (local or hosted)

### 1. Server

```bash
cd server
npm install

# Configure the database connection
echo "DATABASE_URL=postgres://user:password@localhost:5432/faang_connector" > .env

# Create the schema
npx knex migrate:latest

# Start the API (defaults to port 4000)
npm start
```

| Env var        | Description                                  |
| -------------- | -------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string (required)      |
| `PORT`         | Port the API listens on (optional, def 4000) |

The scrapers run automatically via cron once a day at midnight. To populate data
immediately during development, you can invoke `launchWebScrapers`
(`server/web_scrapers/launchWebScrapers.js`) directly.

### 2. Client

```bash
cd client
npm install

# Point the client at your running API
echo "REACT_APP_API_URL=http://localhost:4000" > .env

# Start the dev server (runs on port 3999)
npm start
```

| Env var             | Description                                |
| ------------------- | ------------------------------------------ |
| `REACT_APP_API_URL` | Base URL of the server API (required)      |

## API reference

All endpoints are served under `/api` and return JSON.

| Method | Endpoint                   | Description                                       |
| ------ | -------------------------- | ------------------------------------------------- |
| `GET`  | `/api/jobs?company=`       | List jobs, optionally filtered by company         |
| `GET`  | `/api/jobs/:id`            | Get a single job by id                            |
| `GET`  | `/api/candidates/job/:id`  | Get candidates matched to the given job           |

## Deployment

- **Client** is built with `npm run build` and deployed as static assets to Netlify.
- **Server** is deployed to Heroku, which runs the process defined in `server/Procfile`
  (`web: node app.js`).

Set the same environment variables described above in each hosting provider's
dashboard. The client's `REACT_APP_API_URL` must point at the deployed server URL.

## License

[MIT](./LICENSE) © Zachary Lasky
