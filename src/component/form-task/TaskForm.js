import React, { useState } from 'react';
import { From, StyledButton, TaskInput } from './TaskFormStyle'

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  // After input, user can add
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <From onSubmit={handleSubmit}>
      <TaskInput type="text" value={text} placeholder='Enter your task' onChange={e => setText(e.target.value)} required />
      <StyledButton type="submit">Add Task</StyledButton>
    </From>
  );
};

export default TaskForm;
