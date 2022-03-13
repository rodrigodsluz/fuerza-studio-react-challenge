import React from 'react';
import { FaAngleLeft, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleAddNote = () => {
    navigate(linkToAddButton || '');
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
