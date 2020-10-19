import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TimelapseRoundedIcon from "@material-ui/icons/TimelapseRounded";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Badge,
} from "@material-ui/core";
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

export default function Homework(props) {
  const classes = useStyles();
  const {
    onEditState,
    onDeleteState,
    id,
    sinif,
    baslama,
    bitis,
    konu,
    odev,
  } = props;
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
            <div style={{ height: "2em" }}>
              <TimelapseRoundedIcon
                style={{
                  marginLeft: "9em",
                  color:
                    bitis.substring(8, 10) > today.getDate() ? "green" : "grey",
                }}
              />
              <Typography
                style={{
                  marginTop: "-1.8em",
                }}
                variant="body1"
                color="textPrimary"
              >
                {konu}
              </Typography>
            </div>
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
          <Typography
            align="left"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {odev.substring(0, 38)}
          </Typography>
          <Typography
            align="left"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {odev.substring(38, 76)}
          </Typography>
          <Typography
            align="left"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {odev.substring(76, 112)}
          </Typography>
          <Typography
            align="left"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {odev.substring(112, 150)}
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
            aria-label="favorite"
          >
            <Badge badgeContent={fav.favNum} color="primary">
              <FavoriteIcon style={{ color: fav.favColor }} />
            </Badge>
          </IconButton>
          <IconButton
            aria-label="edit"
            style={{ marginLeft: "7em" }}
            id={id}
            onClick={onEditState}
          >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" id={id} onClick={onDeleteState}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
