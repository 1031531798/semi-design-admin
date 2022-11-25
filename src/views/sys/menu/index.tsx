import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('pages-detail')
  return (
    <div className={prefixCls}>
      菜单管理
    </div>
  )
}

export default Index
