import React from "react";
import { Helmet } from "react-helmet";

export default function PageHeader() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My React App</title>
        <link rel="canonical" href="https://www.yahoo.co.jp" />
      </Helmet>
    </div>
  )
}