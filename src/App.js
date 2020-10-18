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
import EditHomework from "./components/EditHomework";
import TrDate from "tr-date";

import recep from "./images/recep.png";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import { CollectionsOutlined } from "@material-ui/icons";
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
  footer: {
    position: "relative",
    bottom: "0",
    // padding: "0.5em",
    height: "6.7em",
    width: "100%",
    backgroundColor: "#BEE6E2",
  },
  copyright: {
    position: "absolute",
    left: "30%",
    bottom: "0.5em",
    [theme.breakpoints.down("sm")]: {
      left: "18%",
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      openEdit: false,
      openCreate: false,
      editState: "",
    };
    this.handleClickOpenCreate = this.handleClickOpenCreate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditState = this.onEditState.bind(this);
  }

  handleClickOpenCreate = () => {
    this.setState({ openCreate: true });
  };

  handleClose = () => {
    this.setState({ openCreate: false, openEdit: false });
  };
  changeDateFormat = (date) => {
    const cd = new TrDate(date);
    return `${cd.getFullYear()}-${cd.getMonthNum()}-${cd.getDate()}`;
  };

  onEditState = (e) => {
    e.preventDefault();
    let eState = "";
    this.state.data
      .find(({ homeworks }) =>
        homeworks.find(({ id }) => id === parseInt(e.target.id))
      )
      .homeworks.map((homework) => {
        homework.baslama = this.changeDateFormat(homework.baslama);
        homework.bitis = this.changeDateFormat(homework.bitis);
        eState = homework;
      });
    this.setState({
      editState: eState,
      openEdit: true,
    });
  };

  onDelete = (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    this.setState({
      data: this.state.data.filter((cls, indx) => {
        return (cls.homeworks = cls.homeworks.filter(
          ({ id }) => id != targetId
        ));
      }),
      editState: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { editState } = this.state;
    // console.log(this.state.editState)
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
                      onClick={this.handleClickOpenCreate}
                    >
                      <Fab color="secondary">
                        <NoteAddOutlinedIcon />
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
                      onClick={this.handleClickOpenCreate}
                    >
                      <Fab color="secondary">
                        <NoteAddOutlinedIcon />
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
                <Grid item xs={12} className={classes.footer}>
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
                  <Typography
                    className={classes.copyright}
                    color="textSecondary"
                  >
                    &#xA9; Copyright 2020 Recep ÖZTÜRK
                  </Typography>
                </Grid>
              </Route>
              {this.state.data &&
                this.state.data.map(({ classroom, homeworks }) => {
                  return (
                    <Route exact path={`/odevler/${classroom}`}>
                      {homeworks.map((hw) => (
                        <Homework
                          onEditState={this.onEditState}
                          onDeleteState={this.onDelete}
                          {...hw}
                        />
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
              openIt={this.state.openCreate}
            />
            <EditHomework
              homeworkState={this.state.data}
              editState={editState}
              closeIt={this.handleClose}
              openIt={this.state.openEdit}
            />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
