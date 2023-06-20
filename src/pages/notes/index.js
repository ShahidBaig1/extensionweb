import { makeStyles, Typography } from "@material-ui/core";
import SimpleTabs from "../../components/tabPanel";
import Filter2LineIcon from "remixicon-react/Filter2LineIcon";
import LayoutGridLineIcon from "remixicon-react/LayoutGridLineIcon";

const Notes = () => {
  const classes = useStyle();
  return (
    <div className={classes.notesCont}>
      <Typography className={classes.headingText}>Your Notes</Typography>
      <div>
        <div className={classes.tabsHeader}>
          <SimpleTabs />
          <div>
            <Filter2LineIcon />
            <LayoutGridLineIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;

const useStyle = makeStyles((theme) => ({
  notesCont: {
    background: theme.palette.primary.main,
    borderRadius: 8,

    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    padding: 20,
  },

  headingText: {
    fontWeight: 40,
    margin: 0,
    lineHeight: 1.5,
    color: "#131313",
    fontSize: "1.728em",
  },
  tabsHeader: {
    display: "flex",
  },
}));
