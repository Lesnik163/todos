import { Input } from '@mui/material';

import styled from 'styled-components';

export const StyledInput = styled(Input)`
  height: 80px;
  width: 100%;
  ::placeholder {
    color: grey;
    font-style: italic;
    font-size: 30px;
    font-weight: 300;
  };
`;