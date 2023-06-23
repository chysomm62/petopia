import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1264,
      xl: 1600,
    },
  },
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#EBE5F7",
    },
    primary: {
      main: "#FE4519",
      light: "#FE6F4D",
      dark: "#B72401",
    },
    secondary: {
      main: "#000080",
      light: "#7786D0",
    },
    text: {
      primary: "#0E081E",
      secondary: "#1C103B",
    },
    success: {
      main: "#64BC26",
    },
    warning: {
      main: "#FD9900",
    },
    error: {
      main: "#FF3A12",
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: "'Nunito', sans-serif",
    },
    h2: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "28px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
    },
    h4: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    body2: {
      fontSize: "13px",
      lineHeight: "15px",
    },
    button: {
      fontSize: "13px",
      lineHeight: "18px",
      textTransform: "none",
      fontWeight: 700,
    },
  },
});

export default theme;
