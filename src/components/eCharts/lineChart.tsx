import React from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

interface IChartProps {
  data?: {
    usInterestRate?: {
      series: number[];
    };
    usUnemployRate?: {
      series: number[];
    };
  } | null;
  isGoBtnClicked?: boolean;
  isRefrBtnClicked?: boolean;
  maxYaxis?: number;
  title?: string;
  id?: string;
}

const LineChart: React.FC<IChartProps> = ({
  data,
  isGoBtnClicked,
  maxYaxis,
  title,
  id,
}) => {
  const option = {
    title: {
      text: title,
      left: "13%",
      textStyle: {
        fontSize: 20,
        color: "gray",
      },
    },

    grid:
      isGoBtnClicked == true
        ? {
            top: "15%",
            left: "0%",
            right: "7%",
            bottom: "15%",
          }
        : {
            top: "15%",
            left: "15%",
            right: "0%",
            bottom: "15%",
          },
    xAxis: {
      type: "time",
      axisLine: {
        lineStyle: {
          width: 1,
        },
      },
      offset: 5,
      axisLabel: {
        // 여기에 Go 버튼 눌렀을시 "false" refresh 또는 안누르면  "true"
        showMinLabel: isGoBtnClicked == true ? false : true,
        align: "right",
      },
    },
    yAxis: {
      type: "value",
      max: maxYaxis,
      axisLabel: {
        // 여기에 Go 버튼 눌렀을시 "false" refresh 또는 안누르면  "true"
        show: isGoBtnClicked == true ? false : true,
      },
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
        name: title,
        data: data,
        showSymbol: false,
        type: "line",
        lineStyle: {
          width: 2,
          color: id == "usInterestRate" ? "#f7f72f" : "#EC1B24",
        },
        itemStyle: {
          color: id == "usInterestRate" ? "#f7f72f" : "#EC1B24",
        },
      },
    ],
  };

  return (
    <ECharts
      style={
        isGoBtnClicked != undefined && isGoBtnClicked == true
          ? { width: "100%", height: "250px" }
          : { width: "48%", height: "250px" }
      }
      option={option}
    />
  );
};

export default LineChart;
