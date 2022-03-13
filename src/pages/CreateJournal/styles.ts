import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    width: 100%;
    max-width: 720px;

    gap: 2rem;

    > div {
      display: flex;
      justify-content: center;

      gap: 1rem;

      position: relative;

      width: 100%;
      height: 20.75rem;
      max-width: 15rem;

      font-family: ${theme.fonts.family.secondary};
      font-weight: 700;
      font-size: 2rem;

      border-radius: 2px 16px 16px 2px;
      background-color: ${theme.colors.background};
      box-shadow: inset 0px 2px 2px rgba(255, 255, 255, 0.25),
        inset -4px -4px 2px rgba(0, 0, 0, 0.1);

      overflow: hidden;

      > div:first-child {
        width: 40px;

        border-radius: 2px 0px 0px 2px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      > div:last-child {
        display: flex;
        align-items: center;
        flex: 1;

        padding: 0.8rem;

        word-break: break-word;

        overflow: auto;

        p {
          margin: auto;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;

      gap: 1rem;

      input {
        width: 100%;

        height: 40px;

        padding: 0.4rem;

        font-size: 1rem;
        font-weight: 700;
        color: ${theme.colors.brown};
        background: ${theme.colors.white};

        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;
      }

      button {
        margin: auto;
        margin-top: 4rem;
      }
    }

    @media (min-width: 720px) {
      > div {
        height: 25.75rem;
        max-width: 22rem;
      }
    }
  `}
`;
