import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Checkbox from "../checkbox";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";

const PrivacySetting = () => {
  const classes = useStyle();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.forHeading}>
        <Typography variant="h5">Privacy and Security</Typography>
      </Box>
      <Box className={classes.forBody}>
        <Box className={classes.innerBody}>
          <Typography variant="h5">Account Privacy</Typography>
          <Box className={classes.chkBox}>
            <Checkbox label="Private Account" />
          </Box>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
        </Box>

        <Box className={classes.innerBody}>
          <Typography variant="h5">Profile Visibility</Typography>
          <Box className={classes.chkBox}>
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel
                  value="Public"
                  control={<Radio size="small" disableRipple />}
                  label="Public"
                />
                <FormControlLabel
                  value="Friend"
                  control={<Radio size="small" disableRipple />}
                  label="Friend"
                />
                <FormControlLabel
                  value="Specific Friend"
                  control={<Radio size="small" disableRipple />}
                  label="Specific Friend"
                />
                <FormControlLabel
                  value="Only Me"
                  control={<Radio size="small" disableRipple />}
                  label="Only Me"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
        </Box>
        <Box className={classes.innerBody}>
          <Typography variant="h5">Login Notification</Typography>
          <Box className={classes.chkBox}>
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel
                  value="Enable"
                  control={<Radio size="small" disableRipple />}
                  label="Enable"
                />
                <FormControlLabel
                  value="Disable"
                  control={<Radio size="small" disableRipple />}
                  label="Disable"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacySetting;

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
    display: "flex",
    flexDirection: "column",
    gap: 20,
    "& .MuiBox-root-68": {
      padding: 0,
    },
  },
  innerBody: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    // marginBottom: "1rem",
    padding: 5,
    borderBottom: `1px solid ${theme.palette.text.tertiary}`,
    paddingBottom: 20,
  },
  chkBox: {
    display: "flex",
    flexDirection: "column",
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
  SupportSection: {
    display: "flex",
    gap: 5,
    paddingTop: 12,
  },
}));
