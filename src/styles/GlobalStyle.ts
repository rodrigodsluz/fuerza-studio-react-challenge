import { createGlobalStyle, css } from 'styled-components';
import waterMark from '../assets/images/water-mark.svg';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    #root {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100vw;
      min-height: 100vh;

      padding: 29px;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${theme.colors.background};
      background-image: url(${waterMark});
      background-repeat: no-repeat;
      background-position: center left;
    }

    button {
      cursor: pointer;
      border: none;
    }

    body,
    input,
    button,
    textarea {
      font-family: ${theme.fonts.family.default};
    }

    @media (max-width: 1080px) {
      html {
        font-size: ${theme.fonts.sizes.large};
      }
    }
    @media (max-width: 768px) {
      html {
        font-size: ${theme.fonts.sizes.medium};
      }
    }

    :root {
      --toastify-color-light: ${theme.colors.brown};
      --toastify-font-family: ${theme.fonts.family.default};
      --toastify-text-color-light: ${theme.colors.white};
    }
  `}
`;

export default GlobalStyle;
