# Changelog

All notable changes to this project will be documented here.

Format follows:

- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- Semantic Versioning (will begin after first tagged release)

## [Unreleased]

### Added

- Initial project scaffold (React 19 + React Router v7 SSR + Vite + Tailwind CSS).
- State management setup with Zustand.
- Base tooling: ESLint, Prettier, Husky, lint-staged, TypeScript, Vitest.
- Dockerfile for containerized deployment.
- Documentation: README, DEVELOPMENT guide, CHANGELOG structure.

### Changed

- (None yet)

### Deprecated

- (None)

### Removed

- (None)

### Fixed

- (None yet)

### Security

- (None)

## Planned Milestones

| Version | Focus |
|---------|-------|
| 0.1.0 | PDF resume ingestion + candidate list |
| 0.2.0 | Initial scoring logic + tagging |
| 0.3.0 | Semantic search groundwork |
| 0.4.0 | Role definitions + pipeline stages |
| 0.5.0 | Authentication & RBAC |
| 1.0.0 | Stable ATS workflow baseline |

## Update Guidelines

1. For each PR affecting users/dev workflow, update the Unreleased section.
2. Group entries under: Added / Changed / Deprecated / Removed / Fixed / Security.
3. On release:
   - Move Unreleased entries under a new version heading:

     ```md
     ## [0.x.x] - YYYY-MM-DD
     ```.
   - Reset Unreleased section to empty template.

Template to reset:

```md
## [Unreleased]

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
```

(End of file)
