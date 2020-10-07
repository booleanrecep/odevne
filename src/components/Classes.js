import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeworkPaper from "./HomeworkPaper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    marginLeft: "15em",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeworkPaper />
    </div>
  );
}
