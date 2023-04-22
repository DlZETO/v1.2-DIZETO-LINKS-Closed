import React from "react";
import "dizeto/styles/tailwind.css";
import "dizeto/styles/style.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
