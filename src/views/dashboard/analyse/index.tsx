import { usePrefixCls } from 'src/hook/useConfig';

const Index = () => {
  const prefixCls = usePrefixCls('dashboard-analyse')
  return (
    <div className={prefixCls}>
      dashboard-analyse
    </div>
  )
}

export default Index
