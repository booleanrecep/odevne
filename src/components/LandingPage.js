import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import chill from "../images/animations/lottie/chill.json";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "block",
  },
  odevler: {
    position: "absolute",
    top: "14em",
    left: "45%",
    zIndex: "10",
  },
  [theme.breakpoints.down("sm")]: {
    top: "12em",
  },
}));

const INNER_WIDTH = window.outerWidth;
const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} lg={12} style={{ marginTop: "3.5em" }}>
        <AppBar position="fixed">
          <Toolbar>
            {INNER_WIDTH <= 499 ? (
              <Typography className={classes.title} variant="h6" noWrap>
                ÖĞRETMEN VE ÖĞRENCİLER İÇİN
                <br />
                ÖDEV TAKİP UYGULAMASI
              </Typography>
            ) : (
              <Typography className={classes.title} variant="h6" noWrap>
                ÖĞRETMEN VE ÖĞRENCİLER İÇİN- ÖDEV TAKİP UYGULAMASI
              </Typography>
            )}
          </Toolbar>
        </AppBar>
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
    </Grid>
  );
};
export default LandingPage;
