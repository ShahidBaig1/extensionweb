import { Box, Drawer, IconButton, makeStyles, Paper } from "@material-ui/core";
import Logo from "../../assets/logo.png";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import NotificationsSection from "../notificationSection";
import { useState } from "react";
import SideBar from "../sideBar";

const MobileViewHeader = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper elevation={0} className={classes.paper}>
      <Box px={3.75} py={1.25} className={classes.root}>
        <Box className={classes.brandWrapper}>
          <IconButton onClick={handleOpen}>
            {" "}
            <MenuLineIcon className={classes.menuIcon} />
          </IconButton>

          <img src={Logo} alt="prompt logo" className={classes.logoImg} />
        </Box>
        <Box>
          <NotificationsSection />
        </Box>
      </Box>
      <Drawer open={open} onClose={handleClose} anchor="left">
        <SideBar />
      </Drawer>
    </Paper>
  );
};

export default MobileViewHeader;
const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoCont: {
    height: "100%",
  },
  logoImg: {
    height: 50,
    width: 50,
  },
  brandWrapper: {
    display: "flex",
    alignItems: "center",
    fontSize: 30,
  },
  menuIcon: {
    height: 30,
    width: 30,
    color: theme.palette.secondary.main,
  },
}));
