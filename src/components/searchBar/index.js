import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    padding: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // perform search logic using searchQuery
    console.log(`Performing search for: ${searchQuery}`);
  };

  return (
    <Paper className={classes.root}>
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </Paper>
  );
};

export default SearchBar;
