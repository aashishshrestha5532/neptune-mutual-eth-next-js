import Head from "next/head";
import Home from "../src/containers/Home";
import Footer from "../src/components/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Neptune Mutual - Crypto Converter</title>
        <meta name="description" content="Neptune Mutual " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

      <Footer />
    </>
  );
}
