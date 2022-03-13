import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  isOutlined?: boolean;
}>`
  ${({ theme, isOutlined }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 160px;
    min-height: 3rem;

    padding: 0.4rem 0.7rem;

    border-radius: 2rem;

    background-color: ${theme.colors.brown};
    font-weight: 600;
    color: ${theme.colors.white};

    &:hover {
      filter: brightness(90%);
    }

    ${isOutlined &&
    css`
      width: max-content;

      border: 2px solid ${theme.colors.brown};

      color: ${theme.colors.brown};
      background-color: ${theme.colors.background};
    `}
  `}
`;
