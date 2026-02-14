---
description: Auto-plan a new project using global Gemini-Kit agents tailored to the project's tech stack.
---
1. **Analyze Project System & Tech Stack**
   - Run `ls -R` to see the file structure.
   - Read `package.json` (if exists) to identify dependencies (Next.js, Tailwind, etc.).
   - Read `README.md` (if exists) to understand the project goal.

2. **Load Global Gemini-Kit Context**
   - Read the System Instruction: `/Users/feridun/Documents/main data/Works/Projects/ai-agents/GEMINI.md`
   - Read Core Agents:
     - Planner: `/Users/feridun/Documents/main data/Works/Projects/ai-agents/agents/planner.md`
     - Frontend Specialist: `/Users/feridun/Documents/main data/Works/Projects/ai-agents/agents/frontend-specialist.md`
     - UI Designer: `/Users/feridun/Documents/main data/Works/Projects/ai-agents/agents/ui-designer.md`
     - Coder: `/Users/feridun/Documents/main data/Works/Projects/ai-agents/agents/coder.md`

3. **Generate Project Plan**
   - Based on the identified tech stack and project goals, and using the "Planner" agent persona from the loaded context, create a detailed `implementation_plan.md` for the current project.
   - The plan should include:
     - **Goal**: What are we building?
     - **Tech Stack**: Confirmed technologies.
     - **Architecture**: key components and structure.
     - **Step-by-Step Implementation**: detailed tasks.
   - **Constraint**: Use the specific "Planner" format defined in the loaded `planner.md`.

4. **Notify User**
   - Inform the user that the system is ready and the plan has been drafted.
