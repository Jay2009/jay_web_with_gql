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
import { economyState, riseOrFallState } from "recoil/atoms/economyAtom";
import { bakeEcodata } from "recoil/selectors/economySelector";
import EcoResultModal from "@/components/modal/ecoResultModal";

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);

  const [btnState, setBtnState] = useRecoilState(riseOrFallState);
  const [ecoData, setEcoData] = useRecoilState(economyState);
  const fineEcodata = useRecoilValue(bakeEcodata);

  const [isGoBtnClicked, setIsGoBtnClicked] = useState(false);
  const [isRefrBtnClicked, setIsRefrBtnClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(error, "errorrrrrrrr");
    if (data) {
      setEcoData(data);
    }
  }, [data]);
  console.log(btnState, "버튼 상태들@!@@@");

  //console.log(fineEcodata, "recoil 에서 나온 데이터 달러임당!!!");

  const handleOkBtn = () => {
    setIsRefrBtnClicked(false);
    setIsGoBtnClicked(true);
  };
  const handleRefrBtn = () => {
    setIsGoBtnClicked(false);
    setIsRefrBtnClicked(false);
    setBtnState({
      ...btnState,
      dollar: null,
      gold: null,
      nasdaq: null,
      usInterestRate: null,
      us10yTreasury: null,
      vix: null,
    });
    refetch();
  };

  console.log(btnState, "btn stateee@!@@@");

  return (
    <div className="nav-frame">
      <div className="top-nav">
        <JayTopBar />
      </div>
      <div className="main-body">
        <div className="right-main">
          <div className="control-area">
            <h2 className="main-title">
              No more trading, but trainning your self with real data.
            </h2>
            {btnState.dollar !== null &&
            btnState.gold !== null &&
            btnState.nasdaq !== null &&
            btnState.vix !== null && 
            btnState.us10yTreasury !== null &&
            btnState.usInterestRate !== null ? (
              <div className="btn-wrap">
                {isGoBtnClicked == false ? (
                  <button
                    className="btn"
                    onClick={handleOkBtn}
                    disabled={data ? false : true}
                  >
                    Next 6months &nbsp;
                    <Image
                      alt=""
                      src="/assets/bar-chart.png"
                      width={25}
                      height={25}
                    />
                  </button>
                ) : (
                  <>
                    <button className="btn" onClick={showModal}>
                      Result details &nbsp;
                      <Image
                        alt=""
                        src="/assets/search.png"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className="btn" onClick={handleRefrBtn}>
                      Try again &nbsp;
                      <Image
                        alt=""
                        src="/assets/refresh.png"
                        width={25}
                        height={25}
                      />
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div style={{ margin: "7px" }}>
                Please click all of &quot; Up or Down &quot; buttons below
              </div>
            )}
            <EcoResultModal
              isModalOpen={isModalOpen}
              handleCancel={handleCancel}
              fineEcoData={fineEcodata?
              fineEcodata
                : null}
            />
          </div>

          <div className="echarts-wrap">
            <div className="chart-layer">
              <CandleChart
                title="Dollar Index"
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
                      title=" Next 6 months"
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
                  <div className="chart-curtain right-chart"></div>
                </>
              ) : (
                <UpDownCntrlPanel title="Dollar" />
              )}

              <CandleChart
                title="Nasdaq Index"
                maxYaxis={17000}
                candleData={
                  fineEcodata?.firstHalfData?.nasdaq
                    ? fineEcodata?.firstHalfData?.nasdaq
                    : null
                }
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <CandleChart
                      title=" Next 6 months"
                      maxYaxis={17000}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      candleData={
                        fineEcodata?.lastHalfData?.nasdaq
                          ? fineEcodata?.lastHalfData?.nasdaq
                          : null
                      }
                    />
                  </div>
                  <div className="chart-curtain left-chart"></div>
                </>
              ) : (
                <UpDownCntrlPanel title="Nasdaq" />
              )}
            </div>
            <div className="chart-layer">
              <CandleChart
                title="Gold Index"
                maxYaxis={2100}
                candleData={
                  fineEcodata?.firstHalfData?.gold
                    ? fineEcodata?.firstHalfData?.gold
                    : null
                }
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <CandleChart
                      title=" Next 6 months"
                      maxYaxis={2100}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      candleData={
                        fineEcodata?.lastHalfData?.gold
                          ? fineEcodata?.lastHalfData?.gold
                          : null
                      }
                    />
                  </div>
                  <div className="chart-curtain right-chart"></div>
                </>
              ) : (
                <UpDownCntrlPanel title="Gold" />
              )}

              <CandleChart
                title="Vix Index"
                maxYaxis={90}
                candleData={
                  fineEcodata?.firstHalfData?.vix
                    ? fineEcodata?.firstHalfData?.vix
                    : null
                }
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <CandleChart
                      title=" Next 6 months"
                      maxYaxis={90}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      candleData={
                        fineEcodata?.lastHalfData?.vix
                          ? fineEcodata?.lastHalfData?.vix
                          : null
                      }
                    />
                  </div>
                  <div className="chart-curtain left-chart"></div>
                </>
              ) : (
                <UpDownCntrlPanel title="Vix" />
              )}
            </div>
            <div className="chart-layer">
              <CandleChart
                title="US 10y Treasury Index"
                maxYaxis={5}
                candleData={
                  fineEcodata?.firstHalfData?.us10yTreasury
                    ? fineEcodata?.firstHalfData?.us10yTreasury
                    : null
                }
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <CandleChart
                      title=" Next 6 months"
                      maxYaxis={5}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      candleData={
                        fineEcodata?.lastHalfData?.us10yTreasury
                          ? fineEcodata?.lastHalfData?.us10yTreasury
                          : null
                      }
                    />
                  </div>
                  <div className="chart-curtain right-chart"></div>
                </>
              ) : (
                <UpDownCntrlPanel title="US 10y Treasury" />
              )}


              <LineChart
                title="US Interest Rates Index"
                maxYaxis={5}
                data={
                  fineEcodata?.firstHalfData?.usInterestRate.series
                    ? fineEcodata?.firstHalfData?.usInterestRate.series
                    : null
                }
              />
              {isGoBtnClicked == true ? (
                <>
                  <div className="result-wrap">
                    <LineChart
                      title=" Next 6 months"
                      maxYaxis={5}
                      isGoBtnClicked={isGoBtnClicked}
                      isRefrBtnClicked={isRefrBtnClicked}
                      data={
                        fineEcodata?.lastHalfData?.usInterestRate.series
                          ? fineEcodata?.lastHalfData?.usInterestRate.series
                          : null
                      }
                    />
                  </div>
                  <div className="chart-curtain left-chart"></div>
                </>
              ) : (
                <UpDownCntrlPanel title="US Interest Rates" />
              )}
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
          gap: 5px;
          width: 100%;
          height: 100%;
        }
        .chart-layer {
          display: flex;
          width: 100%;
          height:100%;
          justify-content:center;
          align-items:center;
        }
        .main-title {
          font-weight: normal;
        }

        .btn-wrap {
          display: flex;
          gap: 30px;
        }
        .btn {
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          background-color: #3369aa;
          border-radius: 3px;
          width: 130px;
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
          background: #091a30;
          position: absolute;
          z-index: 10;
          width: 0px;
        }
        .left-chart {
          left: 440px;
          height: 250px;
          animation: moveToRight 2.5s linear;
        }
        .right-chart {
          right: -50px;
          height: 250px;
          animation: moveToRight 5s linear;
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
