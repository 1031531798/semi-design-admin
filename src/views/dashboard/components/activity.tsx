import { Card } from "@douyinfe/semi-ui";
import EChart from "../../../components/chart/echart";
import { EChartsOption } from "echarts";

const Activity = () => {
  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: "rgba(0,0,0,0.3)",
    },
  };
  const chartOption: EChartsOption = {
    backgroundColor: "transparent",
    legend: {
      right: 0,
      icon: "circle",
      itemGap: 30,
      textStyle: {
        fontSize: 14,
        padding: [25, 0, 0, 0],
        height: 50,
      },
    },
    tooltip: {},
    xAxis: {
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
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
        name: "费用",
        type: "bar",
        // stack: 'one',
        emphasis: emphasisStyle,
        data: [22, 33, 55, 66, 55, 33, 44].map((item) => {
          return {
            value: item,
          };
        }),
        itemStyle: {
          color: "#FFC01E",
          borderRadius: [5, 5, 0, 0],
        },
        barWidth: 15,
      },
      {
        name: "收益",
        type: "bar",
        // stack: 'one',
        emphasis: emphasisStyle,
        itemStyle: {
          color: "#1FCB4F",
          borderRadius: [5, 5, 0, 0],
        },
        barWidth: 15,
        data: [123, 44, 22, 33, 12, 33, 22].map((item) => {
          return {
            value: item,
          };
        }),
      },
    ],
  };
  return (
    <Card
      title="活跃"
      className={"w-full flex flex-col flex-grow mt-5 mr-5"}
      headerLine={false}
      bodyStyle={{
        width: "100%",
        height: "100%",
      }}
    >
      <EChart option={chartOption} />
    </Card>
  );
};
export default Activity;
