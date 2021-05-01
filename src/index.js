import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from './redux/store';
import types from './redux/types';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#202d59',
      light:'#1F3680'
    },
    background: {
      default: '#efeeee',
    },
  },
});
store.dispatch({
  type: types.GET_USER_DETAILS,
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
