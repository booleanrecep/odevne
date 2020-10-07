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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import a1 from "../images/svg/Asset1.svg";
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
RecipeReviewCard.defaultProps = {
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
export default function RecipeReviewCard({
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        title={topic}
        // subheader={` Başlama Tarihi: ${startDate} Bitiş Tarihi: ${endDate} `}
        subheader={
          <Typography variant="body2" color="textSecondary" component="p">
            {` Başlama Tarihi: ${startDate}`}
            <br />
            {` Başlama Tarihi: ${startDate}`}
          </Typography>
        }
      />

      <CardMedia className={classes.media} image={img} title={imgTitle} />
      {/* <img src={a1}/> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {hmIntro}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{contentTitle}</Typography>

          <Typography paragraph>{contentDesc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
