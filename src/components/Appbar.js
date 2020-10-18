import React from "react";
import {
    Tooltip,
    Fab,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Avatar,
  } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

import {Link} from "react-router-dom";
import recep from "../images/recep.png";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";

const useStyles = makeStyles((theme) => ({
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
}));

const Appbar = ({handleClickOpen}) => {
  const classes = useStyles();
  return (
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
                onClick={handleClickOpen}
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
                onClick={handleClickOpen}
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
  );
};

export default Appbar