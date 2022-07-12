import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { AiFillGithub } from "react-icons/ai";
import { blue } from "@material-ui/core/colors";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: 'linear-gradient(to right, red , yellow)',
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <div className={classes.root} >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

        }}
      >
        <h2 className="navhead1">Sorting Algorithms Visualizer</h2>
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(0)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
