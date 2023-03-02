import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from "antd";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { Client } from "../apollo/client";
import "../styles/navBar.css";
import { prefix } from "../../config/config";
import { PortfolioProvider } from "../../context/context";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider value={{ prefix }}>
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
    </PortfolioProvider>
  );
}
