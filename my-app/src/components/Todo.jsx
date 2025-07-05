import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Fix filter condition
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(i)}
            />
            <span
              onClick={() => toggleComplete(i)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none', // Show strike-through
                cursor: 'pointer'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
