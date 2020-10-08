import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import svg1 from "../images/svg/Asset1.svg";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

DneClass.defaultProps = {
  img: svg1,
  dneClass: "5/A SINIFI ÖDEVLERİ",
  atasozu: "O yana da bu yana da salla!",
};
export default function DneClass({ img, dneClass, atasozu }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {dneClass}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Günün Atasözü: ${atasozu}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
