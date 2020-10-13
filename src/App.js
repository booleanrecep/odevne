import React from "react";
import { fade } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import AddIcon from "@material-ui/icons/Add";
import { Tooltip, Grid, Fab, Typography, withStyles } from "@material-ui/core";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Appbar from "./components/Appbar";
import favicon from "./images/favicon.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DneClass from "./components/DneClass";
import Homework from "./components/Homework";
import CreateHomework from "./components/CreateHomework";
import { animations } from "./images/animations/lottie/index";

const styles = (theme) => ({
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
  absoluteBack: {
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(3),
  },
  lottie: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-10em",
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, open: false };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div>
          <Helmet>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            <meta charSet="utf-8" />
            <title>ÖDEV NE</title>
          </Helmet>
          <Appbar />
          <Grid container spacing={2}>
            <Switch>
              <Route exact path="/">
                {this.state.data.map((dt) => {
                  return <DneClass {...dt} />;
                })}
                <Grid
                  item
                  xs={12}
                  style={{
                    position: "relative",
                    padding: "0.5em",
                    height: "4.7em",
                    width: "100%",
                    backgroundColor: "#BEE6E2",
                  }}
                >
                  <Typography
                    color="textSecondary"
                    style={{ position: "absolute", left: "2%" }}
                  >
                    {`Hayatta en doğru yol gösterici bilimdir`}
                  </Typography>
                  <br />
                  <Typography
                    style={{
                      position: "absolute",
                      left: "30%",
                      marginTop: "0.5em",
                    }}
                    color="textSecondary"
                  >
                    {` Mustafa Kemal Atatürk`}
                  </Typography>
                </Grid>
              </Route>
              {this.state.data.map(({ dneClass, homework }) => {
                return (
                  <Route exact path={`/odevler/${dneClass.substring(0, 3)}`}>
                    {homework.map((hw) => (
                      <Homework {...hw} />
                    ))}
                    <Link to="/">
                      <Tooltip
                        title="Anasayfa"
                        aria-label="anasayfa"
                        className={classes.absolute}
                      >
                        <Fab color="secondary">
                          <ArrowBackIcon />
                        </Fab>
                      </Tooltip>
                    </Link>
                  </Route>
                );
              })}
            </Switch>
          </Grid>
          <Route exact path="/create">
            {/* AAAAAA */}
            <Grid container spacing={2}>
              <Grid item style={{ margin: "1em" }} xs={12} sm={12} md={12}>
                <Lottie
                  width={"100%"}
                  height={"70%"}
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animations.chill,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </Grid>
              <CreateHomework
                homeworkState={this.state.data}
                closeIt={this.handleClose}
                openIt={this.state.open}
              />
              <Tooltip
                title={`Yeni Ödev Oluştur ${String.fromCodePoint(
                  parseInt("1F4DD", 16)
                )}`}
                aria-label="add"
                className={classes.absolute}
                onClick={this.handleClickOpen}
              >
                <Fab color="secondary">
                  <AddIcon />
                </Fab>
              </Tooltip>
              <Link to="/">
                <Tooltip
                  title="Anasayfa"
                  aria-label="anasayfa"
                  className={classes.absoluteBack}
                >
                  <Fab color="secondary">
                    <ArrowBackIcon />
                  </Fab>
                </Tooltip>
              </Link>
            </Grid>
            {/* ZZZZ */}
          </Route>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
