import React from "react";
import EChartsNextForReactCore from "echarts-next-for-react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

interface IChartProps {
  candleData?: {
    localDate: string[];
    candleData: number[];
  } | null;
  isGoBtnClicked?: boolean;
  isRefrBtnClicked?: boolean;
  maxYaxis?: number;
  title?: string;
}

const CandleChart: React.FC<IChartProps> = ({
  candleData,
  maxYaxis,
  title,
  isGoBtnClicked,
  isRefrBtnClicked,
}) => {
  if (candleData) console.log(candleData.localDate, "이차트!!");

  const option = {
    title: {
      text: title,
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
      type: "category",
      data: candleData?.localDate,
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
        type: "candlestick",
        data: candleData?.candleData,
        animationDuration: 3000,
        lineStyle: {
          width: 1.5,
          color: "#739A7B",
        },
        markPoint: {
          data: [
            {
              type: 'max',
              symbol: "pin",
              symbolSize: 22,
              label: {
                show: false
              },
              itemStyle: {
                color: "#f70202"
              }, 
            },
            {
            type: 'min',
            symbol: "pin",
            symbolSize: 22,
            label: {
              show: false
            },
            itemStyle: {
              color: "#0af702"
            },     
            symbolRotate: 180,
            },
          ],
        }, 
      },
      
    ],
  };

  return (
    <ECharts style={{ width: "450px", height: "250px" }} option={option} />
  );
};

export default CandleChart;
