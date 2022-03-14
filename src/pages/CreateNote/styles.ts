import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100%;
    max-width: 720px;

    a {
      color: inherit;
      text-decoration: none;
    }

    form {
      display: flex;
      flex-direction: column;

      gap: 1rem;

      margin: auto;
      margin-top: 2rem;

      padding: 8px;

      width: 90%;

      input {
        padding: 0.4rem;
        height: 48px;

        font-weight: 600;

        color: ${theme.colors.brown};
        background: rgba(255, 255, 255, 0.42);

        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;
      }

      textarea {
        padding: 0.4rem;
        min-height: 300px;

        resize: none;
        font-weight: 600;

        color: ${theme.colors.brown};
        background: rgba(255, 255, 255, 0.42);

        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;
      }

      button {
        margin: auto;
      }
    }
  `}
`;
