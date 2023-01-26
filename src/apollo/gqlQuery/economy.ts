import { gql, useSubscription } from "@apollo/client";

const ALL_ECONOMY_IDX = gql`
  query allIdx {
    oneYearEco {
      dollar {
        localDate
        candleData
      }
      gold {
        localDate
        candleData
      }
      vix {
        localDate
        candleData
      }
      usInterestRate {
        series
      }
      recession {
        start
      }
      nasdaq {
        localDate
        candleData
      }
      us10yTreasury {
        localDate
        candleData
      }
    }
  }
`;

export { ALL_ECONOMY_IDX };
