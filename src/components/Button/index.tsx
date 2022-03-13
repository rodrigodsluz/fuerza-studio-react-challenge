import React from 'react';

import { IButton } from '../../interfaces';

import { StyledButton } from './styles';

/**
 * @export
 * @component
 * @name Button
 *
 * @description
 * Button
 */
function Button({ children, isOutlined, ...rest }: IButton) {
  return (
    <StyledButton isOutlined={isOutlined} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
