# Rigging — Implementation Plan

### From MVP to Production‑grade Registry

---

## 0. Guiding Assumptions

| Aspect            | Decision                                                                   |
| ----------------- | -------------------------------------------------------------------------- |
| Users             | Public‑plus‑private namespaces; initial catalogue ≈ 1,000–2,000 packages   |
| Artifacts         | `rules/*.md` + `workflows/*.md` + `rigging.json` per package (strict SemVer) |
| Tech stack        | Symfony (PHP) backend + Postgres; Python CLI published via pipx & Homebrew |
| Security baseline | Mandatory Semgrep scan on publish; SHA‑256 digest recorded                 |
| Delivery          | Solo dev (\~10 h/wk) leveraging AI pair‑programming                        |

---

## 1. High‑level Architecture

```mermaid
graph TD
  subgraph "Clients"
    CLI[rigging CLI]
    WebPortal[Web Portal (Browse/Search/Publish)]
  end

  subgraph "Backend Infrastructure"
    API[Registry API]
    DB[PostgreSQL DB (Metadata)]
    ObjectStore[Object Storage (Package Blobs)]
    CDN[Static Asset CDN (Package Blobs)]
    ScanService[Scan Service]
  end

  %% Client <-> API (Control Plane: metadata, search, publish actions)
  CLI -->|REST/JSON (Search, Publish, Install-Metadata)| API
  WebPortal -->|HTTPS (Browse, Search, Publish)| API

  %% API <-> Core Backend Components
  API --> DB
  API -->|Uploads to| ObjectStore
  API -->|Triggers/Manages| ScanService

  %% Data Plane (Package Consumption: fetching actual package files)
  ObjectStore -- Serves content to --> CDN
  CLI -->|Downloads from| CDN
  WebPortal -->|Displays/Links to| CDN
  API -.->|Provides Links/Redirects to| CDN
```

A CDN (Cloudflare R2 + Workers) fronts package blobs for low‑latency global fetches. (Post-MVP)

---

## 2. Phase Roadmap & Milestones

| Phase             | Weeks | Key Goals                                                         | Exit Criteria                                       |
| ----------------- | ----- | ----------------------------------------------------------------- | --------------------------------------------------- |
| P‑0: Discovery    | 0‑1   | Finalise governance, freeze package spec                          | v0.1 spec merged; decision log published            |
| P‑1: CLI          | 2‑4   | Create `rigging` CLI with `new`, `validate`, `install`, lock‑file | CLI unit‑tested and on PyPI & Homebrew              |
| P‑2: Registry API | 5‑8   | Symfony REST API, auth, upload pipeline (incl. doc bundle storage & validation logic for 12k char limit)                           | Publish‑>install round‑trip live                    |
| P‑3: Web Portal   | 9‑11  | Search/browse UI (incl. doc bundle discovery), publisher console, Web portal "Docs" tab for rendering, CLI `docs` command                               | Deployed on Fly.io, 50 seed packages                |
| P‑4: Security     | 12‑14 | Package scanning, private namespaces, optional Sigstore           | All public packages scanned; access tokens working  |
| P‑5: Ecosystem    | 15‑18 | CDN, dependency graph visualiser, Windsurf plugin PoC             | P95 install latency < 200 ms; IDE one‑click install |

---

## 3. Detailed Backlog (Epics → Stories)

### E1 – Package Spec & Validator

1. Draft `rigging.json` JSON‑Schema
2. Implement `rigging validate` using `jsonschema` lib
3. CLI error codes and human‑friendly hints

### E2 – Dependency Resolver

4. SemVer range parser, unit tests (depth 3/10/50)
5. Circular‑dependency detection
6. Generate `rigging.lock`

### E3 – Security Pipeline

7. Dockerise Semgrep with default + custom rules
8. Quarantine flow for failed scans
9. Digest recording & integrity check on install

### E4 – Publisher UX

10. Web upload form with drag‑and‑drop
11. Markdown preview
12. Release‑note auto‑gen from `git log`

### E5 – Search & Discovery

13. Postgres FTS on name/tags/description
14. Ranking boost for signed & popular downloads
15. Package metrics endpoint `/stats`

### E6 – Doc Bundle Support

16. Extend package validator to allow `docs/` and enforce 12,000-char soft limit (warning).
17. Backend API stores doc bundle files in object storage under `/docs/…`.
18. Web portal tab “Docs” renders Markdown with syntax highlighting for doc bundles.
19. CLI `rigging docs <package>@<vers>` opens/renders or extracts doc bundles locally.

---

## 4. Tech Stack & Infra Details

| Layer          | Choice                                     | Rationale                                         |
| -------------- | ------------------------------------------ | ------------------------------------------------- |
| Backend        | **Symfony 6** + PHP 8.3                    | Familiar; robust DI & security bundle             |
| DB             | **PostgreSQL** (Supabase)                  | Managed, free tier to start                       |
| Object storage | **Fly Volumes → migrate to Cloudflare R2** | Low‑cost, S3‑compatible                           |
| Auth           | GitHub OAuth + personal access tokens      | Fast user onboarding                              |
| CLI            | Python 3.12 packaged with `pex`            | Easy cross‑platform delivery                      |
| Web Portal     | **React**                                  | Popular, component-based, rich ecosystem          |
| CI/CD          | GitHub Actions                             | Free concurrency; reusable workflows              |

---

## 5. Security & Compliance Strategy

1. **Scanning:** Semgrep OSS ruleset + custom patterns for secrets & jailbreaks.
2. **Integrity:** SHA‑256 hash stored in DB; verified at install.
3. **Signing (Phase 4):** Optional Sigstore keyless (`cosign verify`).
4. **Governance:** Moderated publication queue; reviewer dashboard.

---

## 6. Risks & Mitigations

| Risk               | Mitigation                                           |
| ------------------ | ---------------------------------------------------- |
| Dependency hell    | Limit depth ≤ 20; provide `rigging graph` visualiser |
| Malicious package  | Mandatory scan; future sandbox execution             |
| Solo dev bandwidth | Automate tests & releases; AI pair‑programming       |
| Spec churn         | Lock spec post‑P‑1; spec versioning                  |

---

## 7. Success Metrics (MVP)

* End‑to‑end publish→install < 30 s for 100 KB package
* ≥ 100 public packages in 30 days post‑launch
* Zero critical OWASP findings in API scan

---

## 8. Next Actions (Week 0)

1. Confirm governance model (suggest: Moderated).
2. Approve hosting choice (Fly.io + Supabase).
3. Draft and sign‑off `rigging.json` v0.1 spec.
