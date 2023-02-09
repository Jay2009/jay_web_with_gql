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
import FedDataDscript from "@/components/common/fedDataDscript";
import { Modal } from "antd";

export default function Home() {
  const getUrl = GetUrlTitle();
  const { data, loading, error, refetch } = useQuery(ALL_ECONOMY_IDX);

  const [btnState, setBtnState] = useRecoilState(riseOrFallState);
  const [ecoData, setEcoData] = useRecoilState(economyState);
  const fineEcodata = useRecoilValue(bakeEcodata);

  const [isGoBtnClicked, setIsGoBtnClicked] = useState(false);
  const [isRefrBtnClicked, setIsRefrBtnClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isIntroConfirmed, setIsIntroConfirmed] = useState(false);

  const handleIntroConfirm = () => {
    setIsIntroConfirmed(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(error, "errorrrrrrrr");
    setIsIntroConfirmed(true);
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
            <div>
              <span className="main-title">
                No more trading, but trainning your self with &nbsp;
              </span>
              <span className="main-title emphasis-word">
                &quot;Real economy data&quot;.
              </span>
            </div>
            {btnState.dollar !== null &&
            btnState.gold !== null &&
            btnState.nasdaq !== null &&
            btnState.vix !== null ? (
              <div className="btn-wrap">
                {isGoBtnClicked == false ? (
                  <button
                    className="btn"
                    onClick={handleOkBtn}
                    disabled={data ? false : true}
                  >
                    See result &nbsp;
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
              <div className="guide-text">
                Click all the &nbsp;
                <Image alt="" src="/assets/up.png" width={15} height={20} />
                &nbsp;or&nbsp;
                <Image alt="" src="/assets/down.png" width={15} height={20} />
                &nbsp; buttons to see your result
              </div>
            )}
            <EcoResultModal
              isModalOpen={isModalOpen}
              handleCancel={handleCancel}
              firstHalfData={
                fineEcodata?.firstHalfData ? fineEcodata.firstHalfData : null
              }
              lastHalfData={
                fineEcodata?.lastHalfData ? fineEcodata.lastHalfData : null
              }
            />
          </div>

          <div className="echarts-wrap">
            <div className="chart-layer">
              <div className="chart-wrap">
                <CandleChart
                  title="U.S Dollar index"
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
                    <div className="chart-curtain left-chart"></div>
                  </>
                ) : (
                  <UpDownCntrlPanel title="Dollar" />
                )}
              </div>
              <div className="chart-wrap">
                <CandleChart
                  title="Gold"
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
              </div>
            </div>
            <div className="chart-layer">
              <div className="chart-wrap">
                <CandleChart
                  title="Vix"
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
              <div className="chart-wrap">
                <CandleChart
                  title="Nasdaq"
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
                    <div className="chart-curtain right-chart"></div>
                  </>
                ) : (
                  <UpDownCntrlPanel title="Nasdaq" />
                )}
              </div>
            </div>
            <div className="chart-layer">
              <div className="chart-wrap">
                <LineChart
                  title="U.S Unemployment Rate"
                  maxYaxis={15}
                  data={
                    fineEcodata?.firstHalfData?.usUnemploymentRate.series
                      ? fineEcodata?.firstHalfData?.usUnemploymentRate.series
                      : null
                  }
                />
                {isGoBtnClicked == true ? (
                  <>
                    <div className="result-wrap">
                      <LineChart
                        title=" Next 6 months"
                        maxYaxis={15}
                        isGoBtnClicked={isGoBtnClicked}
                        isRefrBtnClicked={isRefrBtnClicked}
                        data={
                          fineEcodata?.lastHalfData?.usUnemploymentRate.series
                            ? fineEcodata?.lastHalfData?.usUnemploymentRate
                                .series
                            : null
                        }
                      />
                    </div>
                    <div className="chart-curtain right-chart"></div>
                  </>
                ) : (
                  <FedDataDscript title="U.S Unemployment rate" />
                )}
              </div>
              <div className="chart-wrap">
                <LineChart
                  title="U.S Interest Rate"
                  id="usInterestRate"
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
                        id="usInterestRate"
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
                  <FedDataDscript title="U.S Interest Rate" />
                )}
              </div>
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
        }
        .guide-text {
          margin: 7px;
          font-size: 18px;
          color: #757575;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .control-area {
          display: flex;
          width: 100%;
          height: 10%;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .echarts-wrap {
          display: flex;
          width: 100%;
          height: 90%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .chart-layer {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }
        .chart-wrap {
          display: flex;
        }
        .main-title {
          font-weight: 400;
          color: #abacad;
          font-size: 20px;
          animation: fadein 3s ease-in-out;
        }
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .emphasis-word {
          font-weight: 400;
          font-style: italic;
          font-size: 20px;
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
          z-index: 0;
        }

        .chart-curtain {
          background: #091a30;
          position: absolute;
          width: 0px;
        }
        .left-chart {
          left: 470px;
          height: 250px;
          animation: moveToRight 2.5s linear;
          z-index: 10;
        }
        .right-chart {
          right: 460px;

          height: 250px;
          animation: moveToRight2 2.5s linear;
        }
        @keyframes moveToRight2 {
          0% {
            transform: translate(460px, 0);
            width: 460px;
          }
          to {
            transform: translate(460px, 0);
            width: 0px;
          }
        }

        @keyframes moveToRight {
          0% {
            transform: translate(0, 0);
            width: 470px;
          }
          to {
            transform: translate(470px, 0);
            width: 0px;
          }
        }
      `}</style>
    </div>
  );
}
