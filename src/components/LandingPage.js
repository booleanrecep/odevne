import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import CanvasDraw from "react-canvas-draw";
import chill from "../images/animations/lottie/chill.json";
import mountains from "../images/imgs/mountaines.png";
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  odevler: {
    position: "absolute",
    top: "15em",
    left: "50%",
    zIndex: "10",
    [theme.breakpoints.down("sm")]: {
      top: "9em",
      left: "35%",
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
              <Typography className={classes.title} variant="h6" noWrap>
                ÖĞRETMEN VE ÖĞRENCİLER İÇİN
                <br />
                ÖDEV TAKİP UYGULAMASI
              </Typography>
            ) : (
              <Typography className={classes.title} variant="h6" noWrap>
                ÖĞRETMEN VE ÖĞRENCİLER İÇİN ÖDEV TAKİP UYGULAMASI
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} style={{ marginTop: "3.5em" }}>
        <Link to="/odevler">
          <div className={classes.odevler}>
            <Button size="large" variant="contained" color="secondary">
              ÖDEVLERİ GÖR
            </Button>
          </div>
        </Link>
        <Lottie
          style={{ pointerEvents: "none", zIndex: "-2" }}
          width={"100%"}
          height={"100%"}
          options={{
            loop: true,
            autoplay: true,
            animationData: chill,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12} style={{ marginTop: ".2em" }}>
        <CanvasDraw canvasWidth="100%" imgSrc={mountains} brushRadius={5} />
      </Grid>
    </Grid>
  );
};
export default LandingPage;
