import { gql, useSubscription } from "@apollo/client";

const ALL_ECONOMY_IDX = gql`
  query allIdx {
    dollarIdx {
      localDate
      closePrice
      openPrice
      highPrice
      lowPrice
      accumulatedTradingVolume
    }
    nasdaqIdx {
      localDate
      closePrice
      openPrice
      highPrice
      lowPrice
      accumulatedTradingVolume
    }
    goldIdx {
      localDate
      closePrice
      openPrice
      highPrice
      lowPrice
      accumulatedTradingVolume
    }
    us10yTreasuryIdx {
      localDate
      closePrice
      openPrice
      highPrice
      lowPrice
    }
    vixIdx {
      localDate
      closePrice
      openPrice
      highPrice
      lowPrice
      accumulatedTradingVolume
    }
    stickyCpiIdx {
      series
    }
    usInterestRateIdx {
      series
    }
    recessionIdx {
      start
      end
      start_date
      end_date
    }
  }
`;

export { ALL_ECONOMY_IDX };
