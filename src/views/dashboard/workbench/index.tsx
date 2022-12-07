import { FC, useEffect } from 'react';
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('dashboard-workbench')
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const gl = canvas.getContext('webgl')
    if (gl) {
      setColorParams()
    }
  })
  var setColorParams = () => {
    
  }
  

  return (
    <div className={prefixCls}>
      <canvas id='canvas'></canvas>
    </div>
  )
}

export default Index