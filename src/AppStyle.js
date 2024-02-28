import styled from "styled-components";

export const Body = styled.div`
    margin:10px;
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    width:90%;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  overflow-x: hidden;
  height:100vh;
  position:relative;

`;

export const Title = styled.div`
  color: ${({ theme }) => theme.text_primary}; 
  font-size:${({theme})=>theme.text_size};
  font-weight:${({theme})=>theme.font_wieght};
  background-color: ${({ theme }) => theme.titleBgColor};
`;

export const Icon = styled.div`
  display:flex;
  color:${({theme})=>theme.text_primary};
  align-items:center;
`
export const TitleContainer = styled.div`
  display:flex;
  justify-content:space-between;
`