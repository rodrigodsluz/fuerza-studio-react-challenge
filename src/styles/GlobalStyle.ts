import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      font-size: 60%;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: ${theme.fonts.family.default};
    }

    body {
      background-color: ${theme.colors.background};
    }

    button {
      cursor: pointer;
      border: none;
    }

    body,
    input,
    button,
    textarea {
      font-size: 1.6rem;
    }

    @media (min-width: 700px) {
      :root {
        font-size: 62.5%;
      }
    }
  `}
`;

export default GlobalStyle;
