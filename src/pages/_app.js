import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <Component {...pageProps} />;
}

export default MyApp;
