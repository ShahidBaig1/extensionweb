import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Row from "../tableBody/row";
import { makeStyles } from "@material-ui/core";
const data = [
  {
    name: "First Notebook",
    one: "Bud Wiser",
    two: "Dec 4",
    three: "Only You",
  },
  {
    name: "#booklaunch ",
    one: "1",
    two: "2",
    three: "3",
  },
  {
    name: "#spring23 ",
    one: "1",
    two: "2",
    three: "3",
  },
  {
    name: "#coverart",
    one: "1",
    two: "2",
    three: "3",
  },
];
const TableCampo = ({ expandIcon }) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.inner}>
        <Table className={classes.tableHead}>
          <TableHead>
            <TableRow className={classes.headingTop}>
              <TableCell className="head">TITLE </TableCell>
              <TableCell className="head">CREATED BY</TableCell>
              <TableCell className="head"> UPDATED</TableCell>
              <TableCell className="head">SHARED WITH</TableCell>
              <TableCell className="head" style={{ paddingLeft: 70 }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <Row {...item} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default TableCampo;

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.primary.main,
    padding: 30,
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {},
  },
  inner: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  tableHead: {
    "&::-webkit-scrollbar": {
      width: 20,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "orange",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "red",
      borderRadius: 2,
    },
    // borderBottom: "none",
  },
  headingTop: {
    background: theme.palette.secondary.main,

    "& .head": {
      fontWeight: 700,
      fontSize: 14,
      fontFamily: theme.fontFamily,
      color: theme.palette.primary.main,
    },
  },
}));
