import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

/**
 * @export
 * @component
 * @name App
 *
 * @description
 * App component
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
