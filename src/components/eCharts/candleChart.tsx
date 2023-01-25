import React from "react";
import EChartsNextForReactCore from "echarts-next-for-react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

interface IChartProps {
  candleData?: {
    localDate: string[];
    candleData: number[];
  } | null;
  maxYaxis?: number;
  title?: string;
}

const CandleChart: React.FC<IChartProps> = ({
  candleData,
  maxYaxis,
  title,
}) => {
  if (candleData) console.log(candleData.localDate, "이차트!!");

  const option = {
    title: {
      text: title,
    },
    grid: {
      top: "15%",
      left: "7%",
      right: "5%",
      bottom: "8%",
      // containLabel: true
    },
    xAxis: {
      type: "category",
      data: candleData?.localDate,
      axisLine: {
        lineStyle: {
          width: 1,
        },
      },
    },
    yAxis: {
      type: "value",
      max: maxYaxis,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        type: "candlestick",
        data: candleData?.candleData,
        lineStyle: {
          width: 1.5,
          color: "#739A7B",
        },
      },
    ],
  };

  return (
    <ECharts style={{ width: "500px", height: "230px" }} option={option} />
  );
};

export default CandleChart;
