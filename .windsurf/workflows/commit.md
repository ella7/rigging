---
name: Commit Changes
description: A workflow to stage changes, write a commit message, and commit to git.
version: 0.1.0
author: Cascade Assistant
---

### Commit Workflow Process

This workflow helps in committing changes to the Git repository.

1.  **Review Changes**:
    *   Run `git status` to identify all changed (modified, new, deleted) and untracked files.
    *   Carefully review each file to ensure only intended changes are included.

2.  **Stage Files**:
    *   Ask the user which files or specific changes (hunks) they want to stage for the commit.
    *   Alternatively, if the user wants to stage all changes, confirm this intention.
    *   Use `git add <file_path>` for specific files or `git add .` to stage all changes in the current directory (after confirmation).
    *   Use `git add -p` for interactive staging if needed.

3.  **Write Commit Message**:
    *   Based on the staged changes, formulate a descriptive commit message.
    *   The commit message should follow standard conventions (e.g., imperative mood for the subject line, detailed body if necessary).
    *   Consider referencing issue numbers or task IDs if applicable.
    *   Ask the user to review and approve the commit message.

4.  **Commit Changes**:
    *   Once the commit message is approved, run `git commit -m "Your detailed commit message here"`.
    *   Alternatively, `git commit` can be used to open an editor for a multi-line message.