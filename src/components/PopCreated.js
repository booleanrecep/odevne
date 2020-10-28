import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 130,
    backgroundColor: "#e8f5e9",
    textAlign: "center",
  },
  container: {
    position: "absolute",
    top: "7em",
    left: "45%",
    zIndex: "10",
    [theme.breakpoints.down("sm")]: {
      top: "5.5em",
      left: "30%",
    },
  },
}));

export default function PopCreated({ checked }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <FormControlLabel
        control={<Switch checked={props.checked} onChange={handleChange} />}
        label="Show"
      /> */}
      <Zoom in={checked}>
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="subtitle2">Ödev oluşturuldu!</Typography>
        </Paper>
      </Zoom>
    </div>
  );
}
