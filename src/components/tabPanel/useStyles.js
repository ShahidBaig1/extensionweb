import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",

    "& .MuiTabs-indicator": {
      display: "none",
    },
  },

  tabs: {
    "& .Mui-selected": {
      color: theme.palette.text.primary,
      fontWeight: "600",

      borderBottom: "2px solid black",
      "&:hover": {
        backgroundcolor: theme.palette.text.primary,
      },
    },
  },

  tab: {
    color: theme.palette.text.primary,

    backgroundColor: theme.palette.primary.main,
    maxWidth: "20px",
    padding: "0px",

    transition: "all 0.9s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
    },
  },

  createdSec: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",

    columnGap: "10px",
    rowGap: "80px",
    placeItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      rowGap: "20px",
    },
  },
  skeletonCard: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    gap: 10,
    alignItems: "center",
    height: "100%",
    padding: 10,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 0,
    },
  },
  skeletonImage: {
    width: 100,
    height: 100,
    [theme.breakpoints.down("md")]: {
      width: 70,
      height: 70,
    },
  },
  skeletontextConent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      gap: 5,
    },
  },

  card: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    justifyContent: "space-around",
    columnGap: "20px",
    rowGap: "100px",
    placeItems: "center",
    marginTop: "50px",
  },
}));

export default useStyles;
