import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import { assets } from "../images/svg/ecology/index";

const Seo = () => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>ÖDEV NE?</title>
      <meta name="description" content="Ödev Takip Uygulaması" />
      <meta property="og:url" content="https://odevne.netlify.app/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Ödev Takip Uygulaması" />
      <meta
        property="og:description"
        content="Öğrenci ve Öğretmenler İçin Ödev Takibi"
      />
      <meta
        property="og:image"
        content={assets.op}
      />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content="Ödev Takip Uygulaması" />
      <meta
        property="twitter:description"
        content="Öğrenci ve Öğretmenler İçin Ödev Takibi"
      />
      <meta
        property="twitter:image"
        content={assets.op}
      />
      <meta property="twitter:url" content="https://odevne.netlify.app/" />
    </Helmet>
  );
};

export default Seo;
