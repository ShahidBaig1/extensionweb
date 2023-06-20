import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import AccountSettings from "../../components/accountSetting";
import SocialMedia from "../../components/socialMedia";

function AccountSetting() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box>
        <AccountSettings />
      </Box>
      <Box>
        <SocialMedia />
      </Box>
    </Box>
  );
}
export default AccountSetting;
const useStyle = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr ",
      gap: 25,
    },
  },
}));
