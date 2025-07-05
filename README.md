# ccp_react_d02_q11

## Debugging a Multi-Feature To-Do List

### Problem Statement

Given a buggy React To-Do List component with the following issues:

- The "Add Task" button sometimes added empty tasks.
- Completed tasks did not have a visual strike-through.
- The "Delete Task" button sometimes deleted the wrong task.
- Additionally, we enhanced the UI by adding checkboxes to mark tasks as completed.

---

### Issues & Fixes

#### Preventing empty tasks

**Bug**: The code allowed adding empty or whitespace-only tasks.

**Fix**:  
added a condition in the `addTask` function:

```js
if (input.trim() === '') return;
