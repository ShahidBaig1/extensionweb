import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "../button";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,.2)",
    padding: "40px 120px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.5)",
    gap: 30,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
  },
  typoContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  typo: {
    color: theme.palette.text.secondary,
  },
  btn: {
    width: 100,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Empty Bin
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Box className={classes.typoContainer}>
              <Typography variant="h2">Delete</Typography>
              <Typography variant="h3" className={classes.typo}>
                Are you sure you want to delete this ?
              </Typography>
            </Box>
            <Box className={classes.buttonContainer}>
              {" "}
              <Button
                onClick={handleClose}
                className={classes.btn}
                variant="contained"
              >
                Cancel
              </Button>
              <Button variant="outlined">Continue</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
