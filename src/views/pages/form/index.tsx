import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';

const Index: FC = () => {
  const prefixCls = usePrefixCls('pages-form')
  return (
    <div className={prefixCls}>
      pages-form
    </div>
  )
}

export default Index