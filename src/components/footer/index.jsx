import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.typoContainer}>
        <Box className={classes.typos}>
          <Link to="/policy">
            <Typography className={classes.typo} variant="body1">
              Privacy Policy
            </Typography>
          </Link>
          <Link to="/terms">
            <Typography className={classes.typo} variant="body1">
              Terms of Use
            </Typography>
          </Link>
        </Box>
        <Box className={classes.typos}>
          <Typography className={classes.copyright} variant="body1">
            2023©
          </Typography>
          <Typography className={classes.note} variant="body1">
            nūton
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
const useStyle = makeStyles((theme) => ({
  container: {
    background: theme.palette.background.paper,
    borderRadius: 5,

    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: 20,
  },
  typoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typos: {
    display: "flex",
    gap: 10,
    alignItems: "flex-end",
  },
  typo: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.text.primary,
      cursor: "pointer",
    },
  },
  note: {
    cursor: "pointer",
    fontSize: 18,
  },
  copyright: {
    color: theme.palette.text.secondary,
  },
}));
