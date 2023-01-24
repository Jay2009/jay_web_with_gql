import React from "react";
import EChartsNextForReactCore from "echarts-next-for-react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

interface IChartProps {
  data?: any[];
}

const Echart: React.FC<IChartProps> = ({ data }) => {
  if (data) console.log(data, "ypooooo");

  const option = {
    title: {
      text: "title",
    },
    grid: {
      top: "15%",
      left: "7%",
      right: "5%",
      bottom: "8%",
      // containLabel: true
    },
    xAxis: {
      type: "time",
      axisLine: {
        lineStyle: {
          width: 1,
        },
      },
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      trigger: "axis",
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
        data: data,
        showSymbol: false,
        type: "line",
        lineStyle: {
          width: 1.5,
          color: "#739A7B",
        },
      },
    ],
  };

  return (
    <ECharts style={{ width: "800px", height: "230px" }} option={option} />
  );
};

export default Echart;
