import { useMemo, useState, useEffect } from 'react';
import { Nav, Avatar, Dropdown, Select, Layout, Button, Tooltip } from '@douyinfe/semi-ui';
import { IconLanguage, IconMoon, IconSun } from '@douyinfe/semi-icons';
import { usePrefixCls } from '../../../../hook/useConfig';
import HeaderNav from './headNav'
import Tabs from './tabs'
import useStore from 'src/store';
import { ColorModeType } from '../../../../config/type';
import { isString } from '../../../../utils/is';
import { useLocale } from '../../../../locales';
import ColorMode from "./colorMode";
import LocaleMode from "./localeMode";

const { Header } = Layout
const Index = () => {
  const prefixCls = usePrefixCls('layout-header')

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
              <Avatar size="small" color='light-blue' style={{ margin: 4 }}>BD</Avatar>
              <span>Admin</span>
            </Dropdown>
          </>
        }
      ></Nav>
      <Tabs></Tabs>
    </Header>
  )
}

export default Index
