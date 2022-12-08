import { usePrefixCls } from 'src/hook/useConfig';

const Index = () => {
  const prefixCls = usePrefixCls('pages-form')
  return (
    <div className={prefixCls}>
      pages-form
    </div>
  )
}

export default Index
