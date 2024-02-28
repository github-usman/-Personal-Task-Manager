import styled from 'styled-components'

export const Body = styled.div`
  margin:10px 1px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  overflow-x: hidden;
  height: 100vh;
  position: relative;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: ${({ theme }) => theme.text_size};
  font-weight: ${({ theme }) => theme.font_wieght};
  background-color: ${({ theme }) => theme.titleBgColor};
`

export const Icon = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 5px;
  padding: 0 7px;
  max-width: fit-content;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
