import { usePrefixCls } from 'src/hook/useConfig';

const SysMenu = () => {
  const prefixCls = usePrefixCls('pages-detail')
  return (
    <div className={prefixCls}>
      菜单管理
    </div>
  )
}

export default SysMenu
