import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Classes from "./components/Classes";
import HomeworkDetails from "./components/HomeworkDetails";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Particles from "react-particles-js";

import { data } from "./data";
import Appbar from "./components/Appbar";

// import a from "./images/a.png"
import a from "./images/favicon.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor:"#C8EBF2",
    // opacity:0.5
  },
  search: {
    position: "absolute",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginTop: "8em",
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: theme.spacing(3),
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
    // vertical padding + font size from searchIcon
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

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Helmet>
          <link rel="icon" type="image/png" href={a} sizes="16x16" />
          <meta charSet="utf-8" />
          <title>ÖDEV NE</title>

          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Appbar />
        <Grid container spacing={3}>
          {/* <Particles
            style={{ zIndex: -1, position: "fixed", top: 0, left: 0 }}
            params={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#B84B00",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                },

                size: {
                  value: 10,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 300,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 2,
                },
              },

              retina_detect: true,
            }}
          /> */}
          <Grid item xs={12}>
            {/* <div className={classes.search}>
            <Paper elevation={10}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          </div> */}
            {/* <Appbar/> */}
          </Grid>
          <Switch>
            {/* <Route exact path="/">
        <Grid container>
              <Classes />
            
          </Grid>
        </Route> */}
          </Switch>
          {data.map((dt) => {
            return (
              <Grid item xs={12} sm={6} lg={3}>
                <HomeworkDetails {...dt}></HomeworkDetails>
              </Grid>
            );
          })}
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
