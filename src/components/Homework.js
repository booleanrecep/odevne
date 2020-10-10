import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TimelapseRoundedIcon from "@material-ui/icons/TimelapseRounded";
import green from "@material-ui/core/colors/green";
import Badge from "@material-ui/core/Badge";
import Calender from "./Calender";
import "react-day-picker/lib/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      // marginBottom:"2em"
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
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
  avatar: ".5/A",
  topic: "Konu 1",
  startDate: "Eylül 14, 2016",
  endDate: "Eylül 14, 2016",
  img: "https://www.fillmurray.com/640/360",
  imgTitle: "Image Title",
  hmIntro: `This impressive paella is a perfect party dish and a fun meal to
  cook together with your guests.`,
  contentTitle: "Content Title",
  contentDesc: `Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
  `,
};
export default function Homework({
  avatar,
  topic,
  startDate,
  endDate,
  img,
  imgTitle,
  hmIntro,
  contentTitle,
  contentDesc,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [fav, setFav] = React.useState({ favColor: "", favNum: "0" });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className={classes.root} key={`${Math.random()}`}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          title={topic}
          subheader={
            <Typography variant="body2" color="textSecondary" component="p">
              {`Başlama Tarihi: ${startDate}`}
              <br />
              {`Bitiş Tarihi : ${endDate}`}
            </Typography>
          }
        />
        <TimelapseRoundedIcon
          style={{
            color: "grey",
            position: "relative",
            left: "85%",
            top: "-3.7em",
          }}
        />

        {/* <CardMedia
            className={classes.media}
            image={`/${img}`}
            title={imgTitle}
          >
            
          </CardMedia> */}
        <div
          style={{
            color: "blue",
            border: "0.1em solid aqua",
            pointerEvents: "none",
          }}
        >
          <Calender />
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {hmIntro}
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
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          {hmIntro.length >= 120 ? (
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          ) : null}
        </CardActions>
        {hmIntro.length >= 120 ? (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{contentTitle}</Typography>

              <Typography paragraph>{contentDesc}</Typography>
            </CardContent>
          </Collapse>
        ) : null}
      </Card>
    </Grid>
  );
}
