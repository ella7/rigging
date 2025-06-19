# Rigging — Package Registry for Agent Rules & Workflows

<!-- Badges: Build Status, Coverage, License, Version, etc. -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![PHP](https://img.shields.io/badge/PHP-8.3-777BB4?style=flat&logo=php)](https://www.php.net/) [![Symfony](https://img.shields.io/badge/Symfony-6-black?style=flat&logo=symfony)](https://symfony.com/) [![React](https://img.shields.io/badge/React-blue?style=flat&logo=react)](https://reactjs.org/) [![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=flat&logo=python)](https://www.python.org/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-blue?style=flat&logo=postgresql)](https://www.postgresql.org/)
<!-- Add other badges here: e.g., PyPI version, Build Status, CI/CD -->

Rigging enables teams to **share, discover, and reliably reuse** markdown‑based rules and workflows for the Windsurf IDE. Modeled after familiar package managers, Rigging provides a streamlined experience for managing prompt‑based artifacts with built-in governance and security.

## Why Rigging?

Developing and managing AI agent rules and workflows can be challenging:
*   **Duplication of Effort:** Teams often reinvent the wheel, slowing down project ramp-up.
*   **Lack of Standardization:** Ad-hoc storage leads to version drift and unknown provenance.
*   **Governance Gaps:** It's difficult to scan, audit, or deprecate unsafe or outdated prompts.

Rigging addresses these issues by providing a centralized, secure, and version-controlled registry.

## Key Features

*   **CLI Tool:** Intuitive commands (`new`, `validate`, `publish`, `install`, `search`) for package management.
*   **Standardized Package Format:** Clear structure with `rigging.json` metadata and support for `docs/` bundles.
*   **Centralized Registry:** A robust backend (Symfony API, PostgreSQL) for storing and serving packages.
*   **Web Portal:** User-friendly interface for browsing, searching, and publishing packages.
*   **Built-in Security:** Mandatory static analysis scans on package publication.
*   **Flexible Namespacing:** Support for both public and private packages.

## Getting Started

### Prerequisites

*(Details on prerequisites, e.g., Python 3.10+, pipx, will be added here.)*

### Installation

*(Instructions for installing Rigging will be added here. For example:)*
```bash
pipx install rigging
```

Once installed, you can verify the installation by running:
```bash
rigging --version
```

## Usage

*(Basic CLI commands and examples will be provided here. For example:)*

```bash
# Create a new package scaffold
rigging new my-awesome-package

# Validate your package
cd my-awesome-package
rigging validate

# Publish your package (authentication required)
rigging publish

# Install a package from the registry
rigging install some-package@1.2.3

# Search for packages
rigging search keyword
```

## Tech Stack

| Layer          | Technology/Service                         |
| -------------- | ------------------------------------------ |
| Backend API    | Symfony 6 (PHP 8.3)                        |
| Database       | PostgreSQL (e.g., via Supabase)            |
| Object Storage | Cloudflare R2 (or similar S3-compatible)   |
| CLI Tool       | Python 3.12 (packaged with `pex`)          |
| Web Portal     | React                                      |
| CI/CD          | GitHub Actions                             |
| Authentication | GitHub OAuth & Personal Access Tokens (PATs) |

## Contributing

We welcome contributions to Rigging! Please read our `CONTRIBUTING.md` (to be created) for guidelines on how to contribute, our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
