import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { makeStyles } from "@material-ui/core";

const Trems = ({ Question, Answer, expand }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        defaultExpanded={expand}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h5" className={classes.secondaryHeading}>
            {Question}
          </Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.summary}>
          {Answer && (
            <Typography
              variant="body1"
              className="desc"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: Answer }}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Trems;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .MuiPaper-root": {
      borderRadius: "10px",
    },
  },
  accordion: {
    padding: " 10px 15px",
    backgroundColor: theme.palette.primary.main,
  },

  secondaryHeading: {
    fontWeight: 700,
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.heading,
    textTransform: "capitalize",
  },

  summary: {
    backgroundColor: theme.palette.primary.main,
    "& .MuiSvgIcon-root": {
      color: theme.palette.text.secondary,
    },
  },
  anstext: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
  },
}));
