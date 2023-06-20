import { Box, makeStyles, Typography } from "@material-ui/core";
import profile from "../../assets/profile.jpg";

const ProfilePicture = () => {
  const classes = useStyles();
  return (
    <Box style={{ position: "relative" }}>
      <img src={profile} alt="Profile" className={classes.image} />
      <Box className={classes.details}>
        <Typography variant="h5" align="center">
          Mario Speedwagon
        </Typography>
        <Typography variant="body2" align="center" className={classes.position}>
          Sr. Manager
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfilePicture;

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  details: {
    width: "fit-content",
    background: theme.palette.background.paper,
    position: "absolute",
    right: 0,
    bottom: 4,
    padding: "10px 30px",
    borderRadius: "10px 10px 0 0 ",
  },
  position: {},
}));
