import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';
const Index :FC  = () => {
  const prefixCls = usePrefixCls('layout-sider-logo')
  return (
    <div className={prefixCls}>
      LoGO
    </div>
  )
}

export default Index