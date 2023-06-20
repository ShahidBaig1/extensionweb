import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SearchBar from "../searchBar";
import React from "react";

const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <React.Fragment className={classes.navpartone}>
        <SearchBar className={classes.searchBar} />
      </React.Fragment>
    </Box>
  );
};

export default Navbar;

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    display: "grid",
    gridGap: "10px",
    height: 75,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  navpartone: {
    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: "20px 30px",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  navparttwo: {
    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    height: 16,
    width: 16,
    color: "#848486",
  },
}));
