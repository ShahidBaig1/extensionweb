import React, { useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import useStyles from "./useStyles";

import { a11yProps, TabPanel } from "../tabUnits";
import { useLocation } from "react-router-dom";
import Calendar2LineIcon from "remixicon-react/Calendar2LineIcon";
import PushpinLineIcon from "remixicon-react/PushpinLineIcon";

import Card from "../card";

const SimpleTabs = () => {
  const classes = useStyles();
  const state = useLocation().state;
  const [value, setValue] = React.useState(() =>
    state?.value ? state.value : 0
  );

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const data = [
    "#87BAF5",
    "#AA87F5",
    "#EE864A",
    "#EB72AC",
    "#1F1C2F",
    "#9CCDB2",
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Tabs value={value} onChange={handleChange} className={classes.tabs}>
          <Tab label={`All `} {...a11yProps(0)} className={classes.tab} />
          <Tab
            label={`Shared Notes `}
            {...a11yProps(1)}
            className={classes.tab}
          />

          <Tab label="Pin Notes" {...a11yProps(2)} className={classes.tab} />

          <Tab
            label={`Favourite Notes `}
            {...a11yProps(3)}
            className={classes.tab}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.card}>
          {data.map((item) => {
            return (
              <Card
                headerMainIcon={<Calendar2LineIcon />}
                headerSecondaryIcon={<PushpinLineIcon />}
                heading="weekly planner"
                behave={item}
                text="Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital"
              />
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
    </div>
  );
};

export default SimpleTabs;
