import React from 'react';
import { Container,CheckInput,Body,ButtonConainer, DeleteButton, Para } from './TaskStyle';


// component for individual task
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Container completed={task.completed}>
      <Body>
        <Para completed={task.completed}>{task.text}</Para>
        <ButtonConainer>
        <CheckInput type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
         <DeleteButton onClick={() => onDelete(task.id)}>Delete</DeleteButton>
        </ButtonConainer>
      </Body>
    </Container>
  );
};

export default Task;
