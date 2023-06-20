import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  forIcon: {
    display: "flex",
  },
  root1: {
    height: "1rem",
    width: "1rem",
    padding: 20,
    // pointer: "none",
    "& .MuiIconButton-colorSecondary:hover": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root1}
      disableRipple
      color="secondary"
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        defaultValue="Help"
        aria-label="help"
        name="customized-radios"
      >
        <div className="classes.forIcon">
          <FormControlLabel
            value="Help"
            control={<StyledRadio />}
            label="Help"
          />
          <FormControlLabel
            value="Feedback"
            control={<StyledRadio />}
            label="Feedback"
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
