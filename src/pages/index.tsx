import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import JaySideBar from "../components/navBar/jaySideBar";
import GetUrlTitle from "../components/navBar/getUrlTitle";
import JayTopBar from "../components/navBar/jayTopBar";
import { ALL_ECONOMY_IDX } from "@/apollo/gqlQuery/economy";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import Echart from "@/components/eCharts/eChart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);

  useEffect(() => {
    if (data) {
      console.log(data, "ypooooo");
    }
    console.log(error, "errorrrrrrrr");
  }, [data]);

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />
      </div>
      <div className="main-body">
        <div className="right-main">
          <div className="control-area">
            <h2>No more trading, but trainning your self. </h2>
            <div>조금의 설명과 버튼 !</div>
            <div> 디테일스</div>
          </div>

          <div className="echarts-wrap">
            <div className="chart-layer">
              <Echart data={data?.oneYearEco.usInterestRate.series} />
              <Echart />
              <Echart />
            </div>
            <div className="chart-layer">
              <Echart />
              <Echart />
              <Echart />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .right-main {
          width: 100%;
          height: 100%;
          z-index: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }
        .control-area {
          width: 100%;
          height: 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .echarts-wrap {
          width: 100%;
          height: 100%;
        }
        .chart-layer {
          display: flex;
        }
      `}</style>
    </div>
  );
}
