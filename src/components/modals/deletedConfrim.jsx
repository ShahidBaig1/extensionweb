import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { motion } from "framer-motion";
import { Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deleteConfirmModal } from "../../redux/models/model.slicer";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
export default function TableDeleteConfirmModal() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(deleteConfirmModal(false));
  };
  const { modelDeleteconfirm } = useSelector((state) => state.modelSlice);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modelDeleteconfirm}
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
            <CheckCircleOutlineIcon className="svg" />
            <Typography variant="h5" className={classes.typo}>
              Your note has been deleted.
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,

    "& .svg": {
      fontSize: 80,

      color: "rgba(138,195,163,.5)",
    },
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
