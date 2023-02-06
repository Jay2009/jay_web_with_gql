export interface IFineEcoData {   
      dollar :{
        localDate : string[];
        candleData: number[];
      } 
      gold :{
        localDate : string[];
        candleData: number[];
      }
      nasdaq :{
        localDate : string[];
        candleData: number[];
      }
      us10yTreasury :{
        localDate : string[];
        candleData: number[];
      }
      usInterestRate :{
        series: number[]
      }
      vix: {
        localDate : string[];
        candleData: number[];
      }
  
}