import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "antd";
import {IFineEcoData} from "@/types/iFineEcoData"

interface IResultModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}
interface IResultProps extends IResultModalProps {
  fineEcoData? : IFineEcoData | null
}

let firstNasdaq : number[] | undefined  = [] ;
let lastNasdaq : number[] | undefined = [] ;

const EcoResultModal: React.FC<IResultProps> = ({
  isModalOpen,
  handleCancel,
  fineEcoData,
}) => {


useEffect(() => {
  if(fineEcoData !== undefined && null){
  console.log(fineEcoData,"@@@@@@@$$$$$$$$");
  let firstNasdaqCandl = fineEcoData.firstHalfData.nasdaq.candleData
  let newestNasdaqPrice : any = firstNasdaqCandl?.[firstNasdaqCandl.length -1] ;
  let firstNasdAvg : number = (newestNasdaqPrice[0] + newestNasdaqPrice[1] + newestNasdaqPrice[2]) / 3;
  console.log(firstNasdAvg, "ㅎㅎㅎㅎㅎㅎㅎㅎㅎ");
  
  //let firstNasdAvg : number = (newestNasdaqPrice[0] + newestNasdaqPrice[1] + newestNasdaqPrice[2]) /3

  // let lastNasdaqCandl = fineEcoData?.lastHalfData?.nasdaq.candleData
  // let newestNasdaqPrice : any = firstNasdaqCandl?.[firstNasdaqCandl.length -1] ;
  // let firstNasdAvg = (newestNasdaqPrice[0] + newestNasdaqPrice[1] + newestNasdaqPrice[2]) /3
  

    lastNasdaq = fineEcoData?.lastHalfData?.nasdaq.candleData
    
    
    //console.log(firstNasdaq,"마지막 인덱스 데이터");
}

})

  return (
    <div>
      <Modal
        title="Result Details"
        centered={true}
        open={isModalOpen}
        onCancel={handleCancel}
        width={850}
        footer
      >
        
          <div className="body-wrap">
            <div className="content-wrap">
              {firstNasdaq ? firstNasdaq[0] : ""}
            </div>
            <button onClick={handleCancel}className="ok-btn">
              OK
            </button>
          </div>
        
      </Modal>
      <style jsx>{`
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
        .ok-btn {
          margin-top: 20px;
          margin-bottom: -30px;
          width: 80px;
          border: none;
          height: 30px;
          border-radius: 8px;
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
