import { Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Ava from "../../assets/avatar.jpg";
import InputField from "../inputField/index";
import Radio from "../radioButton/index";
import Dropdown from "../dropDownInput/index";
import CreateCollection from "../dropDownInput/index";
import Button from "../button";

const ChangePassword = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography>Personal Information</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box className={classes.forPasswordForm}>
          <Box className={classes.forTopInner}>
            <Box className={classes.forLabel}>Current Password:</Box>
            <Button color="primary" className={classes.forForgetPasword}>
              Forget Password
            </Button>
          </Box>
          <Box>
            <InputField variant="outlined" />
          </Box>
          <Box className={classes.forLabel}>New Password:</Box>
          <Box>
            <InputField variant="outlined" />
          </Box>
          <Box className={classes.forLabel}>Verify Password:</Box>
          <Box>
            <InputField variant="outlined" />
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

export default ChangePassword;

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
    padding: 20,
    "& .MuiBox-root-68": {
      padding: 0,
    },
  },
  forPasswordForm: {
    display: "flex",
    flexDirection: "column",

    gap: 10,
  },
  forTopInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      gap: 5,
    },
  },
  forForgetPasword: {
    "&:hover": {
      background: "transparent",
      border: "none",
      color: "#000",
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
