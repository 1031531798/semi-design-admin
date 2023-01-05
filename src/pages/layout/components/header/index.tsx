import { Nav, Avatar, Dropdown, Layout } from '@douyinfe/semi-ui';
import { usePrefixCls } from '../../../../hook/useConfig';
import HeaderNav from './headNav'
import Tabs from './tabs'
import ColorMode from "./colorMode";
import LocaleMode from "./localeMode";
import useStore from "../../../../store";

const { Header } = Layout
const Index = () => {
  const prefixCls = usePrefixCls('layout-header');
  const {token} = useStore()
  return (
    <Header className={prefixCls}>
      <Nav
        style={{
          width: '100%'
        }}
        mode={'horizontal'}
        header={<HeaderNav></HeaderNav>}
        footer={
          <>
            <ColorMode />
            <LocaleMode />
            <Dropdown
              position="bottom"
              render={
                <Dropdown.Menu>
                  <Dropdown.Item>详情</Dropdown.Item>
                  <Dropdown.Item>退出</Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Avatar size="small" color='light-blue' style={{ margin: 4 }}>{token?.slice(0, 2)}</Avatar>
              <span>{token}</span>
            </Dropdown>
          </>
        }
      ></Nav>
      <Tabs></Tabs>
    </Header>
  )
}

export default Index
