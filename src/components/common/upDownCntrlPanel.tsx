import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { riseOrFallState } from "recoil/atoms/economyAtom";

interface IProps {
  title: string;
}
export interface IRiseOrFallBtn {
  dollar?: boolean | null;
  gold?: boolean | null;
  nasdaq?: boolean | null;
  usInterestRate?: boolean | null;
  us10yTreasury?: boolean | null;
  vix?: boolean | null;
}

const UpDownCntrlPanel: React.FC<IProps> = ({ title }) => {
  const [btnState, setBtnState] = useRecoilState(riseOrFallState);

  const [isRiseBtnClicked, setIsRiseBtnClicked] = useState(false);
  const [isFallBtnClicked, setIsFallBtnClicked] = useState(false);

  //console.log( "btnState");
  const handleRiseBtn = () => {
    setIsRiseBtnClicked(true);
    setIsFallBtnClicked(false);
    switch (title) {
      case "Dollar":
        return setBtnState({ ...btnState, dollar: true });
      case "Gold":
        return setBtnState({ ...btnState, gold: true });
      case "Nasdaq":
        return setBtnState({ ...btnState, nasdaq: true });
      case "US Interest Rates":
        return setBtnState({ ...btnState, usInterestRate: true });
      case "US 10y Treasury":
        return setBtnState({ ...btnState, us10yTreasury: true });
      case "Vix":
        return setBtnState({ ...btnState, vix: true });
      default:
        return "";
    }
  };
  const handleFallBtn = () => {
    setIsRiseBtnClicked(false);
    setIsFallBtnClicked(true);
    switch (title) {
      case "Dollar":
        return setBtnState({ ...btnState, dollar: false });
      case "Gold":
        return setBtnState({ ...btnState, gold: false });
      case "Nasdaq":
        return setBtnState({ ...btnState, nasdaq: false });
      case "US Interest Rates":
        return setBtnState({ ...btnState, usInterestRate: false });
      case "US 10y Treasury":
        return setBtnState({ ...btnState, us10yTreasury: false });
      case "Vix":
        return setBtnState({ ...btnState, vix: false });
      default:
        return "";
    }
  };
  const handleRefreshBtn = () => {
    setBtnState({
      ...btnState,
      dollar: null,
      gold: null,
      nasdaq: null,
      usInterestRate: null,
      us10yTreasury: null,
      vix: null,
    });
    setIsRiseBtnClicked(false);
    setIsFallBtnClicked(false);
  };

  return (
    <div>
      <div className="result-control">
        {isRiseBtnClicked == false && isFallBtnClicked == false ? (
          <>
            <div style={{ position: "absolute" }}>
              <div className="control-wrap">
                <div>6 months later,</div>
                {title}
                <div className="btn" onClick={handleRiseBtn}>
                  <Image alt="" src="/assets/up.png" width={35} height={40} />
                </div>
                <div>or</div>
                <button className="btn" onClick={handleFallBtn}>
                  <Image alt="" src="/assets/down.png" width={35} height={40} />
                </button>
              </div>
            </div>
            <div className="question-mark">
              <Image
                alt=""
                src="/assets/question-mark.png"
                width={200}
                height={200}
              />
            </div>
          </>
        ) : isRiseBtnClicked == true && isFallBtnClicked == false ? (
          <div className="up">
            {title}
            <Image alt="" src="/assets/up.png" width={35} height={40} />
          </div>
        ) : isRiseBtnClicked == false && isFallBtnClicked == true ? (
          <div className="down">
            {title}
            <Image alt="" src="/assets/down.png" width={35} height={40} />
          </div>
        ) : (
          ""
        )}
      </div>

      <style jsx>{`
        .result-control {
          width: 435px;
          height: 200px;
          margin-top: 20px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 2px dashed #2b3642;
        }
        .control-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
          gap: 7px;
        }
        .up-down-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .btn {
          background: none;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.5;
          transition: 0.4s;
          border: none;
          outline: none;
        }
        .question-mark {
          position: relative;
          opacity: 0.2;
        }
        .btn:hover {
          cursor: pointer;
          opacity: 1;
        }
        .up {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: up-down 1s ease-in-out;
        }
        @keyframes up-down {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-20px);
          }
          100% {
            transform: translatey(0px);
          }
        }

        .down {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: down-up 1s ease-in-out;
        }
        @keyframes down-up {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(20px);
          }
          100% {
            transform: translatey(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default UpDownCntrlPanel;
