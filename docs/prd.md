# Rigging — Package Registry for Agent Rules & Workflows

### Product Requirements Document (PRD)

---

## 1. Purpose / Vision

Rigging enables teams to **share, discover, and reliably reuse** markdown‑based rules and workflows for the Windsurf IDE. Modeled after Composer and pip, Rigging provides a familiar package‑management experience—`rigging install customer‑onboarding`—while embedding governance and security suited to prompt‑based artifacts. Key use cases also include the ability to *share domain knowledge*, where teams can bundle architectural decision records or onboarding guides in `docs/` so other consumers pull context with one install.

## 2. Problem Statement

*Teams today store prompt rules and agent workflows in ad‑hoc gists, wikis, or internal repos.* This leads to:

* Reinvented wheels and slow project ramp‑up.
* Unknown provenance and version drift across environments.
* Poor governance—difficult to scan, audit, or deprecate unsafe prompts.

## 3. Objectives

| # | Objective                      | Success Metric                                                     |
| - | ------------------------------ | ------------------------------------------------------------------ |
| 1 | Accelerate project kick‑off    | ≥100 packages installed by external users within 30 days of launch |
| 2 | Ensure deterministic execution | 100 % reproducibility when `rigging.lock` is committed             |
| 3 | Raise security baseline        | Zero critical findings in OWASP scan & package‑scan pipeline       |

## 4. Target Users & Personas

* **Any Windsurf user** looking to standardize, share, and reuse sets of rules and workflows. This includes, but is not limited to:
    *   Developers integrating LLM agents into their workflows.
    *   Builders seeking vetted guardrails and best practices.
    *   Engineers responsible for governance and compliance of prompt-based artifacts.

## 5. Scope

### MVP (v0.1)

1. CLI (`new`, `validate`, `publish`, `install`, `search`).
2. Package spec, consisting of:
    *   Core rule/workflow `.md` files.
    *   A `rigging.json` metadata file (defines directory structure, package assets, etc.).
    *   An optional `docs/` directory containing additional `.md` context files (‘doc bundle’).
3. Registry backend (Symfony API, PostgreSQL, object storage).
4. Web portal for browse/search/publish.
5. Mandatory static‑analysis scan on publish.
6. Public & private namespaces (moderated publish flow).

### Post‑MVP (v1.x)

* Optional maintainer signing (Sigstore).
* IDE plug‑ins (VS Code, Windsurf native).
* Dependency‑graph visualizer.
* Runtime sandboxing for untrusted rules.

### Out of Scope (v0.x)

* Real‑time execution sandbox.
* Monetized marketplace.
* Automated billing / paid tiers.

## 6. Functional Requirements

| ID  | Requirement                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------ |
| F‑1 | A user **creates** a package scaffold via `rigging new <name>` and receives a validated directory structure. |
| F‑2 | CLI **publishes** package to registry with OAuth or PAT authentication.                                      |
| F‑3 | Registry **scans** uploaded artifacts; reject on secrets/jailbreak patterns.                                 |
| F‑4 | A user **installs** package with semantic‑version constraints; generates `rigging.lock`.                     |
| F‑5 | Web portal **shows** package metadata, README rendered from primary `.md`.                                   |
| F‑6 | Private namespace packages are visible only to authorized tokens.                                            |

## 7. Non‑Functional Requirements

* **Availability:** 99.5 % monthly.
* **Latency:** P95 < 200 ms for package download (<1 MB).
* **Compliance:** Store only SHA‑256 digests + OSS license strings.
* **Scalability:** Support 10,000 packages & 1 million downloads/month without re‑architecture.
* **Doc Bundles:** Registry must expose doc bundles in search results and enforce the same security scanning rules (including a per-package soft limit of 12,000 characters for docs, triggering a warning) as for rules/workflows.

## 8. User Flows

1. **Publish** → Validate → Scan → Store → Index → Success page.
2. **Install** → Resolve deps → Download blobs → Write lock file → Ready to use.
3. **Browse** → Search → Package detail → Copy install command.

## 9. Success Metrics (Launch)

* Basic functionality works. MVP.

## 10. Assumptions & Dependencies

* Windsurf IDE will consume packages via CLI integration.
* Semgrep OSS is sufficient for first‑pass static analysis.
* Hosting on Fly.io + Supabase meets MVP traffic.

## 11. Open Questions

1. Final governance model: fully open vs. moderated?
2. Depth limit for dependency graphs?
3. Lock‑file format naming (`rigging.lock`).

---

**Document owner:** Ryan
**Last updated:** 18 Jun 2025
