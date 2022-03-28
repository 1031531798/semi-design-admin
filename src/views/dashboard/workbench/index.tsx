import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('dashboard-workbench')
  return (
    <div className={prefixCls}>
      dashboard-workbench
    </div>
  )
}

export default Index