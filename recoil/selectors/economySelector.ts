import { selector } from "recoil";
import { economyState } from "recoil/atoms/economyAtom";

export const bakeEcodata = selector({
  key: "bakeEcodata",
  get: ({ get }) => {
    let firstHalfData: any;
    let lastHalfData;
    // baking dollar idx
    if (get(economyState) !== null) {
      let data: any = get(economyState);
      console.log(data, "datttttttttttt");

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

      // US 10 years treasury data division into 2 parts (first half year and last half year)
      let us10YTrsuryLocDate = data.oneYearEco.us10yTreasury.localDate;
      let us10YTrsuryCdleData = data.oneYearEco.us10yTreasury.candleData;
      let firstUs10YTrsuryLoc = us10YTrsuryLocDate.slice(
        0,
        us10YTrsuryLocDate.length / 2
      );
      let firstUs10YTrsuryCdle = us10YTrsuryCdleData.slice(
        0,
        us10YTrsuryCdleData.length / 2
      );
      let lastUs10YTrsuryLoc = us10YTrsuryLocDate.slice(
        us10YTrsuryLocDate.length / 2,
        us10YTrsuryLocDate.length
      );
      let lastUs10YTrsuryCdle = us10YTrsuryCdleData.slice(
        us10YTrsuryCdleData.length / 2,
        us10YTrsuryCdleData.length
      );

      firstHalfData = {
        ...firstHalfData,
        us10yTreasury: {
          localDate: firstUs10YTrsuryLoc,
          candleData: firstUs10YTrsuryCdle,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        us10yTreasury: {
          localDate: lastUs10YTrsuryLoc,
          candleData: lastUs10YTrsuryCdle,
        },
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
          localDate: firstUs10YTrsuryLoc,
          candleData: firstUs10YTrsuryCdle,
        },
      };
      lastHalfData = {
        ...lastHalfData,
        vix: { localDate: lastUs10YTrsuryLoc, candleData: lastUs10YTrsuryCdle },
      };

      // US interest rates data division into 2 parts (first half year and last half year)
      let usInterRateData = data.oneYearEco.usInterestRate.series;
      let maxLength = Math.ceil(usInterRateData.length / 2);
      let firstUsInterRateData = usInterRateData.slice(0, maxLength);

      let lastUsInterRateData = usInterRateData.slice(
        maxLength,
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
    }
    return { firstHalfData, lastHalfData };
  },
});
