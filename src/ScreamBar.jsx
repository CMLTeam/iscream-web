import React, {Component} from "react";
import styled from "styled-components";

const TopBar = styled.div`
  position: absolute;
  top: 5%;
  align: justify;
  top: 5%;
  left: 50%;
  transform: translate(-50%);
  width: 70%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0
`;
const TextInput = styled.input`
  type: text
  background-color: #e5e5e5;
  height: 100%;
  width: 100%;
  outline: none;
  margin-left: 2%
  border-width: 0;
  border-radius: 6px 0 0 6px;
  box-sizing: border-box;
`;
const TextInputWrapper = styled.div`
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #3770c6;
  background-color: #e5e5e5;
  height: 100%;
  width: 100%;
  border-radius: 6px 0 0 6px;
  box-sizing: border-box;
  :hover {
    background-color: # d1d1d1;
  }
`;
const TopBarButton = styled.button`
  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: #3770c6;
  background-color: rgb(84, 152, 255);
  height: 100%;
  color: white;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  :hover {
    background-color: #3770c6;
  }
`;

export class ScreamBar extends Component {
    render() {
        return (
            <TopBar>
                <TextInputWrapper>
                    <TextInput/>
                </TextInputWrapper>
                <TopBarButton>SCREAM</TopBarButton>
            </TopBar>
        )
    }
}