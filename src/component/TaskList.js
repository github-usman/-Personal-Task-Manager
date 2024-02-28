import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
            <h1>{task.text}</h1>
        </div>
       
      ))}
    </div>
  );
};

export default TaskList;
