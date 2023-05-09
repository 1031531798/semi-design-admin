import { useEffect, useMemo, useState } from "react";
import { isString } from "../utils/is";
interface NumberAnimateProps {
  start?: number; // 开始的数字
  end: number | string; // 结束的数字
  time?: number; // 动画时长
  delay?: number; // 动画延迟
  formatter?: (value: number | string) => number | string; // 格式化处理函数
  className?: string; // 自定义类目
}
// 数字动画组件
const NumberAnimate = (props: NumberAnimateProps) => {
  const { end, time = 3000, delay = 0, className, formatter } = props;
  let {start = 0} = props;
  const total = isString(end) ? parseInt(end) : end;
  const [value, setValue] = useState<number | string>(start);
  let timeoutId: NodeJS.Timeout | null = null;
  let frameId: number | null = null;
  useEffect(() => {
    // 延迟
    timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(changeValue);
    }, delay);
    return () => {
      // 卸载定时器
      timeoutId && clearTimeout(timeoutId);
      frameId && cancelAnimationFrame(frameId);
    };
  }, []);
  function changeValue() {
    const add = Math.floor(total / (time / 20));
    start = start + add > total ? total : start + add;
    setValue(formatter ? formatter(start) : start);
    if (start < total) {
      frameId = requestAnimationFrame(changeValue);
    }
  }
  return (
    <>
      <span className={className}>{value}</span>
    </>
  );
};
export default NumberAnimate;
