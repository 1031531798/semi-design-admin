import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index = () => {
  const prefixCls = usePrefixCls('404')
  return (
    <div className={prefixCls}>
      页面找不到
    </div>
  )
}

export default Index