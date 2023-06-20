import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  makeStyles,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Logo from "../../assets/logo.png";
import Ava from "../../assets/avatar.jpg";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import { useState } from "react";
import AddLineIcon from "remixicon-react/AddLineIcon";
import BookletLineIcon from "remixicon-react/BookletLineIcon";
import StyledAccordion from "../accordion";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon";
import AccountCircleLineIcon from "remixicon-react/AccountCircleLineIcon";
import { Link } from "react-router-dom";
import Nuton from "../../assets/addimage.jpg";
const SideBar = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  //   Handle Click
  const HandleClick = () => {
    setClick(!click);
  };
  const handleClickAway = () => {
    setClick(false);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.headContainer}>
        <Box className={classes.logoCont}>
          <img src={Logo} alt="prompt logo" className={classes.logoImg} />
        </Box>
      </Box>
      <Box className={classes.dropDownCont}>
        <Box className={classes.logoCont}>
          <img src={Ava} alt="Avatar" className={classes.avaImg} />
        </Box>
        <Typography variant="body1" className={classes.typo}>
          Bud Wiser
        </Typography>
        <Box className={classes.typoIcon}>
          <ArrowDownSLineIcon onClick={HandleClick} />
        </Box>
        {click && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box className={classes.dropDownMenu}>
              <MenuItem className={classes.dropDownMenuItem}>
                <AccountCircleLineIcon className={classes.dropdownIcon} />
                My Profile
              </MenuItem>
              <MenuItem className={classes.dropDownMenuItem}>
                <AccountCircleLineIcon className={classes.dropdownIcon} />
                <Link to="/editProfile">Edit Profile</Link>
              </MenuItem>
              <MenuItem className={classes.dropDownMenuItem}>
                <AccountCircleLineIcon className={classes.dropdownIcon} />
                <Link to="accountSetting">Account Settings</Link>
              </MenuItem>
              <MenuItem className={classes.dropDownMenuItem}>
                <AccountCircleLineIcon className={classes.dropdownIcon} />
                <Link to="privacySetting">Privacy Settings</Link>
              </MenuItem>
              <Divider />
              <MenuItem className={classes.dropDownMenuItem}>
                <AccountCircleLineIcon className={classes.dropdownIcon} />
                Log out
              </MenuItem>
            </Box>
          </ClickAwayListener>
        )}
      </Box>
      <Box className={classes.bodyCont}>
        {/* Accordion Code */}
        <Box className={classes.addBtn}>
          <Link to="/bank-notes">
            <Button
              color="secondary"
              variant="contained"
              startIcon={<AddLineIcon />}
              fullWidth
            >
              Add New
            </Button>
          </Link>
        </Box>
        <Box className={classes.menuItemMain}>
          <MenuItem className={classes.menuItem}>
            <BookletLineIcon className={classes.dropdownIcon} />
            Prompts
          </MenuItem>
        </Box>
        <StyledAccordion />
        <MenuItem className={classes.menuItem}>
          <TimeLineIcon className={classes.dropdownIcon} /> Reminder
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <DeleteBinLineIcon className={classes.dropdownIcon} />
          Bin
        </MenuItem>
        <hr />
        <Box className={classes.imageCont}>
          <Box>
            <img className={classes.image} src={Nuton} alt="" />
          </Box>
          <Box>
            {" "}
            <Typography className={classes.adTypo}>Nuton Ad</Typography>
            <Typography className={classes.adTypo}>
              Nuton is a place where you can make your own prompt
            </Typography>
            <a className={classes.typo} href="/">
              Learn More
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "max-content auto",
    columnGap: "20px",
    padding: "20px",
  },
  subContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "20px",
  },
  container: {
    background: theme.palette.primary.main,
    borderRadius: 8,
    maxWidth: "100%",
    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: 20,
    paddingBottom: 40,
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  headContainer: {
    display: "flex",
    gap: 20,
    borderBottom: `1px solid ${theme.palette.text.tertiary}`,
    paddingBottom: 10,
  },
  logoCont: {
    height: "100%",
  },

  typo: {
    display: "flex",
    alignItems: "center",
  },
  typoIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  dropDownCont: {
    display: "grid",
    paddingTop: "20px",
    gridGap: 10,
    gridTemplateColumns: "1fr 3fr 0fr",
  },
  avaImg: {
    height: "50px",
    borderRadius: "10px",
    // width: "50px",
  },
  dropDownMenu: {
    position: "absolute",
    top: 200,
    background: theme.palette.background.paper,
    minWidth: "14rem",
    transformOrigin: "top center",
    borderRadius: 10,
    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.175)",
    padding: "0.5rem 0",
    zIndex: 1000,
    animationName: "$slideDown",
    animationDuration: ".3s",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  },
  "@keyframes slideDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  dropdownIcon: {
    color: "rgba(0, 0, 0, 0.54)",
    marginRight: "5px",
  },
  dropDownMenuItem: {
    padding: "0.5rem 1.5rem",
    "& a": {
      color: "#000000",
      textDecoration: "none",
    },
  },
  bodyCont: {
    paddingTop: "1em",
    // overflow:"scroll"
  },
  addBtn: {
    paddingTop: "1em",
  },
  menuItem: {
    padding: "0.5em 0",
  },
  menuItemMain: {
    paddingTop: "0.5em",
  },
  logoImg: {
    width: "192px",
  },
  imageCont: {
    display: "flex",
    gap: 3,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20,
    width: "336px",
    height: "280px",
    textAlign: "center",
  },
  image: {
    // width: 80,
    height: 100,
  },
  adTypo: {
    fontSize: 14,
  },
  imageContSub: {
    width: "125px",
    height: "50px",
  },
  upgrade: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1em",
  },
}));
