import { useEffect, useState } from 'react'
import TaskForm from './component/form-task/TaskForm'
import TaskList from './component/list-task/TaskList'
import { ThemeProvider } from 'styled-components'
import { Body, Title, Container, TitleContainer, Icon } from './AppStyle'
import './styles.css'
import { darkTheme, lightTheme } from './utils/Themes'
import { CgDarkMode } from 'react-icons/cg'

function App() {
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  // theme change
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('themeMode', newMode)
  }
  // get data from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (storedTasks) setTasks(storedTasks)
    return () => {
      localStorage.removeItem('tasks')
    }
  }, [])

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return () => {
      localStorage.removeItem('tasks')
    }
  }, [tasks])

  // add task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([newTask, ...tasks])
  }

  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Body>
          <TitleContainer>
            <Title>Personal Task Manager</Title>
            <Icon onClick={toggleDarkMode}>
              <h5>{darkMode === true ? 'Light Mode' : 'Dark Mode'}</h5>
              <CgDarkMode size={'40px'} />
            </Icon>
          </TitleContainer>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
        </Body>
      </Container>
    </ThemeProvider>
  )
}

export default App
