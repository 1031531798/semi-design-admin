import { usePrefixCls } from 'src/hook/useConfig';

const SysUser = () => {
  const prefixCls = usePrefixCls('layout-header')
  return (
    <div className={prefixCls}>
      User Views
    </div>
  )
}

export default SysUser
