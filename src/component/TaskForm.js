import React, { useState } from 'react';

const TaskForm = ({addTask}) => {

  const [text, setText] = useState('');

  //after input user can add
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
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
