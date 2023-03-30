import {useEffect, useMemo, useState} from "react";
import {isString} from "../utils/is";
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
    let {start = 0, end, time = 3000, delay = 0, className, formatter} = props;
    const total = isString(end) ? parseInt(end) : end
    const [value , setValue] = useState<number | string>(start)
    // 处理数字函数
    const transformNumber = useMemo(() => {
        return formatter ? formatter(value) : value
    }, [value])
    useEffect(() => {
        // 延迟
        setTimeout(() => {
            requestAnimationFrame(changeValue)
        }, delay)
    }, [])
    function changeValue () {
        const add = Math.floor(total / (time / 20))
        start = start + add > total ? total : start + add
        setValue(start)
        if (start < total) {
            requestAnimationFrame(changeValue)
        }
    }
    return (
        <>
            <span className={className}>
                {transformNumber}
            </span>
        </>
    )
}
export default NumberAnimate
