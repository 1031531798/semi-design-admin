import { FC } from 'react'
import { Layout, Nav } from '@douyinfe/semi-ui' 
import Logo from './logo'
import { useMenuSettings, usePrefixCls } from 'src/hook/useConfig';
const {Sider} = Layout

const Index :FC  = () => {
const { width } = useMenuSettings()
const prefixCls = usePrefixCls('layout-sider')
function getStyle () {
  return {
    width: width
  }
}
return (
    <Sider className={prefixCls} style={getStyle()}>
      <Logo></Logo>
      <Nav></Nav>
    </Sider>
  )
}

export default Index