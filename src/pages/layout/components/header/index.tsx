import { FC } from 'react'
import { Nav, Avatar, Dropdown, Select, Layout } from '@douyinfe/semi-ui';
import { IconLanguage } from '@douyinfe/semi-icons';
import { usePrefixCls } from '../../../../hook/useConfig';
import HeaderNav from './headNav'
import useStore from 'src/store';

const { Header } = Layout
const Index: FC = () => {
  const prefixCls = usePrefixCls('layout-header')
  const setLocaleMode = useStore(state => state.setLocaleMode)
  function changeLocale(value: string | number | any[] | Record<string, any> | undefined) {
    setLocaleMode(value)
    console.log(value)
  }
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
            <Select defaultValue='zh_CN' onChange={changeLocale} style={{ width: 120, marginRight: 10 }} insetLabel={<IconLanguage />}>
              <Select.Option value='zh_CN'>中文</Select.Option>
              <Select.Option value='en_GB'>English</Select.Option>
            </Select>
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
          </>
        }
      ></Nav>
    </Header>
  )
}

export default Index