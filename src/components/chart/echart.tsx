import * as echarts from "echarts";
import {useEffect, useRef} from "react";

interface EChartProps {
    option: echarts.EChartsOption
}
const EChart = (props: EChartProps) => {
    const {option} = props
    const eChartRef = useRef(null)
    let myEChart: echarts.EChartsType | null = null
    useEffect(() => {
        if (eChartRef.current) {
            myEChart = echarts.init(eChartRef.current);
            myEChart.setOption(option)
            myEChart.resize()
        }
    }, [])
    return(
        <>
            <div ref={eChartRef} className={'w-full h-full'}></div>
        </>
    )
}
export default EChart
