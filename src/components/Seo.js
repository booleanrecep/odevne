import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";

const Seo = () => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>ÖDEV NE?</title>
      <meta name="description" content="Ödev Takip Uygulaması" />
    </Helmet>
  );
};

export default Seo;
