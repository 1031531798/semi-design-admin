import { usePrefixCls } from 'src/hook/useConfig';

const Index = () => {
  const prefixCls = usePrefixCls('pages-result')
  return (
    <div className={prefixCls}>
      pages-result
    </div>
  )
}

export default Index
