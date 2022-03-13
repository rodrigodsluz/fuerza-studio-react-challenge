import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr auto;
    gap: 2rem;
    grid-template-areas: 'img img' 'title link' 'form form';

    width: 100%;
    max-width: 720px;

    a:first-child {
      grid-area: img;

      img {
        width: 16rem;

        margin-bottom: 4.5rem;
      }
    }

    h1 {
      grid-area: title;

      font-weight: 400;
      font-size: 2.4rem;

      color: ${theme.colors.brown};
    }
  `}
`;

export const StyledForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    grid-area: form;
    gap: 1rem;

    a {
      margin: auto 0 auto auto;

      font-size: 1rem;

      text-decoration: underline;

      color: ${theme.colors.brown};
    }

    button {
      margin: auto;

      margin-top: 2rem;
    }
  `}
`;

export const StyledLink = styled(Link)<{
  isLink?: boolean;
}>`
  ${({ theme, isLink }) => css`
    ${isLink &&
    css`
      grid-area: link;

      margin: auto auto 8px;

      font-size: 1rem;
      font-weight: 600;

      text-decoration: underline;

      color: ${theme.colors.brown};

      cursor: pointer;
    `}
  `}
`;
