import React from 'react'

import { ButtonContainer } from './styles';

const Button = ({ title, variant = "primary", onClick }) => (
  <ButtonContainer variant={variant} onClick={onClick}>
    {title}
  </ButtonContainer>
);

export { Button }
