import React, { useState } from "react";
import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "../inputField/index";
import Data from "./data";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";

const CreateCollection = () => {
  const [selectedValue, setSelectedValue] = useState("sjdh");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  console.log(selectedValue);
  const classes = useStyles();
  return (
    <Box>
      <Select
        native
        id="select"
        variant="outlined"
        onChange={handleChange}
        value={selectedValue}
        className={classes.select}
        inputProps={{
          id: "select",
        }}
        IconComponent={ArrowDownSLineIcon}
      >
        {Data.map((item) => {
          return (
            <option key={item.Name} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};

export default CreateCollection;

const useStyles = makeStyles((theme) => ({
  select: {
    width: "100%",
    height: 45,
    background: "#f3f6fd",
    border: "1px solid #dcdddf",
    fontSize: 14,
    color: "#768492",
    borderRadius: 10,
    "&.Mui-focused": {
      // borderColor: "#0364FF",
      transition: "0.5s ease",
      border: "1px solid #000000",
      backgroundColor: "#ffff",
      borderRadius: 10,
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
      paddingLeft: 10,
      height: "100%",
      border: "none",
      borderRadius: 10,
    },
    "& .PrivateNotchedOutline-root-108": {
      border: "none",
      borderRadius: 10,
    },
  },
}));
