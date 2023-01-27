import Head from "next/head";
import Image from "next/image";
import JaySideBar from "../components/navBar/jaySideBar";
import GetUrlTitle from "../components/navBar/getUrlTitle";
import JayTopBar from "../components/navBar/jayTopBar";
import { ALL_ECONOMY_IDX } from "@/apollo/gqlQuery/economy";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import LineChart from "@/components/eCharts/lineChart";
import CandleChart from "@/components/eCharts/candleChart";
import UpDownCntrlPanel from "@/components/common/upDownCntrlPanel";
import { useRecoilState, useRecoilValue } from "recoil";
import { economyState } from "recoil/atoms/economyAtom";
import { bakeEcodata } from "recoil/selectors/economySelector";

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);

  const [ecoData, setEcoData] = useRecoilState(economyState);
  const fineEcodata = useRecoilValue(bakeEcodata);

  const [isGoBtnClicked, setIsGoBtnClicked] = useState(false);
  const [isRefrBtnClicked, setIsRefrBtnClicked] = useState(false);

  useEffect(() => {
    console.log(error, "errorrrrrrrr");
    if (data) {
      setEcoData(data);
    }
  }, [data]);

  console.log(fineEcodata, "recoil 에서 나온 데이터 달러임당!!!");

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
            <h2 className="main-title">
              No more trading, but trainning your self.{" "}
            </h2>
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
                candleData={
                  fineEcodata?.firstHalfData?.dollar
                    ? fineEcodata?.firstHalfData?.dollar
                    : null
                }
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <CandleChart
                      title="-> Next 6 months Dollar Index"
                      maxYaxis={120}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      candleData={
                        fineEcodata?.lastHalfData?.dollar
                          ? fineEcodata?.lastHalfData?.dollar
                          : null
                      }
                    />
                  </div>
                  <div className="chart-curtain"></div>
                </>
              ) : (
                <UpDownCntrlPanel />
              )}
            </div>
            <div className="chart-layer">
              <LineChart />
              <LineChart />
            </div>
            <div className="chart-layer">
              <LineChart
                data={fineEcodata?.firstHalfData?.usInterestRate?.series}
              />
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
        .main-title {
          font-weight: normal;
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
