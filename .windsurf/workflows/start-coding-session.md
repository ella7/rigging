---
description: Creates a session plan document that outlines the goals and implementation steps for the session, and ensures confirmation before starting work.
---

### start-coding-session Process
When starting a new coding session, follow these steps to ensure proper planning, documentation, and goal alignment before implementation begins:

1.  **Review project documentation**:
    *   Review `docs/prd.md`, `docs/implementation.md`, and `docs/progress.md`.
    *   Review the most recent progress details file in `docs/session_details/*_session_details.md`.
    *   Review the code base to ensure you understand the current state of the project.

2.  **Establish session goals**:
    *   Ask the USER about their goals for the current session.
    *   Suggest potential goals based on the "Next Steps" from the previous session.
    *   Discuss and reach agreement on specific, achievable goals for the session.

3.  **Create a detailed implementation plan**:
    *   Collaboratively develop a detailed implementation plan with the USER.
    *   Ask targeted questions to understand the technical approach.
    *   Explore implementation options with pros and cons when relevant.
    *   Gather requirements and constraints that will affect implementation.
    *   Discuss potential challenges and how to address them.

4.  **Document the session plan**:
    *   Once the implementation plan is collaboratively established, document it by creating a new markdown file in the `docs/session_plans/` directory.
    *   Use filename format: `YYYYMMDD_HHMM_session_plan.md` (using session start date and time).
    *   The plan MUST follow the "Session Plan Format" described below.
    *   Ensure all agreed-upon details from step 3 are accurately captured.

5.  **Confirm Documented Plan and Obtain Approval to Proceed**:
    *   **Present the documented session plan**: Share the newly created session plan document (e.g., by providing its path or content snippet) with the USER.
    *   **Request review and confirmation**: Ask the USER to review the documented plan for accuracy and completeness.
    *   **Seek explicit approval**: Once the USER confirms the plan, explicitly ask: "The session plan has been documented in `[path_to_plan_file]`. Are you ready for me to begin implementing this plan?"
    *   **Do not proceed to implementation until explicit USER approval is received for the documented plan.**

**Session Plan Format:**
```markdown
# Session Plan - [Date] | [Time]

# [Session Title]

## Session Goals
- [List of specific goals for this session]

## Implementation Approach
- [Overview of the technical approach]

### 1. [First major component/task]
- [Detailed implementation steps]
- [Technical considerations]

### 2. [Second major component/task]
- [Detailed implementation steps]
- [Technical considerations]

## Implementation Plan Sequence
1. [ ][First step]
2. [ ][Second step]
3. [ ][Third step]
...

## Testing Strategy
- [How the implementation will be tested]

## Future Considerations (Not in Current Scope)
- [Items identified but intentionally left for future sessions]
```