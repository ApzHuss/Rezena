# Development Guide

This document provides instructions for setting up, running, and contributing to Rezena.

## Project Overview

Rezena is an AI-powered Applicant Tracking System. The early focus is on resume parsing (PDF), candidate structuring, and preparing the foundation for scoring, semantic search, and hiring workflows.

## Folder Structure

Key (current / planned) directories:

- `app/` — Route modules (SSR + data loaders/actions)
- `components/` — Reusable UI components
- `state/` — Zustand stores
- `lib/` — Domain logic (parsing, normalization, scoring helpers)
- `styles/` — Tailwind entry points / global styles
- `public/` — Static assets (images, icons)
- `tests/` — Test files (add as coverage grows)
- `build/` — Generated output after `npm run build`

## Prerequisites

Ensure you have:

- [Node.js](https://nodejs.org/) (LTS 18+ recommended)
- npm (bundled with Node)  
- Git

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/ApzHuss/Rezena.git
cd Rezena
```

### 2. Install dependencies

Resolve any merge conflict markers in `package.json` first if present, then:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App defaults to: <http://localhost:5173>

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (HMR) |
| `npm run build` | Production build (SSR + client) |
| `npm start` | Serve built server bundle |
| `npm run typecheck` | Generate types + TypeScript check |
| `npm run lint` | ESLint + Prettier formatting |
| `npm test` | Run Vitest test suite (add tests progressively) |

## Environment Variables

Create `.env.local` (optional at this stage):

```bash
PORT=3000
OPENAI_API_KEY=your_key_here
EMBEDDING_MODEL=text-embedding-model
RESUME_PARSER_MODE=pdf
FEATURE_SCORING=true
FEATURE_SEMANTIC_SEARCH=false
```

Do not commit secrets.

## Testing

```bash
npm test
```

(Testing infra is scaffolded—add unit tests for parsing and candidate transformation utilities first.)

Suggested test locations: `tests/` or colocated near the module.

## Troubleshooting

- Install errors: Ensure Node version ≥ 18.
- SSR build issues: Remove stale `build/` then re-run `npm run build`.
- Styling issues: Confirm Tailwind config and class scanning coverage.
- Merge conflict markers: Clean `<<<<<<<`, `=======`, `>>>>>>>` lines before installing.

## Deployment

### Build

```bash
npm run build
```

Output layout:

```md
build/
├── client/   # Static assets
└── server/   # SSR bundle
```

### Docker

```md
docker build -t rezena .
docker run -p 3000:3000 rezena
```

Deployable to any container platform.

## Contribution Guide

1. Fork repository
2. Create a branch: `git checkout -b feat/<short-name>`
3. Implement changes (tests/docs as appropriate)
4. Update `CHANGELOG.md` (Unreleased section)
5. Run `npm run lint` & `npm run typecheck`
6. Open a Pull Request with concise description

### Commit Style

Follow Conventional Commit style where possible:

```md
feat: add candidate parsing pipeline
fix: handle malformed pdf metadata
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `style`

## FAQ

**Q: Where will resume parsing logic live?**  
A: In `lib/parse/` (e.g., normalization, text extraction helpers).

**Q: Where will scoring rules go?**  
A: In `lib/scoring/` (planned).

**Q: How are global states handled?**  
A: Zustand stores under `state/`.

**Q: Is authentication implemented?**  
A: Not yet—planned after core parsing & candidate modeling.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for recorded changes.

## Building for Production

```bash
npm run build
npm start
```

Ensure proper environment variables are set before starting in production.

## License

Licensed under the [MIT license](./LICENSE).

You're free to use my code! Just make sure to **remove all my personal information** before publishing your website. It's awesome to see my code being useful to someone!

## Contact

- **GitHub:** [@ApzHuss](https://github.com/ApzHuss)
- **Email:** [Azalaamhuss@gmail.com](mailto:Azalaamhuss@gmail.com)

## Made with ❤️ by Abdisalaan H. Abdi
