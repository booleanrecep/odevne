import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  Fab,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { Link } from "react-router-dom";

import recep from "../images/recep.png";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: "1em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
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
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  absoluteTop: {
    position: "fixed",
    top: theme.spacing(0.5),
    right: theme.spacing(3),
    // [theme.breakpoints.down("sm")]: {
    //   top: theme.spacing(3),
    //   right: theme.spacing(3),
    // },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Avatar src={recep} />
          </IconButton>
          {window.innerWidth <= 364 ? (
            <Typography className={classes.title} variant="h6" noWrap>
              DNE ORTAOKULU
              <br />
              RECEP HOCA 
              <Link to="/create">
              
              <Tooltip
                title="Yeni Ödev Oluştur"
                aria-label="yeni-odev"
                className={classes.absoluteTop}
              >
                <Fab color="secondary">
                  <span>{`${String.fromCodePoint(
                    parseInt("1F4DD", 16)
                  )}`}</span>
                </Fab>
              </Tooltip>
              </Link>
            </Typography>
          ) : (
            <Typography className={classes.title} variant="h6" noWrap>
              DURİYE NURİYE ENDÜRÜST ORTAOKULU - RECEP HOCA 
              <Link to="/create">
              
              <Tooltip
                title="Yeni Ödev Oluştur"
                aria-label="yeni-odev"
                className={classes.absoluteTop}
              >
                <Fab color="secondary">
                  <span>{`${String.fromCodePoint(
                    parseInt("1F4DD", 16)
                  )}`}</span>
                </Fab>
              </Tooltip>
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
