import { LinearProgress as MuiProgress, withStyles } from "@material-ui/core";

const LinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
  },
}))(MuiProgress);

export default LinearProgress;
