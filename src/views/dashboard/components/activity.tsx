import {Card} from "@douyinfe/semi-ui";
import EChart from "../../../components/chart/echart";
import {EChartsOption} from "echarts";

const Activity = () => {
    const colors = ['#5470C6', '#EE6666'];
    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    for (let i = 0; i < 10; i++) {
        xAxisData.push('Class' + i);
        data1.push(+(Math.random() * 2).toFixed(2));
        data2.push(+(Math.random() * 5).toFixed(2));
        data3.push(+(Math.random() + 0.3).toFixed(2));
        data4.push(+Math.random().toFixed(2));
    }
    var emphasisStyle = {
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.3)'
        }
    };
    const chartOption: EChartsOption = {
        legend: {
            data: ['bar', 'bar2', 'bar3', 'bar4'],
                left: '10%'
        },
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {}
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
                name: 'X Axis',
                axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
        },
        yAxis: {},
        grid: {
            bottom: 100
        },
        series: [
            {
                name: 'bar',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: data1
            },
            {
                name: 'bar2',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: data2
            },
            {
                name: 'bar3',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: data3
            },
            {
                name: 'bar4',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: data4
            }
        ]
    }
    return (
        <Card title='Overview' className={'w-full flex flex-col flex-grow mt-5 mr-5'} bordered={false} headerLine={false} bodyStyle={{
            width: '100%',
            height: '100%'
        }}>
            <EChart option={chartOption} />
        </Card>
    )
}
export default Activity
