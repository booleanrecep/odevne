import React from "react";
import {
  Tooltip,
  Fab,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import op from "../images/op.png";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },

  absoluteTop: {
    position: "fixed",
    top: theme.spacing(1.8),
    right: theme.spacing(3),
  },
}));

const Appbar = ({ INNER_WIDTH, handleClickOpenCreate }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" style={{ marginBottom: "5em" }}>
      <Toolbar>
        <Link to="/">
          <IconButton
            edge="start"
            className={classes.menuButton}
            // color="inherit"
            aria-label="open drawer"
          >
            <Fab>
              <AccountBalanceTwoToneIcon />
            </Fab>
            <Avatar src={op} style={{ display: "none" }} />
          </IconButton>
        </Link>
        {INNER_WIDTH <= 499 ? (
          <Typography className={classes.title} variant="h6" noWrap>
            ... ORTAOKULU
            <br />
            ... HOCA
            <Tooltip
              title="Yeni Ödev Oluştur"
              aria-label="yeni-odev"
              className={classes.absoluteTop}
              onClick={handleClickOpenCreate}
            >
              <Fab color="secondary">
                <NoteAddOutlinedIcon />
              </Fab>
            </Tooltip>
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" noWrap>
            ... ... ... ORTAOKULU - ... HOCA
            <Tooltip
              title="Yeni Ödev Oluştur"
              aria-label="yeni-odev"
              className={classes.absoluteTop}
              onClick={handleClickOpenCreate}
            >
              <Fab color="secondary">
                <NoteAddOutlinedIcon />
              </Fab>
            </Tooltip>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
