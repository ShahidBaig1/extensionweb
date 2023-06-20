import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SideBar from "../sideBar";

const RigthSideBar = ({ children }) => {
  const classes = useStyle();

  return (
    <Box className={classes.mainContainer}>
      <SideBar />
      <Box className={classes.subContainer}>{children}</Box>
    </Box>
  );
};

export default RigthSideBar;
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "max-content auto",
    columnGap: "20px",
    padding: "20px",
    transition: "all .3s ease-in-out",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
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
  logoImg: {
    height: "60px",
    width: "60px",
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
    minWidth: "15rem",
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
  imageCont: {
    display: "flex",
    justifyContent: "center",
  },
  imageContSub: {
    width: "170px",
    height: "190px",
  },
  upgrade: {
    display: "flex",
    justifyContent: "center",
  },
}));
