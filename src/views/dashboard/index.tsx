import { usePrefixCls } from 'src/hook/useConfig';

const Index = () => {
  const prefixCls = usePrefixCls('dashboard-workbench')

  return (
    <div className={prefixCls}>
      工作台
    </div>
  )
}

export default Index
