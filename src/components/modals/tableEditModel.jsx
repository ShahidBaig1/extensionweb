import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import Button from "../button";
import { Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { editModal } from "../../redux/models/model.slicer";
import CustomInputField from "../inputField";

export default function TableEditModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(editModal(false));
  };
  const { modalEdit } = useSelector((state) => state.modelSlice);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalEdit}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className={classes.paper}>
          <Box className={classes.typoContainer}>
            <Typography>Edit Notebook</Typography>
            <Typography variant="h5" className={classes.typo}>
              Name
            </Typography>
          </Box>
          <Box>
            <CustomInputField placeholder="Notebook Name" />
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
    width: "100%",

    maxWidth: "35%",
    color: theme.palette.text.model,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,.2)",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.5)",
    rowGap: 30,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "calc(100% - 300px)",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
      margin: "auto",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
  },
  typoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  typo: {
    color: theme.palette.text.model,
  },
  btn: {
    width: 100,
  },
}));
