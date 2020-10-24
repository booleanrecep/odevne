import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link,useRouteMatch} from "react-router-dom";
import Lottie from "react-lottie";

const DneClass = ({ img, classroom }) => {
  const {path}=useRouteMatch()
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
              {`${classroom} SINIFI ÖDEVLERİ`}
            </Typography>
          </CardContent>
          <Link to={`${path}/${classroom}`} >
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
};
export default DneClass;
