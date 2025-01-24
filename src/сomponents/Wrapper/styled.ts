import { Box, Container } from "@mui/material";

import styled from 'styled-components';

export const StyledBanner = styled(Box)`
font-size: 200px;
font-family: Roboto Flex;
font-weight: 200;
color: #792424;
`;
export const StyledContainer = styled(Container)`
  background-color: #e4dad1;
  opacity: 0.2;
  position: absolute;
  height: 90vh;
  left: 0;
  top: 0;
  z-index: -1;
`;
