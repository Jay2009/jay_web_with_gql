import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "antd";
import { IFineEcoData } from "@/types/iFineEcoData";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { riseOrFallState } from "recoil/atoms/economyAtom";

interface IResultModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}
interface IResultProps extends IResultModalProps {
  firstHalfData?: IFineEcoData | null;
  lastHalfData?: IFineEcoData | null;
}
interface IResultElement {
  [index: number]: number;
}

interface IEcoResult {
  initNasDate?: string;
  initNasPrice?: number;
  lastNasDate?: string;
  lastNasPrice?: number;
  nasRateOfReturn?: number;

  initDollarDate?: string;
  initDollarPrice?: number;
  lastDollarDate?: string;
  lastDollarPrice?: number;
  dollarRateOfReturn?: number;

  initGoldDate?: string;
  initGoldPrice?: number;
  lastGoldDate?: string;
  lastGoldPrice?: number;
  goldRateOfReturn?: number;

  initVixDate?: string;
  initVixPrice?: number;
  lastVixDate?: string;
  lastVixPrice?: number;
  vixRateOfReturn?: number;
}

const EcoResultModal: React.FC<IResultProps> = ({
  isModalOpen,
  handleCancel,
  firstHalfData,
  lastHalfData,
}) => {
  const [btnState, setBtnState] = useRecoilState(riseOrFallState);
  const [nasInitData, setNasInitData] = useState<IEcoResult | null>(null);
  const [nasLastData, setNasLastData] = useState<IEcoResult | null>(null);

  const [goldInitData, setGoldInitData] = useState<IEcoResult | null>(null);
  const [goldLastData, setGoldLastData] = useState<IEcoResult | null>(null);

  const [dollarInitData, setDollarInitData] = useState<IEcoResult | null>(null);
  const [dollarLastData, setDollarLastData] = useState<IEcoResult | null>(null);

  const [vixInitData, setVixInitData] = useState<IEcoResult | null>(null);
  const [vixLastData, setVixLastData] = useState<IEcoResult | null>(null);

  useEffect(() => {
    console.log(btnState, "????");

    if (
      firstHalfData !== undefined &&
      firstHalfData !== null &&
      lastHalfData !== undefined &&
      lastHalfData !== null
    ) {
      const firstHalfNasData: IResultElement | any =
        firstHalfData.nasdaq.candleData[
          firstHalfData.nasdaq.candleData.length - 1
        ];
      let initNasDate =
        firstHalfData.nasdaq.localDate[
          firstHalfData.nasdaq.localDate.length - 1
        ];
      let initNasPrice = Math.floor(
        (firstHalfNasData[0] +
          firstHalfNasData[1] +
          firstHalfNasData[2] +
          firstHalfNasData[3]) /
          4
      );
      setNasInitData({
        ...nasInitData,
        initNasDate: initNasDate,
        initNasPrice: initNasPrice,
      });

      const lastHalfNasData: IResultElement | any =
        lastHalfData.nasdaq.candleData[
          lastHalfData.nasdaq.candleData.length - 1
        ];
      let lastNasDate =
        lastHalfData.nasdaq.localDate[lastHalfData.nasdaq.localDate.length - 1];
      let lastNasPrice = Math.floor(
        (lastHalfNasData[0] +
          lastHalfNasData[1] +
          lastHalfNasData[2] +
          lastHalfNasData[3]) /
          4
      );
      let nasRateOfReturn =
        ((lastNasPrice - initNasPrice) / initNasPrice) * 100;
      setNasLastData({
        ...nasLastData,
        lastNasDate: lastNasDate,
        lastNasPrice: lastNasPrice,
        nasRateOfReturn: Math.floor(nasRateOfReturn),
      });

      const firstHalfDollarData: IResultElement | any =
        firstHalfData.dollar.candleData[
          firstHalfData.dollar.candleData.length - 1
        ];
      let initDollarDate =
        firstHalfData.dollar.localDate[
          firstHalfData.dollar.localDate.length - 1
        ];
      let initDollarPrice = Math.floor(
        (firstHalfDollarData[0] +
          firstHalfDollarData[1] +
          firstHalfDollarData[2] +
          firstHalfDollarData[3]) /
          4
      );
      setDollarInitData({
        ...dollarInitData,
        initDollarDate: initDollarDate,
        initDollarPrice: initDollarPrice,
      });

      const lastHalfDollarData: IResultElement | any =
        lastHalfData.dollar.candleData[
          lastHalfData.dollar.candleData.length - 1
        ];
      let lastDollarDate =
        lastHalfData.dollar.localDate[lastHalfData.dollar.localDate.length - 1];
      let lastDollarPrice = Math.floor(
        (lastHalfDollarData[0] +
          lastHalfDollarData[1] +
          lastHalfDollarData[2] +
          lastHalfDollarData[3]) /
          4
      );
      let dollarRateOfReturn =
        ((lastDollarPrice - initDollarPrice) / initDollarPrice) * 100;
      setDollarLastData({
        ...dollarLastData,
        lastDollarDate: lastDollarDate,
        lastDollarPrice: lastDollarPrice,
        dollarRateOfReturn: Math.floor(dollarRateOfReturn),
      });

      const firstHalfGoldData: IResultElement | any =
        firstHalfData.gold.candleData[firstHalfData.gold.candleData.length - 1];
      let initGoldDate =
        firstHalfData.gold.localDate[firstHalfData.gold.localDate.length - 1];
      let initGoldPrice = Math.floor(
        (firstHalfGoldData[0] +
          firstHalfGoldData[1] +
          firstHalfGoldData[2] +
          firstHalfGoldData[3]) /
          4
      );
      setGoldInitData({
        ...goldInitData,
        initGoldDate: initGoldDate,
        initGoldPrice: initGoldPrice,
      });

      const lastHalfGoldData: IResultElement | any =
        lastHalfData.gold.candleData[lastHalfData.gold.candleData.length - 1];
      let lastGoldDate =
        lastHalfData.gold.localDate[lastHalfData.gold.localDate.length - 1];
      let lastGoldPrice = Math.floor(
        (lastHalfGoldData[0] +
          lastHalfGoldData[1] +
          lastHalfGoldData[2] +
          lastHalfGoldData[3]) /
          4
      );
      let goldRateOfReturn =
        ((lastGoldPrice - initGoldPrice) / initGoldPrice) * 100;
      setGoldLastData({
        ...goldLastData,
        lastGoldDate: lastGoldDate,
        lastGoldPrice: lastGoldPrice,
        goldRateOfReturn: Math.floor(goldRateOfReturn),
      });

      const firstHalfVixData: IResultElement | any =
        firstHalfData.vix.candleData[firstHalfData.vix.candleData.length - 1];
      let initVixDate =
        firstHalfData.vix.localDate[firstHalfData.vix.localDate.length - 1];
      let initVixPrice = Math.floor(
        (firstHalfVixData[0] +
          firstHalfVixData[1] +
          firstHalfVixData[2] +
          firstHalfVixData[3]) /
          4
      );
      setVixInitData({
        ...vixInitData,
        initVixDate: initVixDate,
        initVixPrice: initVixPrice,
      });

      const lastHalfVixData: IResultElement | any =
        lastHalfData.vix.candleData[lastHalfData.vix.candleData.length - 1];
      let lastVixDate =
        lastHalfData.vix.localDate[lastHalfData.vix.localDate.length - 1];
      let lastVixPrice = Math.floor(
        (lastHalfVixData[0] +
          lastHalfVixData[1] +
          lastHalfVixData[2] +
          lastHalfVixData[3]) /
          4
      );
      let vixRateOfReturn =
        ((lastVixPrice - initVixPrice) / initVixPrice) * 100;
      setVixLastData({
        ...vixLastData,
        lastVixDate: lastVixDate,
        lastVixPrice: lastVixPrice,
        vixRateOfReturn: Math.floor(vixRateOfReturn),
      });
    }
  }, [firstHalfData, lastHalfData]);

  return (
    <div>
      <Modal
        centered={true}
        open={isModalOpen}
        onCancel={handleCancel}
        width={850}
        footer
      >
        <span className="main-title">Result Details</span>
        <div className="body-wrap">
          <div className="content-wrap">
            <div className="row-elements">
              <div className="element"></div>
              <div className="element column-title">
                {nasInitData?.initNasDate}
              </div>
              <div className="element column-title">
                {nasLastData?.lastNasDate}
              </div>
              <div className="element column-title">Rate of Return</div>
              <div className="element column-title">Your choice</div>
            </div>

            <div className="row-elements">
              <Image alt="" src="/assets/dollar.png" width={32} height={32} />
              <div className="element">{dollarInitData?.initDollarPrice}</div>
              <div className="element">{dollarLastData?.lastDollarPrice}</div>
              <div className="element">
                {dollarLastData?.dollarRateOfReturn}%
              </div>
              {dollarLastData?.dollarRateOfReturn ? (
                dollarLastData.dollarRateOfReturn > 0 &&
                btnState.dollar == true ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : dollarLastData.dollarRateOfReturn < 0 &&
                  btnState.dollar == false ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    alt=""
                    src="/assets/incorrect.png"
                    width={32}
                    height={32}
                  />
                )
              ) : (
                <Image alt="" src="/assets/equal.png" width={32} height={32} />
              )}
            </div>

            <div className="row-elements">
              <Image alt="" src="/assets/gold.png" width={32} height={32} />
              <div className="element">{goldInitData?.initGoldPrice}</div>
              <div className="element">{goldLastData?.lastGoldPrice}</div>
              <div className="element">{goldLastData?.goldRateOfReturn}%</div>
              {goldLastData?.goldRateOfReturn ? (
                goldLastData.goldRateOfReturn > 0 && btnState.gold == true ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : goldLastData.goldRateOfReturn < 0 &&
                  btnState.gold == false ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    alt=""
                    src="/assets/incorrect.png"
                    width={32}
                    height={32}
                  />
                )
              ) : (
                <Image alt="" src="/assets/equal.png" width={32} height={32} />
              )}
            </div>

            <div className="row-elements">
              <Image alt="" src="/assets/fear.png" width={32} height={32} />
              <div className="element">{vixInitData?.initVixPrice}</div>
              <div className="element">{vixLastData?.lastVixPrice}</div>
              <div className="element">{vixLastData?.vixRateOfReturn}%</div>
              {vixLastData?.vixRateOfReturn ? (
                vixLastData.vixRateOfReturn > 0 && btnState.vix == true ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : vixLastData.vixRateOfReturn < 0 && btnState.vix == false ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    alt=""
                    src="/assets/incorrect.png"
                    width={32}
                    height={32}
                  />
                )
              ) : (
                <Image alt="" src="/assets/equal.png" width={32} height={32} />
              )}
            </div>

            <div className="row-elements">
              <Image alt="" src="/assets/nasdaq.png" width={32} height={32} />
              <div className="element">{nasInitData?.initNasPrice}</div>
              <div className="element">{nasLastData?.lastNasPrice}</div>
              <div className="element">{nasLastData?.nasRateOfReturn}%</div>
              {nasLastData?.nasRateOfReturn ? (
                nasLastData.nasRateOfReturn > 0 && btnState.nasdaq == true ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : nasLastData.nasRateOfReturn < 0 &&
                  btnState.nasdaq == false ? (
                  <Image
                    alt=""
                    src="/assets/correct.png"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    alt=""
                    src="/assets/incorrect.png"
                    width={32}
                    height={32}
                  />
                )
              ) : (
                <Image alt="" src="/assets/equal.png" width={32} height={32} />
              )}
            </div>
          </div>
          <button onClick={handleCancel} className="ok-btn">
            OK
          </button>
        </div>
      </Modal>
      <style jsx>{`
        .main-title {
          display: flex;
          font-weight: bold;
          font-size: 20px;
          justify-content: center;
          align-items: center;
          color: #3369aa;
        }
        .body-wrap {
          margin-top: 40px;
          margin-bottom: 40px;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
        .content-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .row-elements {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }
        .element {
          width: 150px;
          color: gray;
        }

        .column-title {
          font-size: 15px;
          color: white;
        }
        .ok-btn {
          margin-top: 20px;
          margin-bottom: -30px;
          width: 80px;
          border: none;
          height: 30px;
          border-radius: 3px;
          color: white;
          background: #3369aa;
          opacity: 0.8;
        }
        .ok-btn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .ok-btn:active {
          border: 1px solid #2372db;
        }
      `}</style>
    </div>
  );
};

export default EcoResultModal;
