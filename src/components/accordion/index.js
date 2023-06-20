import { MenuItem, Typography, withStyles } from "@material-ui/core";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordion from "@material-ui/core/Accordion";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import Folder4LineIcon from "remixicon-react/Folder4LineIcon";
import FolderLineIcon from "remixicon-react/FolderLineIcon";
import { Link } from "react-router-dom";
import AddLineIcon from "remixicon-react/AddLineIcon";

const StyledAccordion = () => {
  const classes = useStyle();
  //   Accordion Style
  const AccordionDetails = withStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      padding: 0,
      margin: 0,
    },
  }))(MuiAccordionDetails);

  const Accordion = withStyles({
    root: {
      boxShadow: "none",
      padding: 0,
      border: "none",

      "&$expanded": {
        margin: 0,
        padding: 0,
        border: "none",
      },
      "&:before": {
        display: "none",
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      marginBottom: -1,
      padding: 0,
      "&$expanded": {
        // minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  return (
    <>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Folder4LineIcon className={classes.accordionIcon} />

          <Typography className={classes.heading} align="left">
            Notebooks
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/table" className={classes.linktables}>
            <MenuItem>
              <FolderLineIcon className={classes.accordionIcon} />
              Project Plans
            </MenuItem>{" "}
          </Link>

          <MenuItem>
            <Link to="/table" className={classes.linktables}>
              <AddLineIcon className={classes.accordionIcon} />
              New Folder
            </Link>
          </MenuItem>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default StyledAccordion;

const useStyle = makeStyles((theme) => ({
  accordionIcon: {
    color: "rgba(0, 0, 0, 0.54)",
    marginRight: "5px",
  },

  linktables: {
    color: "#1F1C2F !important",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
}));
