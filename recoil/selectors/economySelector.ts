import { selector } from "recoil";
import { economyState } from "recoil/atoms/economyAtom";

export const bakeEcodata = selector({
  key: "bakeEcodataKey",
  get: ({ get }) => {
    let firstHalfData;
    let lastHalfData;
    // baking dollar idx
    if (get(economyState) !== null) {
      let data: any = get(economyState);

      // dollar data division into 2 parts (first half year and last half year)
      let dollarLocDate = data.oneYearEco.dollar.localDate;
      let dollarCdleData = data.oneYearEco.dollar.candleData;
      let firstDollarLoc = dollarLocDate.slice(0, dollarLocDate.length / 2);
      let firstDollarCdle = dollarCdleData.slice(0, dollarCdleData.length / 2);
      let lastDollarLoc = dollarLocDate.slice(
        dollarLocDate.length / 2,
        dollarLocDate.length
      );
      let lastDollarCdle = dollarCdleData.slice(
        dollarCdleData.length / 2,
        dollarCdleData.length
      );

      firstHalfData = {
        dollar: {
          localDate: firstDollarLoc,
          candleData: firstDollarCdle,
        },
      };
      lastHalfData = {
        dollar: { localDate: lastDollarLoc, candleData: lastDollarCdle },
      };

      // gold data division into 2 parts (first half year and last half year)
      let goldLocDate = data.oneYearEco.gold.localDate;
      let goldCdleData = data.oneYearEco.gold.candleData;
      let firstGoldLoc = goldLocDate.slice(0, goldLocDate.length / 2);
      let firstGoldCdle = goldCdleData.slice(0, goldCdleData.length / 2);
      let lastGoldLoc = goldLocDate.slice(
        goldLocDate.length / 2,
        goldLocDate.length
      );
      let lastGoldCdle = goldCdleData.slice(
        goldCdleData.length / 2,
        goldCdleData.length
      );

      firstHalfData = {
        ...firstHalfData,
        gold: {
          localDate: firstGoldLoc,
          candleData: firstGoldCdle,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        gold: { localDate: lastGoldLoc, candleData: lastGoldCdle },
      };

      // Nasdaq data division into 2 parts (first half year and last half year)
      let nasdaqLocDate = data.oneYearEco.nasdaq.localDate;
      let nasdaqCdleData = data.oneYearEco.nasdaq.candleData;
      let firstNasdaqLoc = nasdaqLocDate.slice(0, nasdaqLocDate.length / 2);
      let firstNasdaqCdle = nasdaqCdleData.slice(0, nasdaqCdleData.length / 2);
      let lastNasdaqLoc = nasdaqLocDate.slice(
        nasdaqLocDate.length / 2,
        nasdaqLocDate.length
      );
      let lastNasdaqCdle = nasdaqCdleData.slice(
        nasdaqCdleData.length / 2,
        nasdaqCdleData.length
      );

      firstHalfData = {
        ...firstHalfData,
        nasdaq: {
          localDate: firstNasdaqLoc,
          candleData: firstNasdaqCdle,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        nasdaq: { localDate: lastNasdaqLoc, candleData: lastNasdaqCdle },
      };

      // Vix data division into 2 parts (first half year and last half year)
      let vixLocDate = data.oneYearEco.vix.localDate;
      let vixCdleData = data.oneYearEco.vix.candleData;
      let firstVixLoc = vixLocDate.slice(0, vixLocDate.length / 2);
      let firstVixCdle = vixCdleData.slice(0, vixCdleData.length / 2);
      let lastVixLoc = vixLocDate.slice(
        vixLocDate.length / 2,
        vixLocDate.length
      );
      let lastVixyCdle = vixCdleData.slice(
        vixCdleData.length / 2,
        vixCdleData.length
      );

      firstHalfData = {
        ...firstHalfData,
        vix: {
          localDate: firstVixLoc,
          candleData: firstVixCdle,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        vix: { localDate: lastVixLoc, candleData: lastVixyCdle },
      };

      // US interest rates data dividing into 2 parts (first half year and last half year)
      let usInterRateData = data.oneYearEco.usInterestRate.series;
      let maxUsInterLength = Math.ceil(usInterRateData.length / 2);
      let firstUsInterRateData = usInterRateData.slice(0, maxUsInterLength);

      let lastUsInterRateData = usInterRateData.slice(
        maxUsInterLength,
        usInterRateData.length
      );

      firstHalfData = {
        ...firstHalfData,
        usInterestRate: {
          series: firstUsInterRateData,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        usInterestRate: {
          series: lastUsInterRateData,
        },
      };

      // US unemployment rates data dividing into 2 parts (first half year and last half year)
      let usUnemployRateData = data.oneYearEco.usUnemployRate.series;
      let maxUsUnemplyLength = Math.ceil(usUnemployRateData.length / 2);
      let firstUsUnemplyRateData = usUnemployRateData.slice(
        0,
        maxUsUnemplyLength
      );

      let lastUsUnemployRateData = usUnemployRateData.slice(
        maxUsUnemplyLength,
        usUnemployRateData.length
      );

      firstHalfData = {
        ...firstHalfData,
        usUnemploymentRate: {
          series: firstUsUnemplyRateData,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        usUnemploymentRate: {
          series: lastUsUnemployRateData,
        },
      };
    }
    return { firstHalfData, lastHalfData };
  },
});
