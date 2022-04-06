import { FC, useMemo, useState, useEffect } from 'react';
import { Nav, Avatar, Dropdown, Select, Layout, Button, Tooltip } from '@douyinfe/semi-ui';
import { IconLanguage, IconMoon, IconSun } from '@douyinfe/semi-icons';
import { usePrefixCls } from '../../../../hook/useConfig';
import HeaderNav from './headNav'
import useStore from 'src/store';
import { useColorMode } from '../../../../hook/useMode';
import { ColorModeType } from '../../../../config/type';
import { isString } from '../../../../utils/is';
import { useLocale } from '../../../../locales/index';

const { Header } = Layout
const Index: FC = () => {
  const prefixCls = usePrefixCls('layout-header')
  const setLocaleMode = useStore(state => state.setLocaleMode)
  function changeLocale(value: string | number | any[] | Record<string, any> | undefined) {
    if (isString(value)) {
      setLocaleMode(value)
    }
  }
  const { formatMessage } = useLocale()
  const { mode, setMode } = useColorMode()
  const [colorMode, setColorMode] = useState(mode)
  useEffect(() => {
    setSemiColorMode()
  })
  const getModeIcon = useMemo(() => {
    return colorMode === ColorModeType.light ? <IconMoon /> : <IconSun />
  }, [colorMode])

  const getModeTooltip = useMemo(() => {
    return colorMode === ColorModeType.light ? formatMessage({ id: 'web.setting.color-dark' }) : formatMessage({ id: 'web.setting.color-light' })
  }, [colorMode, formatMessage])

  function changeColorMode() {
    const mode = colorMode === ColorModeType.light ? ColorModeType.dark : ColorModeType.light
    setColorMode(mode)
    setMode(mode)
  }

  function setSemiColorMode () {
    const body = document.body;
    if (colorMode === ColorModeType.dark) {
      body.setAttribute('theme-mode', 'dark');
    }else {
      body.removeAttribute('theme-mode');
    }
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
            <Tooltip content={getModeTooltip}>
              <Button icon={getModeIcon} onClick={changeColorMode} style={{ width: 40, marginRight: 20 }} />
            </Tooltip>
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