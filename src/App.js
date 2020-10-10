import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Particle } from "./components/Particles";
// import Grid from "@material-ui/core/Grid";
import DneClass from "./components/DneClass";
import Homework from "./components/Homework";
import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Tooltip from "@material-ui/core/Tooltip";
import { Tooltip, Grid, Fab, Typography } from "@material-ui/core";
import {
  HashRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import { data } from "./data";

import Appbar from "./components/Appbar";

import a from "./images/favicon.png";
import { Home } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

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
          <Switch>
            <Route exact path="/">
              {data.map((dt) => {
                return <DneClass {...dt} />;
              })}
              <Grid
                item
                xs={12}
                style={{
                  position: "relative",
                  bottom: "0",
                  marginTop: "1em",
                  marginBottom: "0",
                  height: "7em",
                  width: "100%",
                  backgroundColor: "#BEE6E2",
                }}
              >
                <Typography color="textSecondary">
                  {`Hayatta en doğru yol gösterici bilimdir`}
                </Typography>
                <br />
                <Typography
                  style={{ position: "absolute", left: "20%" }}
                  color="textSecondary"
                >
                  {` Mustafa Kemal Atatürk`}
                </Typography>
                {/* <Particle /> */}
              </Grid>
            </Route>
            {data.map(({ dneClass, homework }) => {
              return (
                <Route exact path={`/odevler/${dneClass.substring(0, 3)}`}>
                  <Link to="/">
                    <Tooltip
                      // title={`Boşuna tıklama ${String.fromCodePoint(
                      //   parseInt("1F981", 16)
                      // )}`}
                      title="Anasayfa"
                      aria-label="anasayfa"
                      className={classes.absolute}
                    >
                      <Fab style={{ position: "fixed" }} color="secondary">
                        <ArrowBackIcon />
                      </Fab>
                    </Tooltip>
                  </Link>
                  {homework.map((hw) => (
                    <Homework {...hw} />
                  ))}
                </Route>
              );
            })}
          </Switch>
        </Grid>
        <Route exact path="/create">
          <Tooltip
            title={`Boşuna tıklama ${String.fromCodePoint(
              parseInt("1F981", 16)
            )}`}
            aria-label="add"
            className={classes.absolute}
          >
            <Fab color="secondary">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Route>
      </div>
    </Router>
  );
}
