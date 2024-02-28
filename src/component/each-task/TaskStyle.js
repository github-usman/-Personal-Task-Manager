import styled, { css } from 'styled-components'

export const DeleteButton = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border-radius: 5px;
  border: 2px solid #d90429;
  background: #d90429;

  &:hover {
    background: #fff;
    color: #d90429;
  }
`

export const Container = styled.div`
  position: relative;
  padding: 20px 10px;
  background: ${({ theme }) => theme.card_bg};
  margin: 0.5rem 0px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.card_border};
  ${({ completed, theme }) =>
    completed &&
    css`
      background: ${theme.completed_bg};
    `}
`

export const Para = styled.p`
  color: ${({ theme }) => theme.text_primary};
  overflow-wrap: break-word;
  width: 100%;
  ${({ completed, theme }) =>
    completed &&
    css`
      color: ${theme.text_completed};
    `}
`
export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const ButtonConainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

export const CheckInput = styled.input`
  height: 2.4rem;
  width: 2.4rem;
  border: none;
  outline: none;
`
