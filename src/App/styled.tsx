import { Paper } from '@mui/material';

import styled from 'styled-components';

import { AddTaskForm } from '../UI-KIT';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };
`;
export const StyledBox = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin-top: 220px;
  width: 100%;
  & + & {
    width: calc(98%);
    height: 8px;
    margin-top: 0px;
    margin: auto;
    z-index: -1;
  };
  & + & + & {
    width: calc(96%);
    z-index: -2;
  }
  `;
export const StyledAddTaskForm = styled(AddTaskForm)`
  color: grey;
  flex-grow: 1;
`;