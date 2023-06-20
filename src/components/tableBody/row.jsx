import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import PencilFillIcon from "remixicon-react/PencilFillIcon";
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon";
import { useDispatch } from "react-redux";

import { deleteModal, editModal } from "../../redux/models/model.slicer";
import ShareBtn from "../shareBtn";
export default function Row({ name, one, two, three, four, subRow }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const modelEidtOpen = () => {
    dispatch(editModal(true));
  };

  const DeleteModel = () => {
    dispatch(deleteModal(true));
  };
  return (
    <React.Fragment>
      <TableRow className={classes.rowinner}>
        <TableCell className={classes.rowinner}>{name}</TableCell>
        <TableCell className={classes.rowinner}>{one}</TableCell>
        <TableCell className={classes.rowinner}>{two}</TableCell>
        <TableCell className={classes.rowinner}>{three}</TableCell>{" "}
        <TableCell className={classes.rowinner}>
          <div className={classes.iconAction}>
            <div className={classes.iconBackground1}>
              <ShareBtn size={26} className="icons" onClick={modelEidtOpen} />
            </div>
            <div className={classes.iconBackground2}>
              {" "}
              <DeleteBinLineIcon
                color="black"
                size={26}
                className="icons"
                onClick={DeleteModel}
              />
            </div>
            <div> </div>
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 0,
  },
  rowinner: {
    padding: "1.55rem 1.2rem",

    borderLeft: " None !important",
  },

  icons: {
    fontSize: 30,
  },

  iconAction: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      gap: 10,
    },

    "& .icons": {
      color: theme.palette.background.paper,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },

  iconBackground1: {
    padding: "9px 10px",
    opacity: 0.7,
    borderRadius: 10,
    // backgroundColor: theme.palette.background.greenicon,

    "&:hover": {
      opacity: 1,
    },
  },
  iconBackground2: {
    opacity: 0.7,
    padding: "9px 10px",
    borderRadius: 10,
    // backgroundColor: theme.palette.background.pinkicon,
    "&:hover": {
      opacity: 1,
    },
  },
}));
