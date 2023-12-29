import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./ColorComponent";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;

    font-family: "Poppins";
    text-transform: uppercase;
  }
`;

export const Title = styled.h2`
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  color: ${Colors.Block};
`;

export const Cell = styled.div<{ bgColor: string; fgColor: string }>`
  width: 100%;
  max-width: 100px;
  height: 100px;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fgColor }) => fgColor};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.Houver};
  }
`;
