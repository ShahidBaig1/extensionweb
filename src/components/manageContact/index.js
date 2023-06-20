import { Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InputField from "../inputField/index";
import Button from "../button";

const ManageContact = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography>Manage Contact</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box className={classes.forPasswordForm}>
          <Box className={classes.forTopInner}>
            <Box className={classes.forLabel}>Contact Number:</Box>
          </Box>
          <Box>
            <InputField variant="outlined" />
          </Box>
          <Box className={classes.forLabel}>We love to hear from you!</Box>
          <Box>
            <TextField
              className={classes.forTextArea}
              id="my-text-area"
              // label=" remove label after getting value Address "
              multiline
              rows={4}
              variant="outlined"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>
          <Box className={classes.forLabel}>Add Image</Box>
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

export default ManageContact;

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
  forTextArea: {
    width: "100%",
    lineHeight: 30,
    background: "#f3f6fd",
    border: "1px solid #dcdddf",
    fontSize: 14,
    color: "#768492",
    borderRadius: 10,
    boxShadow: "none",
    backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",

    // paddingLeft: 10,
    "& .Mui-focused": {
      transition: "0.5s ease",
      border: "1px solid #000000",
      backgroundColor: "#ffff",
      borderRadius: 10,
    },
    "& .MuiOutlinedInput-multiline": {
      padding: 10,
      borderRadius: 10,
    },
    "& .PrivateNotchedOutline-root-108": {
      border: "none ",
    },
  },
}));
