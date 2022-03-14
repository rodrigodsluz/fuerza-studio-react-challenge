import React from 'react';
import { FaAngleLeft, FaPlus } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import Button from '../Button';

import { NavbarProps } from '../../interfaces';

import { Container } from './styles';

/**
 * @export
 * @component
 * @name Navbar
 *
 * @description
 * Navbar
 */
function Navbar({
  linkToBackButton,
  linkText,
  linkToAddButton,
  disableButton = false,
}: NavbarProps) {
  const history = useHistory();

  const handleAddNote = () => {
    history.push(linkToAddButton || '');
  };

  return (
    <Container>
      <Link to={linkToBackButton}>
        <FaAngleLeft />

        <div>{linkText}</div>
      </Link>

      {!disableButton && (
        <Button onClick={handleAddNote} isOutlined>
          <FaPlus />
          Add note
        </Button>
      )}
    </Container>
  );
}

export default Navbar;
