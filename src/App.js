import { useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div >
      <h1>Personal Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
