import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import JaySideBar from "../components/navBar/jaySideBar";
import GetUrlTitle from "../components/navBar/getUrlTitle";
import JayTopBar from "../components/navBar/jayTopBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getUrl = GetUrlTitle();

  return (
    <div className="nav-frame">
      <div className="top-nav"><JayTopBar /></div>
      <div className="main-body">
        <JaySideBar />
        <div className="right-main">
          <span className="url-path-txt">{getUrl}</span>
          {/* <MgUserWholeTable /> */}
        </div>
      </div>

      <style jsx>{`
        .top-layer {
          display: flex;
          flex-direction: row;
          height: 35%;
          gap: 20px;
        }
      `}</style>
    </div>
  );
}
