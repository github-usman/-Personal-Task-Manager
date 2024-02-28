import React from 'react';

// component for individual task
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='task'>
      <h3 className={`task ${task.completed ? 'completed' : ''}`}>{task.text}</h3>
      <div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      </div>
    </div>
  );
};

export default Task;
