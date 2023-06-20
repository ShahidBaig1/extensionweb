import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Button from "../button";
import { Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteConfirmModal,
  deleteModal,
  safeModel,
} from "../../redux/models/model.slicer";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
export default function TableDeleteModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(deleteModal(false));
  };

  const { modelDelete } = useSelector((state) => state.modelSlice);

  const modelSafeOpen = () => {
    handleClose();
    dispatch(safeModel(true));
  };
  const handleDeleteConfirm = () => {
    handleClose();
    dispatch(deleteConfirmModal(true));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modelDelete}
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
          <Box className={classes.btnClose}>
            <CloseIcon onClick={modelSafeOpen} />
          </Box>
          <Box className={classes.typoContainer}>
            <ErrorOutlineIcon className={classes.iconWarning} />
            <div className="innerData">
              <Typography variant="h5">Are you sure?</Typography>
              <Typography variant="body1">
                You can't revert your action
              </Typography>
            </div>
          </Box>
          <Box className={classes.buttonContainer}>
            {" "}
            <button onClick={handleDeleteConfirm} className={classes.btn}>
              Yes Delete it!
            </button>
            <Button onClick={modelSafeOpen} variant="outlined">
              cancel
            </Button>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  modal: {
    transition: "all 500ms ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    width: "100%",

    maxWidth: "25%",
    color: theme.palette.text.model,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,

    padding: "20px 30px",

    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.5)",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "calc(100% - 100px)",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "60%",
      margin: "auto",
    },
  },

  typoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .innerData": {
      color: "#595959",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      rowGap: 10,
    },
  },

  iconWarning: {
    marginBottom: 20,
    color: "#f674ad",
    fontSize: 90,
  },
  buttonContainer: {
    marginTop: 20,
    display: "flex",
    columnGap: 30,
    justifyContent: "center",
  },

  btn: {
    padding: "5px 20px",
    border: 0,
    borderRadius: "0.25em",
    color: "#fff",
    fontSize: "1em",
    backgroundColor: theme.palette.background.btnmodel,
    "&:hover": {
      cursor: "pointer",
    },
  },

  btnClose: {
    position: "absolute",
    right: 20,
    top: 10,
    color: "#757575",
    "&:hover": {
      color: "#f674ad",
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
}));
