import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  width: 100%;
  max-width: 720px;
  height: 0;

  h1 {
    width: 100%;

    margin: 2rem 0;

    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 720px) {
    h1 {
      text-align: left;
    }
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
      width: 100%;
      max-width: 400px;
    }

    a {
      color: ${theme.colors.brown};

      font-size: 1.1rem;
      font-weight: 600;

      text-decoration: underline;
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    width: 100%;

    padding: 1rem;

    max-height: 550px;

    overflow: auto;
    list-style-type: none;

    border-radius: 8px;

    a {
      min-width: 110px;
      max-width: 130px;
      width: 100%;

      margin: auto;

      &:nth-child(odd) li {
        background: ${theme.colors.lightBlue};
      }
      &:nth-child(even) li {
        background: ${theme.colors.darkBlue};

        color: ${theme.colors.white};
      }
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-around;

      height: 170px;

      border-radius: 2px 16px 16px 2px;

      font-family: ${theme.fonts.family.secondary};
      background-color: ${theme.colors.background};
      box-shadow: inset -2px -2px 2px rgba(0, 0, 0, 0.1);

      overflow: hidden;

      div:first-child {
        height: 100%;
        width: 11px;

        background: ${theme.colors.blue};

        border-radius: 2px 0px 0px 2px;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      div:last-child {
        flex: 1;
        padding: 0.8rem;

        font-size: 1.1rem;

        text-align: center;
        word-break: break-all;
      }
    }

    @media (min-width: 720px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;

      justify-content: center;
    }
  `}
`;
