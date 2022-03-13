import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: inline-block;

    position: relative;

    width: 80px;
    height: 80px;

    margin: auto;

    div {
      display: block;

      position: absolute;

      width: 64px;
      height: 64px;

      margin: 8px;

      border: 8px solid ${theme.colors.brown};
      border-radius: 50%;
      border-color: ${theme.colors.brown} transparent transparent transparent;
      box-sizing: border-box;
      animation: ldsRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }

    div:nth-child(2) {
      animation-delay: -0.3s;
    }

    div:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes ldsRing {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
