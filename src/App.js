import React from "react";
import {
  Tooltip,
  Grid,
  Fab,
  Typography,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import favicon from "./images/favicon.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DneClass from "./components/DneClass";
import Homework from "./components/Homework";
import CreateHomework from "./components/CreateHomework";
import recep from "./images/recep.png";

const styles = (theme) => ({
  absolute: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  absoluteBack: {
    position: "fixed",
    top: theme.spacing(3),
    right: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },

  absoluteTop: {
    position: "fixed",
    top: theme.spacing(0.5),
    right: theme.spacing(3),
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
          <div style={{ marginBottom: "5em" }}>
            <AppBar position="fixed">
              <Toolbar>
                <Link to="/">
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                  >
                    <Avatar src={recep} />
                  </IconButton>
                </Link>
                {window.innerWidth <= 364 ? (
                  <Typography className={classes.title} variant="h6" noWrap>
                    DNE ORTAOKULU
                    <br />
                    RECEP HOCA
                    <Tooltip
                      title="Yeni Ödev Oluştur"
                      aria-label="yeni-odev"
                      className={classes.absoluteTop}
                      onClick={this.handleClickOpen}
                    >
                      <Fab color="secondary">
                        <span>{`${String.fromCodePoint(
                          parseInt("1F4DD", 16)
                        )}`}</span>
                      </Fab>
                    </Tooltip>
                  </Typography>
                ) : (
                  <Typography className={classes.title} variant="h6" noWrap>
                    DURİYE NURİYE ENDÜRÜST ORTAOKULU - RECEP HOCA
                    <Tooltip
                      title="Yeni Ödev Oluştur"
                      aria-label="yeni-odev"
                      className={classes.absoluteTop}
                      onClick={this.handleClickOpen}
                    >
                      <Fab color="secondary">
                        <span>{`${String.fromCodePoint(
                          parseInt("1F4DD", 16)
                        )}`}</span>
                      </Fab>
                    </Tooltip>
                  </Typography>
                )}
              </Toolbar>
            </AppBar>
          </div>
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
            <CreateHomework
              homeworkState={this.state.data}
              closeIt={this.handleClose}
              openIt={this.state.open}
            />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
