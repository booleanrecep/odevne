import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import { data } from "./data";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BEE6E2",
    },
    secondary: {
      main: red[500],
    },

    textPrimary: {
      main: "red",
    },
    default: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Crimson Text",
    ].join(","),
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App data={data} />,
  </ThemeProvider>,
  document.getElementById("root")
);