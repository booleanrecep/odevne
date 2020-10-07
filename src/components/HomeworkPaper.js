import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeworkDetails from "./HomeworkDetails";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20em",
    border: "2px solid red",
    display: "flex",
    flexWrap: "wrap",

    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  cardRoot: {
    width: "15em",
  },
  media: {
    height: 140,
  },
}));

export default function HomeworkPaper() {
  const classes = useStyles();

  return (
    <Paper elevation={10}>
      <Card className={classes.cardRoot}>
        <Link to="/details">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.fillmurray.com/640/360"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                5/A SINIFI
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Son Ödeviniz
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Devamına Bak
            </Button>
          </CardActions>
        </Link>
      </Card>
    </Paper>
  );
}
