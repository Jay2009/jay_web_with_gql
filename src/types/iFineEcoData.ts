export interface IFineEcoData {
  dollar: {
    localDate: string[];
    candleData: number[];
  };
  gold: {
    localDate: string[];
    candleData: number[];
  };
  nasdaq: {
    localDate: string[];
    candleData: number[];
  };
  vix: {
    localDate: string[];
    candleData: number[];
  };
}
