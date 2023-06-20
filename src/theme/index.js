import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  fontStyle: "normal",
  fontWeight: "normal",
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#1f1c2f",
    },
    background: {
      default: "#f3f6fd",
      paper: "#ffffff",
      greenicon: "#68b288",
      pinkicon: "#f34491",
      btnmodel: "#2778c4",
    },
    text: {
      primary: "#1f1c2f",
      secondary: "#768492",
      tertiary: "#dcdddf",
      heading: "#01041b",
      model: "#131313",
    },
    warning: {
      main: "#f0864a",
    },
    success: {
      main: "#8ac3a3",
    },
    divider: "#dcdddf",
  },
  typography: {
    color: "#131313",
    fontFamily: "Jost, sans-serif",
    body2: {
      fontFamily: "Roboto, sans-serif",
      color: "#768492",
      fontSize: 16,
    },
  },
});

export default theme;
