# Agent Guidelines and Documentation Process

This document outlines the guidelines, processes, and documentation structure for this project. It serves as a central reference for project management, documentation standards, and development practices.

## Documentation Structure

The project maintains four key documentation files, each serving a specific purpose:

### 1. Product Requirements Document (`docs/prd.md`)

**Purpose:** Defines the high-level requirements, features, and objectives of the project.

**Usage:**
- Reference this document to understand the project's goals and expected outcomes
- Use it as the authoritative source for what features the system should implement
- Consult it when making design decisions to ensure alignment with project goals

**Update Frequency:** This document should remain relatively stable, with updates only when project scope or major requirements change.

### 2. Implementation Guide (`docs/implementation.md`)

**Purpose:** Provides technical specifications and implementation details for building the project.

**Structure:**
- Project Overview
- Technical Stack
- Features
- Project Setup Steps
- Component Breakdown
- Implementation Steps

**Usage:**
- Consult this document for technical guidance on how to implement features
- Use it as a reference for the architectural design and component interactions
- Follow the implementation steps as a roadmap for development

**Update Frequency:** Update when architectural decisions change or when new implementation approaches are adopted.

### 3. Progress Tracking System

#### 3.1 Main Progress Document (`docs/progress.md`)

**Purpose:** Maintains a high-level overview of project progress and development phases with brief session summaries.

**Structure:**
- Tabular overview organized by phases and steps with status indicators
- Brief (1-3 line) summaries of each coding session with links to detailed logs

**Usage:**
- Track implementation progress across different project phases
- Provide a quick overview of all development sessions
- Reference detailed session logs stored in the `docs/session_details/` directory

**Update Frequency:** 
- Update the status tables when phase steps are completed or started
- Add brief session summaries when concluding a development session

**Brief Session Summary Format:**
```markdown
## Session [Date] | [Time]
- [1-3 line summary of key accomplishments]
- [Link to detailed session log: `[Detailed Session Log](./session_details/YYYYMMDD_HHMM_session_details.md)`]
```

#### 3.2 Detailed Session Logs (`docs/session_details/`)

**Purpose:** Store comprehensive details about each development session in individual files.

**Structure:**
- One markdown file per session in the `docs/session_details/` directory
- **Path and filename format:** `docs/session_details/YYYYMMDD_HHMM_session_details.md` (using session start time, e.g., `docs/session_details/20250530_1853_session_details.md`)

**Usage:**
- Document detailed accomplishments, technical decisions, and implementation details
- Record challenges encountered and solutions implemented
- Outline specific next steps for future development

**Update Frequency:**
- Create a new file at the end of each development session

**Detailed Session Log Format:**
```markdown
# Session [Number] - [Date] | [Time]

## Accomplishments
- [Detailed list of what was accomplished]

## Technical Decisions
- [Key technical decisions made with justifications]

## Implementation Details
- [Specifics about the implementation approach]

## Challenges & Solutions
- [Any challenges encountered and how they were addressed]

## Next Steps
- [Concrete tasks to tackle in the next session]

## Files Changed
- [List of files modified during this session]
```

### 4. Critical Learnings (`docs/critical-learnings.md`)

**Purpose:** Documents important technical insights, breakthroughs, and solutions to challenging problems.

**Usage:**
- Record significant technical discoveries and implementation patterns
- Document solutions to complex problems encountered during development
- Provide clear examples and explanations for future reference
- Serve as a knowledge base for important technical patterns

**Update Frequency:** Update whenever there's a significant technical breakthrough or when a complex problem is solved with a reusable pattern.

**Critical Learning Format:**
```markdown
## [Number]. [Title of Critical Learning]

**Date:** [Date of Discovery]

### Problem
[Description of the problem or challenge]

### Solution
[Explanation of the solution or approach]

### Implementation Details
[Code examples and technical specifics]

### Key Learnings
[List of important takeaways or principles]
```

## Development Practices

### Project Workflow

Before starting any significant new work:
1. Confirm the previous step was completed successfully
2. Verify the user is ready to proceed with the next step
3. Reference the implementation guide for technical approach
4. Update the progress tracking document as work proceeds
5. If you are unsure about the requested task or how to accomplish it, always ask for clarification

### Sandbox Directory Guidelines

The sandbox directory (`sandbox/`) is designated for test implementations, experimental code, or any code not intended to be part of the long-term project.

#### Guidelines

1. **Test Implementation Location**: 
   All test implementations, experimental code, or any code not intended to be part of the long-term project MUST be written in the `sandbox/` directory. If it's "test code" it goes in the sandbox. If it's a "test of the code" it will go in a test directory.

2. **File Status Marking**: 
   All files in the sandbox directory MUST include a status comment at the top of the file in the following format:
   ```python
   # FILE STATUS: non-functional
   # DESCRIPTION: Brief description of what this file is testing or exploring
   # LAST UPDATED: YYYY-MM-DD
   ```

3. **Status Update Requirements**: 
   When modifying any sandbox file, the state comment MUST be updated with the current date and appropriate status.

4. **Status Types**:
   - `non-functional`: Code that is experimental, incomplete, or not working correctly
   - `working-as-designed`: Code that has been tested and is functioning as intended

5. **Working Status Verification**: 
   When code in a sandbox file appears to be working as designed, explicitly ask if the file status should be updated to "working-as-designed". Only update the status to working as designed if the user approves the status change.

6. **End-of-Session Cleanup**: 
   At the end of each development session:
   - List all sandbox files that remain in "non-functional" status
   - Ask for permission to delete any non-functional files that are no longer needed

7. **Documentation**: 
   All sandbox files should include comments explaining what they're testing and any known limitations or issues.

8. **Sandboxed Directories**: 
   If multiple files are needed for a test implementation, they should be grouped in a subdirectory within the sandbox directory.

## Session Management

### Beginning-of-Session Process
When starting a new coding session, follow these steps to ensure proper planning and goal alignment:

1. **Establish session goals**:
   - Ask the user about their goals for the current session
   - Suggest potential goals based on the "Next Steps" from the previous session
   - Discuss and reach agreement on specific, achievable goals for the session

2. **Create a detailed implementation plan**:
   - Ask targeted questions to understand the technical approach
   - Explore implementation options with pros and cons when relevant
   - Gather requirements and constraints that will affect implementation
   - Discuss potential challenges and how to address them

3. **Document the session plan**:
   - Once the plan is agreed upon, create a new markdown file in the `docs/session_plans/` directory
   - Use filename format: `YYYYMMDD_HHMM_session_plan.md` (using session start date and time)
   - Follow the session plan format described below

**Session Plan Format:**
```markdown
# Session Plan - [Date] | [Time]

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
1. [First step]
2. [Second step]
3. [Third step]
...

## Testing Strategy
- [How the implementation will be tested]

## Future Considerations (Not in Current Scope)
- [Items identified but intentionally left for future sessions]
```

### End-of-Session Process
When the user indicates they're ending a coding session, always carefully follow all of the following instructions:

1. **Create detailed session log file**:
   - Create a new markdown file in the `docs/session_details/` directory
   - Use path and filename format: `docs/session_details/YYYYMMDD_HHMM_session_details.md` (using session start date and time)
   - Follow the detailed session log format described above
   - Include comprehensive information about accomplishments, technical decisions, implementation details, challenges, and next steps
   - List all files that were modified during the session

2. **Update main `docs/progress.md` file**:
   - Add a brief 1-3 line summary of the session
   - Include a link to the detailed session log file
   - Format according to the brief session summary guidelines

3. **Sandbox management**:
   - Clean up any sandbox files as needed
   - List all sandbox files that remain in "non-functional" status
   - Ask for permission to delete any non-functional files that are no longer needed

4. **Review and commit**:
   - Ask the user if they want to modify or add anything to either the brief summary or detailed log
   - Add both the main progress.md file and the new detailed session log file to git
   - Commit changes with a descriptive commit message that summarizes the session
   - Push changes to the repository if requested
