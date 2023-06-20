import { Box, makeStyles, Paper, Typography } from "@material-ui/core";

const Tile = ({ icon: Svg, amount, title, children, fill }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      {children || (
        <Box className={classes.container}>
          <Box>
            <Svg />
          </Box>
          <Typography style={{ color: fill }} variant="h4" align="center">
            {amount}
          </Typography>
          <Typography variant="h5" align="center">
            {title}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Tile;

const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    justifyItems: "center",
  },
  paper: {
    padding: 20,
  },
}));
