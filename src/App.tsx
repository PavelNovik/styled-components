import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";



function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                Hello world!
                {/*<StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>*/}
                {/*<StyledBtn as={"a"} href={"#"}>Link</StyledBtn>*/}
                {/*<input type={"text"}/>*/}
                {/*<input type={"submit"}/>*/}
                {/*<input type={"checkbox"}/>*/}
                {/*<input type={"radio"}/>*/}
                {/*<input type={"range"}/>*/}
                {/*<StyledBtn color={"red"} fontSize={"20px"}>Click me</StyledBtn>*/}
                {/*<StyledBtn color={"green"}>Click me</StyledBtn>*/}
                {/*<StyledBtn fontSize={"25px"}>Click me</StyledBtn>*/}
                <StyledBtn btnType={"second"} active>Click me</StyledBtn>
                <StyledBtn btnType={"first"}>Click me</StyledBtn>
                <StyledBtn primary>Click me</StyledBtn>
                <StyledBtn outlined>Click me</StyledBtn>

                <SuperButton>I'm a super btn</SuperButton>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

