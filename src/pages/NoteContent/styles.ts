import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  width: 100%;
  max-width: 720px;

  a {
    color: inherit;
    text-decoration: none;
  }

  nav {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;

  h1 {
    margin: 1rem 0;

    text-align: center;

    overflow: hidden;

    text-overflow: ellipsis;
  }

  p {
    flex: 1;

    padding: 0.5rem;

    max-height: 500px;

    word-break: break-word;
    overflow: auto;

    background: rgba(255, 255, 255, 0.541);
    border-radius: 8px;
  }
`;
