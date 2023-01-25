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
      }
      vix {
        localDate
      }
      usInterestRate {
        series
      }
      recession {
        start
      }
      nasdaq {
        localDate
      }
      us10yTreasury {
        localDate
      }
    }
  }
`;

export { ALL_ECONOMY_IDX };
