import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from "antd";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import Client from "../apollo/client";
import "../styles/navBar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloProvider client={Client}>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}
