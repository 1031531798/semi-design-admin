import { usePrefixCls } from 'src/hook/useConfig';

const PagesForm = () => {
  const prefixCls = usePrefixCls('pages-form')
  return (
    <div className={prefixCls}>
      pages-form
    </div>
  )
}

export default PagesForm
