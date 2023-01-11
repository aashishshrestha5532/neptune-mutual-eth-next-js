import "../styles/globals.css";
import type { AppProps } from "next/app";

import Web3 from "web3";
import { provider } from "web3-core";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider: provider) {
  return new Web3(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
