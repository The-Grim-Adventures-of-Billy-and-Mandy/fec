import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 32px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch}{
    background-color: #242124;

    &:before {
      transform: translate(32px, -50%);
      background: #4b464d;
    }
  }
`;

const handdleChange = (func, state) => {
  func(!state);
  window.localStorage.setItem('DarkMode', !state);
};

const Slider = ({setDarkMode, darkMode}) => {
  return (
    <Label className="switch">
      <Input type="checkbox"
        onChange={() => handdleChange(setDarkMode, darkMode)}
        checked={ darkMode
          ? true
          : false
        }
      />
      <Switch className="slider round"></Switch>
    </Label>
  );
};

export default Slider;