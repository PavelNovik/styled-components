import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string
    primary?: boolean
    outlined?: boolean
    btnType?: "first" | "second"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 5px;
  //background-color: #fb3f78;
  // background-color: ${props => props.color || "#fb3f78"};
  padding: 10px 20px;
  color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;

  &:hover {
    background-color: #0d086e;

    &:last-child {
      background-color: chartreuse;
    }
  }
  // outlined
    ${props => props.outlined && css<StyledBtnPropsType>`
  border: 2px solid ${props => props.color || "#fb3f78"};
  color: ${props => props.color || "#fb3f78"};
  background-color: transparent;
      
      &:hover {
        border-color: #0d086e;
        color: #0d086e;
        background-color: transparent;
      }
  `}  
  // primary
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;
    &:hover {
      background-color: darkgoldenrod;
    }
  `}
    ${props => props.btnType === "first" && css<StyledBtnPropsType>`
      border: 2px solid ${props => props.color || "#fb3f78"};
      color: ${props => props.color || "#fb3f78"};
      background-color: transparent;

      &:hover {
        border-color: #0d086e;
        color: #0d086e;
        background-color: transparent;
      }
    `}
  ${props => props.btnType === "second" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;
    &:hover {
      background-color: darkgoldenrod;
    }
  `}
  
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(9, 9, 9, 0.59);
  `}
  
`
export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #fff205;
  color: #000000;

  &:hover {
    animation: ${MyAnimation} 4s ease-in-out infinite;
  }
`