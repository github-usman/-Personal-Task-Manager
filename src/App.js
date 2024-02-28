import { useEffect, useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import "./styles.css"

function App() {

  const [tasks, setTasks] = useState([]);

  // get data from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
    return () => {
      localStorage.removeItem('tasks');
    };
  }, []);
 
  
  // Save tasks to local storage 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return () => {
      localStorage.removeItem('tasks');
    };
  }, [tasks]);
  

  // add task
  const addTask = text => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // delete a task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //Task completion status
  const toggleTask = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div >
      <h1>Personal Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
