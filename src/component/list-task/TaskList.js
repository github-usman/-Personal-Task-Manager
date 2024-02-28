import React from 'react'
import Task from '../each-task/Task'

// this component to display a list of tasks
const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        </div>
      ))}
    </div>
  )
}

export default TaskList
