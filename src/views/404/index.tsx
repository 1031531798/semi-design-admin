import { usePrefixCls } from 'src/hook/useConfig';

const View404 = () => {
  const prefixCls = usePrefixCls('404')
  return (
    <div className={prefixCls}>
      页面找不到
    </div>
  )
}

export default View404
