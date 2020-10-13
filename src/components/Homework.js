import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import TimelapseRoundedIcon from "@material-ui/icons/TimelapseRounded";
import Badge from "@material-ui/core/Badge";
import Calender from "./Calender";
import TrDate from "tr-date";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
Homework.defaultProps = {
  sinif: "..",
  konu: "Konu 1",
  baslama: "Eylül 14, 2016",
  bitis: "Eylül 14, 2016",
  img: "https://www.fillmurray.com/640/360",
  imgTitle: "Image Title",
  odev: `This impressive paella is a perfect party dish and a fun meal to
  cook together with your guests.`,
};
export default function Homework({ sinif, baslama, bitis, konu, odev }) {
  const classes = useStyles();
  const [fav, setFav] = React.useState({ favColor: "", favNum: "0" });
  const today = new TrDate();

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {sinif}
            </Avatar>
          }
          title={
            <>
              <Typography
                style={{
                  marginTop: "-0.5em",
                }}
                variant="body1"
                color="textPrimary"
              >
                {konu}
                <TimelapseRoundedIcon
                  style={{
                    position: "relative",
                    color:
                      bitis.substring(8, 10) > today.getDate()
                        ? "green"
                        : "grey",
                    left: "4.5em",
                    top: "0.3em",
                  }}
                />
              </Typography>
            </>
          }
        />

        <div
          style={{
            color: "blue",
            border: "0.1em solid aqua",
            pointerEvents: "none",
          }}
        >
          <Calender baslama={baslama} bitis={bitis} />
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {odev}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              setFav((prevState) => ({
                ...prevState,
                favColor: prevState.favColor === "red" ? "" : "red",
                favNum: prevState.favNum === "0" ? +1 : "0",
              }));
            }}
            aria-label="add to favorites"
          >
            <Badge badgeContent={fav.favNum} color="primary">
              <FavoriteIcon style={{ color: fav.favColor }} />
            </Badge>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
