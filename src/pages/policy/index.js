import { Box, makeStyles, Typography } from "@material-ui/core";

import React from "react";

export default function CampoPolicy({ para, Question }) {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.inner1}>
        <Box>
          <Typography variant="h5" style={{ fontWeight: 700 }}>
            {Question}
          </Typography>
        </Box>
      </div>

      <div className={classes.inner2}>
        <Box>
          {para && (
            <Typography
              variant="body1"
              className="desc"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: para }}
            />
          )}
        </Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    gap: 2,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
  },

  inner1: {
    padding: " 15px 20px",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: theme.palette.primary.main,
  },
  inner2: {
    padding: " 15px 20px 45px 20px",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: theme.palette.primary.main,
  },
}));
