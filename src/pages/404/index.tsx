import { useMemo } from 'react';
import { ColorModeType } from 'src/config/type';
import { usePrefixCls } from 'src/hook/useConfig';
import useStore from '../../store/index';
const Index = () => {
  const prefixCls = usePrefixCls('layout-404')
  let mode = useStore(state => state.colorMode)
  const getImage = useMemo(() => {
    const lightImage = require('src/assets/image/404.png')
    const darkImage = require('src/assets/image/404_dark.png')
    return mode === ColorModeType.light ? lightImage : darkImage
  }, [mode])

  return (
    <div className={prefixCls}>
      <img src={getImage} alt='找不到页面' useMap='backMap'></img>
      <map name="backMap">
        <area shape="rect" coords="34, 44, 270, 350" href="computer.htm" alt='back' />
      </map>
    </div>
  )
}

export default Index
