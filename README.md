# Project 25 CMS - Strapi Headless CMS

A Strapi-based headless CMS for managing Project 25's website content, deployed on Railway with PostgreSQL.

## Quick Start

### Prerequisites

- Node.js 20.x or later
- PostgreSQL database (Railway provides this)
- npm or yarn

### Local Development

1. **Clone and install dependencies:**
   ```bash
   cd project25-cms
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your local settings:
   ```env
   HOST=0.0.0.0
   PORT=1337
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   APP_KEYS=<generate-with-npm-run-generate-keys>
   API_TOKEN_SALT=<generate>
   ADMIN_JWT_SECRET=<generate>
   JWT_SECRET=<generate>
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Access the admin panel:**
   Open http://localhost:1337/admin

### Generate Secret Keys

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Deployment to Railway

### 1. Create Railway Project

```bash
railway login
railway init
```

### 2. Add PostgreSQL Database

```bash
railway add --plugin postgresql
```

### 3. Set Environment Variables

In Railway dashboard, set these variables:

```env
NODE_ENV=production
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
HOST=0.0.0.0
PORT=1337
APP_KEYS=<your-generated-keys>
API_TOKEN_SALT=<your-salt>
ADMIN_JWT_SECRET=<your-secret>
JWT_SECRET=<your-jwt-secret>
CORS_ORIGINS=https://your-frontend-url.azurestaticapps.net,http://localhost:5173
```

### 4. Deploy

```bash
railway up
```

## Content Types

### Initiatives
Project initiatives (Open Tribe Foundation, Vaka Dzidzo, #FeedZim)
- title, slug, status
- shortDescription, fullDescription
- images (Cloudflare R2 URLs)
- videoUrl
- raised, spent, nextGoal
- breakdown (component)
- impactMetrics (json)

### Events
Fundraising events (BUMP ZIM, Fun Run)
- title, slug, subtitle, tagline
- description, fullDescription
- startDate, endDate, deadline
- location, isActive, eventType
- heroImage, posters, gallery
- careBasketItems, highlights
- paymentMethods, pricing
- registrationLink

### Team Members
Organization founders and team
- name, slug, occupation
- bio, imageUrl
- isFounder, order

### Partners
Partner organizations
- name, slug, logoUrl
- website, description
- isActive, order

### Impact Stats
Statistics displayed on initiatives page
- amount, label, subtext
- order

### Pages
Static page content
- title, slug, subtitle
- heroHeading, heroTagline, heroImage
- content

### Footer (Single Type)
Footer content
- companyName, companyDescription
- trustName, contactEmail
- socialLinks, quickLinks
- copyrightText, developerName

### Navigation (Single Type)
Main navigation menu
- logoText, logoHighlight
- menuItems

## Seeding Data

To populate the CMS with initial content:

```bash
npm run seed
```

Or manually through the admin panel.

## API Endpoints

All endpoints are publicly readable (no authentication required for GET requests):

| Endpoint | Description |
|----------|-------------|
| GET /api/initiatives | List all initiatives |
| GET /api/initiatives?filters[slug][$eq]=open-tribe | Get by slug |
| GET /api/events | List all events |
| GET /api/events?filters[isActive][$eq]=true | Active events |
| GET /api/team-members?sort=order:asc | Team sorted |
| GET /api/partners?filters[isActive][$eq]=true | Active partners |
| GET /api/impact-stats?sort=order:asc | Impact stats |
| GET /api/pages?filters[slug][$eq]=home | Page content |
| GET /api/footer | Footer content |
| GET /api/navigation | Navigation menu |

## Media Storage

Media is stored on Cloudflare R2. Strapi stores URLs only (not file uploads):

- Images: `https://76c05bb2d162508a6abf799f4757e5f5.r2.cloudflarestorage.com/p25images/`
- Team: `https://76c05bb2d162508a6abf799f4757e5f5.r2.cloudflarestorage.com/teamimages/`
- Videos: `https://76c05bb2d162508a6abf799f4757e5f5.r2.cloudflarestorage.com/videos/`
- Fun Run: `https://76c05bb2d162508a6abf799f4757e5f5.r2.cloudflarestorage.com/funrunimages/`

## Frontend Integration

The React frontend connects to Strapi via the API client:

```javascript
import { fetchInitiatives } from '@/services/strapi';

const initiatives = await fetchInitiatives();
```

See `project25main/src/services/strapi.js` for the full API client.

## Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run seed` | Seed database with content |

## Project Structure

```
project25-cms/
├── config/                 # Strapi configuration
│   ├── database.ts         # Database connection
│   ├── server.ts           # Server settings
│   └── ...
├── src/
│   ├── api/                # API endpoints & schemas
│   │   ├── initiative/
│   │   ├── event/
│   │   ├── team-member/
│   │   ├── partner/
│   │   ├── impact-stat/
│   │   ├── page/
│   │   ├── footer/
│   │   └── navigation/
│   ├── components/         # Reusable components
│   └── index.ts
├── database/
│   └── seeds/              # Seed data scripts
├── public/                 # Static files
├── railway.toml            # Railway deployment config
└── package.json
```

---

<sub>Built with Strapi - The leading open-source headless CMS</sub>
