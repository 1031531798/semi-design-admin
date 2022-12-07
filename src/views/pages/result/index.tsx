import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('pages-result')
  return (
    <div className={prefixCls}>
      pages-result
    </div>
  )
}

export default Index
