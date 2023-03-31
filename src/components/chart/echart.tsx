import * as echarts from "echarts";
import {useEffect, useRef} from "react";
import useStore from "../../store";

interface EChartProps {
    option: echarts.EChartsOption
}
const EChart = (props: EChartProps) => {
    const {option} = props
    const eChartRef = useRef(null)
    const colorMode = useStore(state => state.colorMode)
    let myEChart: echarts.EChartsType | null = null
    useEffect(() => {
        if (eChartRef.current) {
            myEChart = echarts.init(eChartRef.current, colorMode);
            myEChart.setOption(option)
            myEChart.resize()
            // resize 自适应
            const resizeObserve = new ResizeObserver((entries, observer) => {
                myEChart?.resize()
            })
            resizeObserve.observe(eChartRef.current)
        }
    }, [])
    return(
        <>
            <div ref={eChartRef} className={'w-full h-full'}></div>
        </>
    )
}
export default EChart
