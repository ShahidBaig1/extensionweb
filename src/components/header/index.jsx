import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TransitionsModal from "../modals";

const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.navpartone}>
        <Box>
          <Typography className={classes.typo} variant="h5">
            Your Delete Items
          </Typography>
        </Box>
        <Box>
          {" "}
          <TransitionsModal className={classes.modalButton} />{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "85% 14% ",
    gridGap: "10px",
  },
  navpartone: {
    background: theme.palette.background.paper,
    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: 30,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navparttwo: {
    background: theme.palette.background.paper,
    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  iconNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
  },
}));
