import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "antd";
import {IFineEcoData} from "@/types/iFineEcoData"
import Image from "next/image";
import { useRecoilState } from "recoil";
import { riseOrFallState } from "recoil/atoms/economyAtom";

interface IResultModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}
interface IResultProps extends IResultModalProps {
  firstHalfData? : IFineEcoData | null
  lastHalfData? : IFineEcoData | null
}
interface Itest {
  [index: number]: number ;
}

interface IEcoResult {
  initNasDate? : string;
  initNasPrice? : number;
  lastNasDate? : string;
  lastNasPrice? : number;
  nasRateOfReturn?: number;

  initDollarDate? : string;
  initDollarPrice? : number;
  lastDollarDate? : string;
  lastDollarPrice? : number;
  dollarRateOfReturn?: number;

  initGoldDate? : string;
  initGoldPrice? : number;
  lastGoldDate? : string;
  lastGoldPrice? : number;
  goldRateOfReturn?: number;
  
}

const EcoResultModal: React.FC<IResultProps> = ({
  isModalOpen,
  handleCancel,
  firstHalfData,
  lastHalfData,
}) => {

  const [btnState, setBtnState] = useRecoilState(riseOrFallState);
  const [nasInitData, setNasInitData] = useState<IEcoResult | null>(null) ;
  const [nasLastData, setNasLastData] = useState<IEcoResult | null>(null) ;

  const [goldInitData, setGoldInitData] = useState<IEcoResult | null>(null) ;
  const [goldLastData, setGoldLastData] = useState<IEcoResult | null>(null) ;

  const [dollarInitData, setDollarInitData] = useState<IEcoResult | null>(null) ;
  const [dollarLastData, setDollarLastData] = useState<IEcoResult | null>(null) ;

useEffect(() => {

  console.log(btnState,"????");
  
  if(firstHalfData !== undefined && firstHalfData !== null && lastHalfData !== undefined && lastHalfData !== null){

  const firstHalfNasData :Itest | any  = firstHalfData.nasdaq.candleData[firstHalfData.nasdaq.candleData.length  -1  ]  
  let initNasDate = firstHalfData.nasdaq.localDate[firstHalfData.nasdaq.localDate.length -1]
  let initNasPrice  = Math.floor(firstHalfNasData[0] + firstHalfNasData[1] + firstHalfNasData[2] + firstHalfNasData[3] / 4)
  setNasInitData({...nasInitData, initNasDate : initNasDate , initNasPrice: initNasPrice})

  const lastHalfNasData :Itest | any  = lastHalfData.nasdaq.candleData[lastHalfData.nasdaq.candleData.length  -1  ]  
  let lastNasDate = lastHalfData.nasdaq.localDate[lastHalfData.nasdaq.localDate.length -1]
  let lastNasPrice  =  Math.floor(lastHalfNasData[0] + lastHalfNasData[1] + lastHalfNasData[2] + lastHalfNasData[3] / 4)
  let nasRateOfReturn = ((lastNasPrice - initNasPrice) / initNasPrice) * 100
  setNasLastData({...nasLastData, lastNasDate : lastNasDate , lastNasPrice: lastNasPrice, nasRateOfReturn: Math.floor(nasRateOfReturn)})

  const firstHalfDollarData :Itest | any  = firstHalfData.dollar.candleData[firstHalfData.dollar.candleData.length  -1  ]  
  let initDollarDate = firstHalfData.dollar.localDate[firstHalfData.dollar.localDate.length -1]
  let initDollarPrice  = Math.floor(firstHalfDollarData[0] + firstHalfDollarData[1] + firstHalfDollarData[2] + firstHalfDollarData[3] / 4)
  setDollarInitData({...dollarInitData, initDollarDate : initDollarDate , initDollarPrice: initDollarPrice})

  const lastHalfDollarData :Itest | any  = lastHalfData.dollar.candleData[lastHalfData.dollar.candleData.length  -1  ]  
  let lastDollarDate = lastHalfData.dollar.localDate[lastHalfData.dollar.localDate.length -1]
  let lastDollarPrice  =  Math.floor(lastHalfDollarData[0] + lastHalfDollarData[1] + lastHalfDollarData[2] + lastHalfDollarData[3] / 4)
  let dollarRateOfReturn = ((lastDollarPrice - initDollarPrice) / initDollarPrice) * 100
  setDollarLastData({...dollarLastData, lastDollarDate : lastDollarDate , lastDollarPrice: lastDollarPrice, dollarRateOfReturn: Math.floor(dollarRateOfReturn)})


  const firstHalfGoldData :Itest | any  = firstHalfData.gold.candleData[firstHalfData.gold.candleData.length  -1  ]  
  let initGoldDate = firstHalfData.gold.localDate[firstHalfData.gold.localDate.length -1]
  let initGoldPrice  = Math.floor(firstHalfGoldData[0] + firstHalfGoldData[1] + firstHalfGoldData[2] + firstHalfGoldData[3] / 4)
  setGoldInitData({...goldInitData, initGoldDate : initGoldDate , initGoldPrice: initGoldPrice})

  const lastHalfGoldData :Itest | any  = lastHalfData.gold.candleData[lastHalfData.gold.candleData.length  -1  ]  
  let lastGoldDate = lastHalfData.gold.localDate[lastHalfData.gold.localDate.length -1]
  let lastGoldPrice  =  Math.floor(lastHalfGoldData[0] + lastHalfGoldData[1] + lastHalfGoldData[2] + lastHalfGoldData[3] / 4)
  let goldRateOfReturn = ((lastGoldPrice - initGoldPrice) / initGoldPrice) * 100
  setGoldLastData({...goldLastData, lastGoldDate : lastGoldDate , lastGoldPrice: lastGoldPrice, goldRateOfReturn: Math.floor(goldRateOfReturn)})
}

},[firstHalfData,lastHalfData])

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
              <div className="row-elements">
                <Image alt="" src="/assets/nasdaq.png" width={32} height={32}/>
                <div className="element">{nasInitData?.initNasDate} : ${nasInitData?.initNasPrice}</div>
                <div className="element">{nasLastData?.lastNasDate} : ${nasLastData?.lastNasPrice} </div>
                <div className="element">Rate of Return : {nasLastData?.nasRateOfReturn}%</div>
                {nasLastData?.nasRateOfReturn ? 
                 nasLastData.nasRateOfReturn > 0 && btnState.nasdaq == true ? 
                 <Image alt="" src="/assets/correct.png" width={32} height={32}/> : nasLastData.nasRateOfReturn < 0 && btnState.nasdaq == false ? 
                 <Image alt="" src="/assets/correct.png" width={32} height={32}/> : <Image alt="" src="/assets/incorrect.png" width={32} height={32}/>
                 : <Image alt="" src="/assets/equal.png" width={32} height={32}/>
              }
                
              </div>
              <div className="row-elements">
                <Image alt="" src="/assets/dollar.png" width={32} height={32}/>
                <div className="element">{dollarInitData?.initDollarDate} : ${dollarInitData?.initDollarPrice}</div>
                <div className="element">{dollarLastData?.lastDollarDate} : ${dollarLastData?.lastDollarPrice} </div>
                <div className="element">Rate of Return : {dollarLastData?.dollarRateOfReturn}%</div>
                {dollarLastData?.dollarRateOfReturn ? 
                 dollarLastData.dollarRateOfReturn > 0 && btnState.dollar == true ? 
                 <Image alt="" src="/assets/correct.png" width={32} height={32}/> : dollarLastData.dollarRateOfReturn < 0 && btnState.dollar == false ? 
                 <Image alt="" src="/assets/correct.png" width={32} height={32}/> : <Image alt="" src="/assets/incorrect.png" width={32} height={32}/>
                 : <Image alt="" src="/assets/equal.png" width={32} height={32}/>
              }
              </div>

              <div className="row-elements">
                <Image alt="" src="/assets/gold.png" width={32} height={32}/>
                <div className="element">{goldInitData?.initGoldDate} : ${goldInitData?.initGoldPrice}</div>
                <div className="element">{goldLastData?.lastGoldDate} : ${goldLastData?.lastGoldPrice} </div>
                <div className="element">Rate of Return : {goldLastData?.goldRateOfReturn}%</div>
                {goldLastData?.goldRateOfReturn ? 
                 goldLastData.goldRateOfReturn > 0 && btnState.gold == true ? 
                 <Image alt="" src="/assets/correct.png" width={32} height={32}/> : goldLastData.goldRateOfReturn < 0 && btnState.dollar == false ? 
                 <Image alt="" src="/assets/correct.png" width={32} height={32}/> : <Image alt="" src="/assets/incorrect.png" width={32} height={32}/>
                 :<Image alt="" src="/assets/equal.png" width={32} height={32}/>
              }
              </div>
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
        .content-wrap{
          display: flex;
          flex-direction:column;
          gap: 20px;
        }
        .row-elements{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }
        .element {
          width: 150px;
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
