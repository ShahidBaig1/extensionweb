import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import Button from "../button";
import Checkbox from "../checkbox";

const EmailSMS = () => {
  const classes = useStyle();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography>Email and SMS</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box className={classes.forInner}>
          <Box className={classes.forText}>
            <Typography>SMS Notification:</Typography>
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="top"
                  control={
                    <Switch
                      color="secondary"
                      size="small"
                      disableRipple="true"
                    />
                  }
                  labelPlacement="top"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.forInner}>
          <Box className={classes.forText}>
            <Typography>When To Email:</Typography>
          </Box>
          <Box className={classes.forchkBoxOuter}>
            <Box className={classes.forchkBox}>
              <Checkbox label="You have new notifications." />
            </Box>
            <Box className={classes.forchkBox}>
              <Checkbox label="Someone followed you" />
            </Box>
            <Box className={classes.forchkBox}>
              <Checkbox label="Someone adds you as a connection" />
            </Box>
          </Box>
        </Box>

        <Box className={classes.forButtons}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.forSubmit}
          >
            Submit
          </Button>
          <Button color="primary" className={classes.forCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailSMS;

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    marginBottom: 30,
    padding: 0,
    // width: "100%",
  },
  forHeading: {
    background: "transparent",
    padding: 20,
    alignItems: "center!important",
    borderBottom: "1px solid #dcdddf",
  },
  forBody: {
    display: "grid",
    gap: 20,
    padding: 20,
    "& .MuiBox-root-68": {
      padding: 0,
    },
  },
  forInner: {
    display: "grid",
    gridTemplateColumns: "0.5fr 1fr ",
    "& .MuiFormControlLabel-root": {
      marginLeft: 0,
      marginRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr  ",
      gap: 5,
    },
  },
  checkBox: {
    // "&: .MuiCheckbox-root": {
    //   borderRadius: "50%",
    // },
    // "& .MuiCheckbox-root": {
    //   color: "#1f1c2f",
    // },
  },
  forchkBoxOuter: {},
  forText: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    // marginBottom: 25,
  },
  forchkBox: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: 3,
    "& .MuiSvgIcon-root": {
      borderRadius: "50%",
    },
    "& .MuiFormControlLabel-root": {
      marginRight: 0,
    },
    "& .MuiButtonBase-root": {
      padding: 0,
    },
    "& .MuiCheckbox-root": {
      color: "unset",
      // disableRipple: "true",
    },
  },

  forButtons: {
    marginTop: "1rem",
  },

  forSubmit: {
    marginRight: 5,
  },
  forCancel: {
    "&:hover": {
      background: "transparent",
      border: "none",
    },
  },
}));
