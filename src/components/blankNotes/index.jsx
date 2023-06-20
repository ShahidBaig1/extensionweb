import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import RichTextEditor from "../richText";
import Button from "../button";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import FastRewindIcon from "@material-ui/icons/FastRewind";

function BlankNotes() {
  const classes = useStyles();
  return (
    <Box>
      <RichTextEditor />
      <Box className={classes.secButton}>
        <Button variant="outlined">
          <FastRewindIcon />
          Reset
        </Button>
        <Button variant="contained">
          <SaveAltIcon />
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default BlankNotes;
const useStyles = makeStyles((theme) => ({
  secButton: {
    display: "flex",
    gap: 5,
  },
}));
