import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #0d086e;

    &:last-child {
      background-color: chartreuse;
    }
  }
`
export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #fff205;
  color: #000000;

  &:hover {
    animation: ${MyAnimation} 4s ease-in-out infinite;
  }
`