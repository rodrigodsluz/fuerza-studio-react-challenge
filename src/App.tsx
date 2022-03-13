import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import { AuthContextProvider } from './context/AuthContext';

import 'react-toastify/dist/ReactToastify.css';

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
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
        <ToastContainer
          autoClose={3000}
          position="top-right"
          newestOnTop={false}
          hideProgressBar={false}
          draggable={false}
          pauseOnHover
          rtl={false}
          pauseOnFocusLoss={false}
          closeOnClick
        />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
