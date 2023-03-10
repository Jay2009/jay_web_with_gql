import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import JaySideBar from "@/components/navBar/jaySideBar";
import GetUrlTitle from "@/components/navBar/getUrlTitle";
import JayTopBar from "@/components/navBar/jayTopBar";
import { useContext } from "react";
import PortfolioContext from "context/context";

export default function Mars() {
  const { prefix } = useContext(PortfolioContext);

  const getUrl = GetUrlTitle();

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />
      </div>
      <div className="main-body">
        <JaySideBar />
        <div className="right-main">
          <span className="url-path-txt">{getUrl}</span>
          <div className="body-content">
            <h1>Welcome to Mars</h1>
            <h3>This community page is for people who live in Mars.</h3>
            <Image
              alt="mars"
              loader={({ src }) => `${prefix}${src}`}
              src="/assets/mars-pic.png"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .top-layer {
          display: flex;
          flex-direction: row;
          height: 35%;
          gap: 20px;
        }
        .body-content {
          width: 100%;
          hegiht: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
      `}</style>
    </div>
  );
}
