import type { AppProps } from "next/app";
import "../styles/global.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
