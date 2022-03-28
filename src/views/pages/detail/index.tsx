import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('pages-detail')
  return (
    <div className={prefixCls}>
      pages-detail
    </div>
  )
}

export default Index