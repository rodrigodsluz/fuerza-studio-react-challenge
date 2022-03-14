import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  max-width: 720px;

  height: 0;

  gap: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const EmptyList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: auto;

    gap: 6rem;

    img {
      max-width: 400px;
      width: 100%;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.brown};

      font-size: 1.1rem;
      font-weight: 600;
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;

    max-height: 550px;

    width: 100%;

    overflow: auto;
    list-style-type: none;

    gap: 1rem;

    a {
      width: 100%;
      max-width: 10rem;
      min-width: 8.5rem;
      height: 170px;

      margin: auto;
    }

    li {
      display: flex;

      position: relative;
      font-family: ${theme.fonts.family.default};

      div {
        width: 100%;

        height: 165px;

        padding: 0.5rem;

        font-size: 1.5rem;
        overflow: auto;
        background: ${theme.colors.lightBrown};
        color: ${theme.colors.darkGray};

        box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
        border-radius: 4px;

        z-index: 2;

        word-break: break-all;
      }

      &:after {
        position: absolute;
        top: 4px;
        left: -3px;

        width: 100%;
        height: 100%;

        background: ${theme.colors.lightBrown};
        color: ${theme.colors.darkGray};

        border-radius: 4px;

        word-break: break-all;

        content: '';

        z-index: 1;
      }
    }

    @media (min-width: 720px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  `}
`;
