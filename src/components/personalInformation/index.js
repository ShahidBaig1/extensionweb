import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Ava from "../../assets/avatar.jpg";
import InputField from "../inputField/index";
import Radio from "../radioButton/index";
import CreateCollection from "../dropDownInput/index";
import Button from "../button";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const PersonalInformation = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography>Personal Information</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box>
          <Box className={classes.forAva}>
            <Box className={classes.logoCont}>
              <img src={Ava} alt="Avatar" className={classes.avaImg} />
              <Box className={classes.iconContainer}>
                <Box className={classes.iconUpload}>
                  <CreateOutlinedIcon color="primary" fontSize="small" />
                </Box>
              </Box>
            </Box>
            <div className={classes.forForm}>
              <Box className={classes.forInner}>
                <div>
                  <Box className={classes.forLabel}>First Name:</Box>
                  <InputField variant="outlined" placeholder="Username" />
                </div>
                <div>
                  <Box className={classes.forLabel}>Last Name:</Box>
                  <InputField variant="outlined" placeholder="Last name" />
                </div>
              </Box>
              <Box className={classes.forInner}>
                <div>
                  <Box className={classes.forLabel}>Username:</Box>
                  <InputField variant="outlined" placeholder="Username" />
                </div>
                <div>
                  <Box className={classes.forLabel}>Email Address:</Box>
                  <InputField variant="outlined" placeholder="Email Address" />
                </div>
              </Box>
              <Box className={classes.forInner}>
                <div>
                  <Box className={classes.forLabel}>Whats up?</Box>
                  <Radio />
                </div>
                <div>
                  <Box className={classes.forLabel}>Date of Birth:</Box>
                  <InputField variant="outlined" placeholder="Date of Birth" />
                </div>
              </Box>

              <Box className={classes.forInner}>
                <div>
                  <Box className={classes.forLabel}>Country:</Box>
                  <CreateCollection />
                </div>
                <div>
                  <Box className={classes.forLabel}>State:</Box>
                  <CreateCollection />
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
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInformation;

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
  forAva: {
    // display: "flex",
    position: "relativ",
    alignItems: "center",
    marginBottom: "1rem",
    marginRight: "-15px",
    marginLeft: "-15px",
    padding: 20,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -3,
    left: 70,
    cursor: "pointer",
  },
  iconUpload: {
    height: 28,
    width: 28,
    borderRadius: "50%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoCont: {
    height: "100%",
    position: "relative",
    marginBottom: 10,
  },
  avaImg: {
    height: "100px",
    borderRadius: "10px",
  },
  forForm: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    gap: 10,
  },
  forLabel: {
    marginBottom: "0.5rem",
  },
  forInner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr  ",
      gap: 5,
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
