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
import { ICurrentUserData } from "@/types/iApollo";
import { GET_CURRENT_USER } from "@/apollo/cache";
import { Router, useRouter } from "next/router";

export default function Home() {
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
    if (data) {
      setEcoData(data);
    }
  }, [data]);

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
                &quot;Real economy data&quot;
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
                    Next &nbsp;
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
                      Result &nbsp;
                      <Image
                        alt=""
                        src="/assets/search.png"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className="btn refresh" onClick={handleRefrBtn}>
                      Refresh &nbsp;
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
                  </>
                ) : (
                  <div className="result-wrap">
                    <UpDownCntrlPanel title="Dollar" />
                  </div>
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
                  </>
                ) : (
                  <div className="result-wrap">
                    <UpDownCntrlPanel title="Gold" />
                  </div>
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
                  </>
                ) : (
                  <div className="result-wrap">
                    <UpDownCntrlPanel title="Vix" />
                  </div>
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
                  </>
                ) : (
                  <div className="result-wrap">
                    <UpDownCntrlPanel title="Nasdaq" />
                  </div>
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
                  </>
                ) : (
                  <div className="result-wrap">
                    <FedDataDscript title="U.S Unemployment rate" />
                  </div>
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
                  </>
                ) : (
                  <div className="result-wrap">
                    <FedDataDscript title="U.S Interest Rate" />
                  </div>
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
          width: 98%;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }
        .chart-wrap {
          display: flex;
          width:50%;
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
          border-radius: 10px;
          width: 95px;
          height: 35px;
          opacity: 0.8;
          transition: 0.4s;
          border: none;
          font-size: 13px;
          box-shadow: 4px 4px 12px #4f5054;
          outline: none;
        }
        .refresh{
          background-color: #4f4e4e;
        }
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .result-wrap {
          width:48%;
          height:1
          position: relative;
          z-index: 0;
          animation: fadeIn 3s linear;
        }
        @keyframes fadeIn {
          0% {
            opacity:0;
            
          }
          to {
            opacity:1;
          }
        }
      `}</style>
    </div>
  );
}
