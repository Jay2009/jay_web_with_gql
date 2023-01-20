import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import JaySideBar from "../components/navBar/jaySideBar";
import GetUrlTitle from "../components/navBar/getUrlTitle";
import JayTopBar from "../components/navBar/jayTopBar";
import { ALL_ECONOMY_IDX } from "@/apollo/gqlQuery/economy";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />
      </div>
      <div className="main-body">
        welcome to Jay web!
        {/* <div className="right-main">
          <span className="url-path-txt">{getUrl}</span>
          <MgUserWholeTable />
        </div> */}
      </div>
      ``
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
