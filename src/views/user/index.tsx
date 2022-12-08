import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index = () => {
  const prefixCls = usePrefixCls('layout-header')
  return (
    <div className={prefixCls}>
      User Views
    </div>
  )
}

export default Index