import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InputField from "../inputField/index";
import Button from "../button";
import Checkbox from "../checkbox";

const AccountSettings = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography variant="h5">Account Setting</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box className={classes.forInner}>
          <div>
            <Box className={classes.forLabel}>User Name:</Box>
            <InputField variant="outlined" placeholder="Username" />
          </div>
          <div>
            <Box className={classes.forLabel}>Email Id:</Box>
            <InputField variant="outlined" placeholder="Username" />
          </div>
          <div>
            <Box className={classes.forLabel}>Alternate Email:</Box>
            <InputField variant="outlined" placeholder="Username" />
          </div>
          <div>
            <Box className={classes.forLabel}>Language Known:</Box>
            <Box className={classes.chkBox}>
              <Checkbox label="English" disableRipple />
              <Checkbox label="French" disableRipple />
              <Checkbox label="Hindi" disableRipple />
              <Checkbox label="Spanish" disableRipple />
              <Checkbox label="Arabic" disableRipple />
              <Checkbox label="Italian" disableRipple />
            </Box>
          </div>
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

export default AccountSettings;

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
  forLabel: {
    marginBottom: "0.5rem",
  },
  forInner: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: "1rem",
  },
  chkBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
    alignItems: "center",
    gap: 10,
    "& .MuiIconButton-colorSecondary:hover": {
      backgroundColor: "transparent",
    },
    "& .MuiSvgIcon-root": {
      borderRadius: "50%",
    },
    "& .MuiFormControlLabel-root": {
      marginRight: 0,
    },
    "& .MuiButtonBase-root": {
      padding: 5,
      gap: 10,
    },
    "& .MuiCheckbox-root": {
      color: "unset",
      // disableRipple: "true",
    },
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
