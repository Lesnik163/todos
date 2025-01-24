import { Box } from '@mui/material';

import styled from 'styled-components';

export const StyledTask = styled(Box) <{ $isVisible: boolean }>`
  display: ${props => props.$isVisible ? 'flex' : 'none'};
  align-items: center;
  height: 70px;
  font-size: 30px;
  font-weight: 300;
  color: grey;
  transition: background-color 1s ease;

  &:hover {
    background-color: #f2ebeb;
  }
`;