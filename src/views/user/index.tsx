import { FC } from 'react'
import { Layout } from '@douyinfe/semi-ui'
import { Nav, Avatar, Dropdown } from '@douyinfe/semi-ui';
import { usePrefixCls } from 'src/hook/useConfig';

const { Header } = Layout
const Index: FC = () => {
  const prefixCls = usePrefixCls('layout-header')
  return (
    <div>
      User Views
    </div>
  )
}

export default Index