import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('dashboard-analyse')
  return (
    <div className={prefixCls}>
      dashboard-analyse
    </div>
  )
}

export default Index