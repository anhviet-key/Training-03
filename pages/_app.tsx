/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../pages/i18n";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
