import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InputField from "../inputField/index";
import Button from "../button";

const SocialMedia = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography variant="h5">Social Media</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box className={classes.forInner}>
          <div>
            <Box className={classes.forLabel}>FaceBook:</Box>
            <InputField variant="outlined" placeholder="www.facebook.com" />
          </div>
          <div>
            <Box className={classes.forLabel}>Twitter:</Box>
            <InputField variant="outlined" placeholder="Twitter" />
          </div>
          <div>
            <Box className={classes.forLabel}>Google +:</Box>
            <InputField variant="outlined" placeholder="Google" />
          </div>
          <div>
            <Box className={classes.forLabel}>Instagram:</Box>
            <InputField variant="outlined" placeholder="Instagram" />
          </div>
          <div>
            <Box className={classes.forLabel}>You Tube:</Box>
            <InputField variant="outlined" placeholder="You Tube" />
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

export default SocialMedia;

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
