import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks';

import logoImg from '../../assets/images/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Header
 */
function Header({ children }: HeaderProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      <Content>
        {isAuthenticated ? (
          <Link to="/journals">
            <img src={logoImg} alt="Nocturnal logo" />
          </Link>
        ) : (
          <Link to="/">
            <img src={logoImg} alt="Nocturnal logo" />
          </Link>
        )}

        {children || null}
      </Content>
    </Container>
  );
}

export default Header;
