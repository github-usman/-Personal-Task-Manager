import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
  background: #4433ff;

  &:hover {
    background-color: #3a86ff;
  }

  &:active {
    top: 2px;
  }
`;

export const TaskInput = styled.input`
  outline:none;
  height:40px;
  padding:0 .5rem;
  border-radius:3px;
  border:none;
  width:100%;
`

export const From = styled.form`
  display:flex;
  background-color:blue;
  justify-content:space-between;
`