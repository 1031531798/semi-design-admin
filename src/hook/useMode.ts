import { ColorModeType } from '../config/type';
import useCache from './useCache';
import { CacheEnum } from '../enum/cache';
import { webSettings } from 'src/config/setting';
export function useColorMode() {
  const {getCache, setCache } = useCache()
  function setMode(colorMode: ColorModeType) {
    console.log('setMode', colorMode)
    setCache({
      key: CacheEnum.colorMode,
      value: colorMode,
      storage: localStorage
    })
  }
  return {
    mode: getCache({
      key: CacheEnum.colorMode,
      storage: localStorage
    }) || webSettings.colorMode,
    setMode
  }
}