import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 12px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: ${theme.fonts.family.secondary};
      font-size: 1.5rem;

      div {
        width: 100px;

        white-space: nowrap;

        overflow: hidden;

        text-overflow: ellipsis;
      }

      svg {
        height: 22px;

        width: 22px;
      }
    }
  `}
`;
