import PortfolioContext from "context/context";
import Image from "next/image";
import React, { useContext, useState } from "react";

interface IProps {
  title: string;
}

const FedDataDscript: React.FC<IProps> = ({ title }) => {
  const { prefix } = useContext(PortfolioContext);

  return (
    <div>
      <div className="result-control">
        <div style={{ position: "absolute" }}>
          <div className="control-wrap">
            <div>6 months later,</div>
          </div>
          <div className="data-info">
            <div className="element">
              <div>{title}</div>
              <div className="info-icon">
                <Image
                  alt="info"
                  loader={({ src }) => `${prefix}${src}`}
                  src="/assets/info.png"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {title == "U.S Interest Rate" ? (
              <div className="extra-txt">(Federal Funds Effective Rate)</div>
            ) : (
              ""
            )}
            {title == "U.S Unemployment rate" ? (
              <span>
                Usually, when the unemployment rate in the U.S is going lower ,
                The &#34;Natural economy&#34; in the U.S is going fine.
              </span>
            ) : (
              <span>
                Usually, when the interest rate in the U.S is going higher, the
                value of currency(US dollar) would start going up to fight
                inflation.
              </span>
            )}
          </div>
        </div>

        <div className="question-mark">
          <Image
            alt="question"
            loader={({ src }) => `${prefix}${src}`}
            src="/assets/info.png"
            width={200}
            height={200}
          />
        </div>
      </div>

      <style jsx>{`
        .result-control {
          display: flex;
          width: 100%;
          height: 200px;
          margin-top: 30px;
          margin-left: 5px;
          padding-right: 11px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 2px dashed #2b3642;
        }
        .control-wrap {
          display: flex;
          color: gray;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
          gap: 7px;
        }
        .question-mark {
          position: absolute;
          opacity: 0.2;
        }

        .data-info {
          position: relative;
          gap: 5px;
          margin-top: 10px;
        }
        .data-info span {
          position: absolute;
          background-color: #2b2f33;
          font-size: 14px;
          color: #838384;
          width: 300px;
          height: 60px;
          top: -85px;
          text-align: center;
          padding: 10px;
          border-radius: 10px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: 0.5s;
          visibility: hidden;
        }
        .data-info span:after {
          content: "";
          position: absolute;
          background-color: #2b2f33;
          width: 10px;
          height: 10px;
          transform: rotate(45deg) translateX(-50%);
          bottom: -9px;
          left: 50%;
        }
        .data-info:hover span {
          opacity: 1;
          visibility: visible;
          z-index: 10;
        }

        .element {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
          color: gray;
        }
        .extra-txt {
          color: gray;
          font-size: 13px;
        }
        .info-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
        }
        .data-info:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FedDataDscript;
