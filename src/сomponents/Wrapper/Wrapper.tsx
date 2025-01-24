import React from 'react';

import { StyledBanner, StyledContainer } from './styled';

import { Container } from '@mui/material';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container maxWidth='lg' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <StyledContainer>
        <StyledBanner display={'flex'} justifyContent={'center'}>todos</StyledBanner>
      </StyledContainer>
      {children}
    </Container>
  );
};