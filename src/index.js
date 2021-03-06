import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "./redux/store";
import types from "./redux/types";

const theme = createTheme({
  typography: {
    fontFamily: "Colfax,Helvetica,Arial,sans-serif",
    htmlFontSize: 16,
  },
  palette: {
    type: "light",
    primary: {
      main: "#002045",
      light: "#0491fe",
    },
    text: {
      primary: "#546b81",
    },
    background: {
      default: "white",
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
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
