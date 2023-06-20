import { Button as MuiButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Button = withStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main,
    fontFamily: theme.fontFamily,
    transition: ".25s ease",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transition: ".25s ease",
    },
  },

  contained: {
    backgroundColor: theme.palette.secondary.main,
    border: "1px solid #1f1c2f",
    color: "#fff",
    height: 28,
    fontWeight: "400",
    fontSize: "16px",
    borderRadius: 10,
    padding: "20px 15px",
    lineHieght: 1.5,
    textTransform: "initial",
    "&:hover": {
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;",
      backgroundColor: "#0f0e17",
    },
  },
  outlined: {
    backgroundColor: "transparent",
    border: "1px solid #1f1c2f",
    height: 28,
    fontWeight: "400",
    fontSize: "1rem",
    borderRadius: 10,
    padding: "20px 15px",
    lineHieght: 1.5,
    textTransform: "initial",
    "&:hover": {
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;",
      color: "#fff",
    },
  },
  text: {},
}))(MuiButton);

export default Button;
