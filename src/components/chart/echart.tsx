import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import useStore from "../../store";
import {useResizeObserver} from "../../hook/useResizeObserver";

interface EChartProps {
  option: echarts.EChartsOption;
}
const EChart = (props: EChartProps) => {
  const { option } = props;
  const eChartRef = useRef(null);
  const {observe, unobserve} = useResizeObserver()
  const colorMode = useStore((state) => state.colorMode);
  let myEChart: echarts.EChartsType | null = null;
  useEffect(() => {
    if (eChartRef.current) {
      myEChart = echarts.init(eChartRef.current, colorMode);
      // resize 自适应
      observe(eChartRef.current, (entries, observer) => {
        myEChart?.resize();
        setTimeout(() => {
          myEChart?.setOption(option);
        });
      });
    }
    return () => {
      unobserve()
    }
  }, []);
  return (
    <>
      <div ref={eChartRef} className={"w-full h-full"}></div>
    </>
  );
};
export default EChart;
