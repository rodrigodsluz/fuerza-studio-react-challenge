import React, { ReactNode } from 'react';

import { Container, Content } from './styles';

interface FooterProps {
  children?: ReactNode;
}

/**
 * @export
 * @component
 * @name Footer
 *
 * @description
 * Footer
 */
function Footer({ children }: FooterProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default Footer;
