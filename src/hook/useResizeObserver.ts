
/*
* 封装ResizeObserver 方法
* */
import {useRef} from "react";

export function useResizeObserver () {
  let resizeObserver: ResizeObserver | null = null;
  const observerDom = useRef<HTMLElement>()
  const observe = (el: HTMLElement, callback: ResizeObserverCallback) => {
    resizeObserver = new ResizeObserver(callback)
    observerDom.current = el
    resizeObserver.observe(el)
    return resizeObserver
  }
  const unobserve = () => {
    if (resizeObserver && observerDom.current) {
      resizeObserver.unobserve(observerDom.current)
    }
  }
  return {observe, unobserve}
}
