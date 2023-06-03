import { Card } from "@douyinfe/semi-ui";
import EChart from "../../../components/chart/echart";
import { EChartsOption } from "echarts";

const Overview = () => {
  const colors = ["#5470C6", "#EE6666"];
  const chartOption: EChartsOption = {
    color: colors,
    backgroundColor: "transparent",
    legend: {
      right: 120,
      icon: "circle",
      itemGap: 30,
      textStyle: {
        fontSize: 14,
        padding: [25, 0, 0, 0],
        height: 50,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: 70,
      bottom: 50,
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        boundaryGap: false,
        axisPointer: {
          lineStyle: {
            type: "dashed",
            color: "#1FCB4F",
          },
        },
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        axisLabel: {
          padding: [20, 0, 0, 0], // 坐标轴刻度标签与轴线之间的上边距为 10 像素，其余方向为 0
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          padding: [0, 20, 0, 0],
          formatter: "$ {value}",
        },
      },
    ],
    series: [
      {
        name: "余额",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
          scale: 4,
        },
        lineStyle: {
          color: "#FFC01E",
        },
        itemStyle: {
          color: "#FFC01E",
        },
        data: [40, 58, 60, 70, 75, 100, 110, 120, 135, 150, 170],
        animation: true,
      },
      {
        name: "收益",
        type: "line",
        smooth: true,
        animation: true,
        emphasis: {
          focus: "series",
          scale: 4,
        },
        lineStyle: {
          color: "#1FCB4F",
        },
        itemStyle: {
          color: "#1FCB4F",
        },
        data: [40, 18, 2, 10, 5, 25, 10, 10, 15, 15, 20],
      },
    ],
  };
  return (
    <Card
      title="总览"
      className={"flex flex-col flex-grow h-1/2"}
      headerLine={false}
      bodyStyle={{
        width: "100%",
        height: "300px",
      }}
    >
      <EChart option={chartOption} />
    </Card>
  );
};
export default Overview;
