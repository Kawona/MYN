import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Meridian Youth Network</title>
        <link rel="icon" href="/images/logo/mynLogo.jpg" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}