import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import { motion } from "framer-motion";
import { Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { safeModel } from "../../redux/models/model.slicer";

export default function SafeModal() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(safeModel(false));
  };
  const { modelSafe } = useSelector((state) => state.modelSlice);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modelSafe}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <motion.div
          className={classes.paper}
          animate={{
            x: 0,
            y: 0,
            scale: 1.5,
            rotate: 0,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <Box className={classes.typoContainer}>
            <Typography variant="h5" className={classes.typo}>
              Your note is safe!
            </Typography>
          </Box>
          <Box className={classes.buttonContainer}>
            <button onClick={handleClose} className={classes.btn}>
              OK
            </button>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}

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
    padding: "10px 100px",
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
    padding: "8px 7px",
    border: 0,
    borderRadius: "0.25em",
    color: "#fff",
    fontSize: "1em",
    backgroundColor: theme.palette.background.btnmodel,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
