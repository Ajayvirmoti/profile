// src/ModeToggle.js
import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const ModeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mod' : 'Switch to Light Mode'}
    </ToggleButton>
  );
};

export default ModeToggle;
