import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import op from "../images/op.png";

const Seo = () => {
  console.log(op);

  return (
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta charSet="utf-8" />
      <meta property="og:url" content="https://odevne.netlify.app/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Ödev Takip Uygulaması" />
      <meta
        property="og:description"
        content="Öğrenci ve Öğretmenler İçin Ödev Takibi"
      />
      <meta property="og:image" content={op} />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content="Ödev Takip Uygulaması" />
      <meta
        property="twitter:description"
        content="Öğrenci ve Öğretmenler İçin Ödev Takibi"
      />
      <meta property="twitter:image" content={op} />
      <meta property="twitter:url" content="https://odevne.netlify.app/" />
      <title>ÖDEV NE</title>
    </Helmet>
  );
};

export default Seo;
