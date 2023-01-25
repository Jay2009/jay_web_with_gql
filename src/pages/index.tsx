import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import JaySideBar from "../components/navBar/jaySideBar";
import GetUrlTitle from "../components/navBar/getUrlTitle";
import JayTopBar from "../components/navBar/jayTopBar";
import { ALL_ECONOMY_IDX } from "@/apollo/gqlQuery/economy";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import LineChart from "@/components/eCharts/lineChart";
import CandleChart from "@/components/eCharts/candleChart";

interface IEconomics {
  localDate: string[];
  candleData: number[];
}

let lastHalfEDollar: IEconomics[] = [];

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);
  const [firstHalfDollar, setFirstHalfDollar] = useState<IEconomics | null>(
    null
  );
  const [lastHalfDollar, setLastHalfDollar] = useState<IEconomics | null>(null);

  useEffect(() => {
    if (data) {
      console.log(data);

      let dollarLocDate = data.oneYearEco.dollar.localDate;
      let dollarCdleData = data.oneYearEco.dollar.candleData;
      let firstLocDate = dollarLocDate.slice(0, dollarLocDate.length / 2);
      let firstCdleData = dollarCdleData.slice(0, dollarCdleData.length / 2);
      let lastLocDate = dollarLocDate.slice(
        dollarLocDate.length / 2,
        dollarLocDate.length
      );
      let lastCdleData = dollarCdleData.slice(
        dollarLocDate.length / 2,
        dollarLocDate.length
      );
      // firstHalfDollar = [
      //   { localDate: firstLocDate, candleData: firstCdleData },
      // ];
      // firstHalfDollar = [{ localDate: lastLocDate, candleData: lastCdleData }];
      setFirstHalfDollar({
        localDate: firstLocDate,
        candleData: firstCdleData,
      });
      setLastHalfDollar({ localDate: lastLocDate, candleData: lastCdleData });
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
              <CandleChart
                title="6month Dollar Index"
                maxYaxis={120}
                candleData={firstHalfDollar ? firstHalfDollar : null}
              />
              <CandleChart
                title="Next 6month Dollar Index"
                maxYaxis={120}
                candleData={lastHalfDollar ? lastHalfDollar : null}
              />
            </div>
            <div className="chart-layer">
              <LineChart />
              <LineChart />
            </div>
            <div className="chart-layer">
              <LineChart data={data?.oneYearEco.usInterestRate.series} />
              <LineChart />
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
          display: flex;
          flex-direction: column;
          gap: 35px;
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
