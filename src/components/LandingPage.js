import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import CanvasDraw from "react-canvas-draw";
import chill from "../images/animations/lottie/chill.json";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import mountains from "../images/imgs/mountaines.png";
import { assets } from "../images/svg/ecology/index";

import PopCreated from "./PopCreated";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: 100,
  },
  odevler: {
    position: "absolute",
    top: "4em",
    left: "45%",
    zIndex: "10",
    [theme.breakpoints.down("sm")]: {
      top: "3.5em",
      left: "30%",
    },
  },
}));

const INNER_WIDTH = window.outerWidth;
const LandingPage = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12}>
        <AppBar position="fixed">
          <Toolbar style={{ justifyContent: "center", textAlign: "center" }}>
            {INNER_WIDTH <= 499 ? (
              <Typography className={classes.title} variant="body1" noWrap>
                ÖĞRETMEN VE ÖĞRENCİLER İÇİN
                <br />
                ÖDEV TAKİP UYGULAMASI
              </Typography>
            ) : (
              <Typography className={classes.title} variant="body1" noWrap>
                ÖĞRETMEN VE ÖĞRENCİLER İÇİN ÖDEV TAKİP UYGULAMASI
              </Typography>
            )}
            <Link to="/odevler">
              <div className={classes.odevler}>
                <Paper variant="outlined" elevation={6}>
                  <CardMedia
                    className={classes.media}
                    image={assets.a1}
                    title="Contemplative Reptile"
                  />
                  <Button size="large" variant="contained" color="secondary">
                    ÖDEVLERİ GÖR
                  </Button>
                </Paper>
              </div>
              {/* <PopCreated/> */}
            </Link>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} style={{ marginTop: ".2em" }}>
        <CanvasDraw
          canvasWidth="100%"
          canvasHeight={600}
          imgSrc={mountains}
          brushRadius={5}
        />
      </Grid>
    </Grid>
  );
};
export default LandingPage;
