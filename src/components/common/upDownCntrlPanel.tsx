import React from "react";

function UpDownCntrlPanel() {
  return (
    <div>
      <div className="result-control">
        <div>Now, you guess</div>
        <div>Price of the asset 6 months later</div>
        <div className="control-wrap">
          <div className="btn">UP</div>
          <div>or</div>
          <button className="btn">DOWN</button>
        </div>
      </div>

      <style jsx>{`
        .result-control {
          width: 450px;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .control-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          gap: 7px;
        }
        .btn {
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
      `}</style>
    </div>
  );
}

export default UpDownCntrlPanel;
