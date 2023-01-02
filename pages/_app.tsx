import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import Client from "../apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloProvider client={Client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}
