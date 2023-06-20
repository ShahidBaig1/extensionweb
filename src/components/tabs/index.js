import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import PersonalInformation from "../personalInformation";
import ChangePassword from "../changePassword";
import EmailSMS from "../emailSms/index";
import ManageContact from "../manageContact";
import { a11yProps, TabPanel } from "../tabUnits";

function ProfileEditTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.innerTabs}>
        <Tabs
          // orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            disableRipple
            label="Personal Information"
            className={clsx(classes.forTabs, {
              [classes.selected]: value === 0,
            })}
            {...a11yProps(0)}
          />
          <Tab
            disableRipple
            label="Change Password"
            className={clsx(classes.forTabs, {
              [classes.selected]: value === 1,
            })}
            {...a11yProps(1)}
          />
          <Tab
            disableRipple
            label="Email and SMS"
            className={clsx(classes.forTabs, {
              [classes.selected]: value === 2,
            })}
            {...a11yProps(2)}
          />
          <Tab
            disableRipple
            label="Manage Contact "
            className={clsx(classes.forTabs, {
              [classes.selected]: value === 3,
            })}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} className={classes.panelContainer}>
        <PersonalInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.panelContainer}>
        <EmailSMS />
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.panelContainer}>
        <ManageContact />
      </TabPanel>
    </div>
  );
}

export default ProfileEditTabs;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  innerTabs: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    marginBottom: 30,
  },

  forTabs: {
    // borderRadius: 5,

    textTransform: "capitalize",

    "& .MuiTab-wrapper": {
      fontWeight: "bold",
    },
  },
  selected: {
    backgroundColor: "#b2b2b2",
    color: "#1f1c2f",
    fontSize: 14,
    borderRadius: 10,
    padding: "1rem 1rem!important",
  },
  tabs: {
    fontSize: 20,

    "& .MuiTabs-flexContainer": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr 1fr  ",
        gap: 5,
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr  ",
        gap: 5,
        width: "100%",
      },
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-wrapper": {
      fontSize: 16,
    },
  },
  panelContainer: {},
}));
