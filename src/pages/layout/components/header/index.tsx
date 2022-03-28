import { FC } from 'react'
import { Layout } from '@douyinfe/semi-ui'
import { Nav, Avatar, Dropdown } from '@douyinfe/semi-ui';
import { usePrefixCls } from '../../../../hook/useConfig';

const { Header } = Layout
const Index: FC = () => {
  const prefixCls = usePrefixCls('layout-header')
  return (
    <Header className={prefixCls}>
      <Nav
        style={{
          width: '100%'
        }}
        mode={'horizontal'}
        footer={
          <Dropdown
            position="bottomRight"
            render={
              <Dropdown.Menu>
                <Dropdown.Item>详情</Dropdown.Item>
                <Dropdown.Item>退出</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Avatar size="small" color='light-blue' style={{ margin: 4 }}>BD</Avatar>
            <span>Bytedancer</span>
          </Dropdown>
        }
      ></Nav>
    </Header>
  )
}

export default Index