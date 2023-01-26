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

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);
  const [isGoBtnClicked, setIsGoBtnClicked] = useState(false);
  const [isRefrBtnClicked, setIsRefrBtnClicked] = useState(false);

  const [firstHalfDollar, setFirstHalfDollar] = useState<IEconomics | null>(
    null
  );
  const [lastHalfDollar, setLastHalfDollar] = useState<IEconomics | null>(null);

  const [firstHalfGold, setFirstHalfGold] = useState<IEconomics | null>(null);
  const [lastHalfGold, setLastHalfGold] = useState<IEconomics | null>(null);

  const [firstHalfNasdaq, setFirstHalfNasdaq] = useState<IEconomics | null>(
    null
  );
  const [lastHalfNasdaq, setLastHalfNasdaq] = useState<IEconomics | null>(null);

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

  const handleOkBtn = () => {
    setIsRefrBtnClicked(false);
    setIsGoBtnClicked(true);
  };
  const handleRefrBtn = () => {
    setIsGoBtnClicked(false);
    setIsRefrBtnClicked(true);
  };

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />
      </div>
      <div className="main-body">
        <div className="right-main">
          <div className="control-area">
            <h2>No more trading, but trainning your self. </h2>
            <div className="btn-wrap">
              {isGoBtnClicked == false ? (
                <button
                  className="btn"
                  onClick={handleOkBtn}
                  disabled={data ? false : true}
                >
                  Go
                </button>
              ) : (
                <button className="btn" onClick={handleRefrBtn}>
                  Try again
                </button>
              )}
            </div>
          </div>

          <div className="echarts-wrap">
            <div className="chart-layer">
              <CandleChart
                title="6month Dollar Index"
                maxYaxis={120}
                candleData={firstHalfDollar ? firstHalfDollar : null}
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <CandleChart
                      title="-> Next 6month Dollar Index"
                      maxYaxis={120}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      candleData={lastHalfDollar ? lastHalfDollar : null}
                    />
                  </div>
                  <div className="chart-curtain"></div>
                </>
              ) : (
                <div className="result-control">sd</div>
              )}
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

        .btn-wrap {
          display: flex;
          gap: 10px;
        }
        .btn {
          margin-top: 20px;
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          background-color: #3369aa;
          border-radius: 3px;
          width: 80px;
          height: 35px;
          opacity: 0.8;
          transition: 0.4s;
          border: none;
          box-shadow: 4px 4px 12px #4f5054;
          outline: none;
        }
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .result-wrap {
          positon: relative;
        }
        .chart-curtain {
          background: #0a1b30;
          position: absolute;
          z-index: 10;
          left: 470px;

          height: 250px;
          background: linear-gradient(to right, #08182c, #0a1a30);
          width: 0px;
          animation: moveToRight 2.5s linear;
        }

        @keyframes moveToRight {
          0% {
            transform: translate(0, 0);
            width: 450px;
          }
          to {
            transform: translate(450px, 0);
            width: 0px;
          }
        }
      `}</style>
    </div>
  );
}
