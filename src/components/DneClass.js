import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

const useStyles = makeStyles({
  media: {
    paddingTop: "56.25%", // 16:9
  },
});

DneClass.defaultProps = {
  img: "",
  dneClass: "5/A SINIFI ÖDEVLERİ",
  atasozu: "O yana da bu yana da salla!",
};
export default function DneClass({ img, dneClass }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {dneClass}
            </Typography>
          </CardContent>
          <Link to={`/odevler/${dneClass.substring(0, 3)}`}>
            <Lottie
              width={"100%"}
              height={"27em"}
              options={{
                loop: true,
                autoplay: true,
                animationData: img,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
