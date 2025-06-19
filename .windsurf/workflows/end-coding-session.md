---
description: A workflow to properly conclude a coding session according to project guidelines.
---

# End Coding Session Workflow

This workflow guides the process of concluding a development session, ensuring all necessary cleanup and documentation tasks are completed as per `AGENTS.MD`.

## Steps

1.  **Review Sandbox Files**:
    *   **Action**: List all files currently in the `sandbox` directory.
    *   **For each file, identify its status**: (e.g., `non-functional`, `working-as-designed`) by checking the status comment at the top of the file.
    *   **Tooling**: Use `list_dir` or `find_by_name` to list sandbox files, then `view_file` to check status comments.

2.  **Handle Non-Functional Sandbox Files**:
    *   **Action**: For each sandbox file identified as `non-functional`:
        *   Present the file name and its description (from the status comment) to the USER.
        *   Ask the USER if the file is still needed or if it can be deleted.
    *   **Tooling**: If deletion is approved, use `run_command` with `rm <file_path>` (ensure USER confirms and set `SafeToAutoRun` to `false`).

3.  **Update Progress Documentation (`progress.md` and `session_details/`)**:
    *   **Action**: Create a summary of the session's accomplishments, technical decisions, implementation details, challenges/solutions, and next steps and present to the USER for feedback.
    *   **Action**: Based on USER input:
        *   Create a new detailed session log file in `docs/session_details/YYYYMMDD_HHMM_session_details.md`.
            *   The filename should use the session start date and time.
            *   The content should follow the "Detailed Session Log Format" specified in `AGENTS.MD`.
        *   Append a brief session summary to the main `progress.md` file **at the end of the '# Session Logs' section**, including a link to the new detailed session log.
            *   The summary should follow the "Brief Session Summary Format" from `AGENTS.MD`.
    *   **Tooling**:
        *   Use `write_to_file` to create the new detailed session log.
        *   Use `replace_file_content` to update `progress.md`. This will involve reading the file to find the end of the Session Logs section or using a marker to append correctly. Alternatively, if an `append_to_file` tool is available and suitable, it could be used.

4.  **Verify Documentation and Code Status**:
    *   **Action**: Remind the USER to ensure all other relevant documentation (e.g., `implementation.md`, `critical-learnings.md`) is up-to-date if significant changes or learnings occurred.
    *   **Action**: Remind the USER to ensure all code changes are saved.

5.  **Offer to Commit Changes**:
    *   **Action**: Ask the USER if they would like to commit the changes made during the session.
    *   **If yes**: Invoke the `/commit` workflow.
    *   **Tooling**: If `/commit` workflow is invoked, follow its defined steps.

6.  **Conclude Session**:
    *   **Action**: Print a concluding message, e.g., "Coding session ended. All cleanup and documentation steps offered."