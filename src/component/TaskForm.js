import React, { useState } from 'react';

const TaskForm = () => {

  const [text, setText] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
