import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('pages-exception')
  return (
    <div className={prefixCls}>
      pages-exception
    </div>
  )
}

export default Index