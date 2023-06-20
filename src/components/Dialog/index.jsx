import React from "react";
import {
  alpha,
  Dialog as MuiDialog,
  makeStyles,
  Slide,
} from "@material-ui/core";
import clsx from "clsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Dialog = (props) => {
  const classes = useStyles();
  return (
    <MuiDialog
      {...props}
      TransitionComponent={Transition}
      className={clsx(classes.root, props.className)}
    />
  );
};

export default Dialog;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
    "& .MuiPaper-elevation24": {
      boxShadow:
        "0px 0px 10px 0px " + alpha(theme.palette.secondary.light, 0.2),
    },
  },
}));
