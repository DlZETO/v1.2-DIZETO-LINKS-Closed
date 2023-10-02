import React from "react";
import "dizeto-links/styles/tailwind.css";
import "dizeto-links/styles/style.css";

export default function App({ Component, pageProps }) {
  console.log("© 2021 DIZETO. All rights reserved.");
  console.log("Created by Gede Dewo Wahyu M.W with 🖤 ");
  return <Component {...pageProps} />;
}
