import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import DneClass from "./components/DneClass";
import Homework from "./components/Homework";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import { data } from "./data";

import Appbar from "./components/Appbar";

import a from "./images/favicon.png";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: "8em",
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    fontSize: "1.3em",
    width: "18em",
    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
  },
  absolute: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Helmet>
          <link rel="icon" type="image/png" href={a} sizes="16x16" />
          <meta charSet="utf-8" />
          <title>ÖDEV NE</title>
        </Helmet>
        <Appbar />
        <Grid container spacing={3}>
          {data.map((dt) => {
            return <Homework {...dt.homework} />;
          })}
          {/* {dneClasses.map((dt) => {
            return (
                <DneClass {...dt} />
            );
          })} */}
        </Grid>
        <Tooltip title="Add" aria-label="add" className={classes.absolute}>
          <Fab color="secondary">
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </Router>
  );
}
