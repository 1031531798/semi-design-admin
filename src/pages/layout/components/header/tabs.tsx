import { useMemo } from 'react';
import {Dropdown, TabPane, Tabs} from '@douyinfe/semi-ui';
import useStore from 'src/store';
import { IconChevronDown } from '@douyinfe/semi-icons';
import { TabProps } from '../../../../store/type';
import { useLocation, useNavigate } from 'react-router-dom';
import {useLocale} from "../../../../locales";
import { VscCloseAll} from "react-icons/vsc";
import {AiOutlineColumnWidth} from 'react-icons/ai'
import {BsFullscreen} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const HeaderTabs = () => {
  const tabList = useStore(state => state.tabList)
  const setTabList = useStore(state => state.setTabList)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const {formatMessage, locale} = useLocale()
  const getTabList: TabProps[] = useMemo(() => {
    // 设置tabList 展示数据
    return tabList.map(item => {
      return {
        ...item,
        tab: formatMessage({id: item.tab}) // 国际化
      }
    })
  }, [tabList, locale])
  // 点击标签
  const changeTab = (key: string) => {
    key && navigate(key)
  }
  // 删除标签
  const closeTab = (key: string) => {
    const list = tabList.filter(item => {
      return item.itemKey !== key
    })
    navigate(list[list.length - 1].itemKey)
    setTabList(list)
  }
  // 关闭当前标签
  function closeCurrent() {
    closeTab(pathname)
  }
  // 关闭其他标签
  function closeOther () {
    const list = tabList.filter(item => {
      return item.itemKey === pathname || !item.closable
    })
    setTabList(list)
  }
  // 关闭全部标签
  function closeAll () {
    const list = tabList.filter(item => {
      return !item.closable
    })
    navigate(list[list.length - 1].itemKey)
    setTabList(list)
  }
  function openContextMenu () {
    console.log('openContextMenu')
  }
  return (
      <div className={'flex flex-row items-center'}>
        <Tabs
            style={{width: 'calc(100% - 40px)'}}
            type="card"
            collapsible
            activeKey={pathname}
            onChange={changeTab}
            onTabClose={closeTab}
            tabList={getTabList}
        >
          {getTabList.map(item => {
            return <span key={item.itemKey} onClick={openContextMenu}>
              <TabPane {...item}></TabPane>
            </span>
          })}
        </Tabs>
        <Dropdown
            className={'h-full p-2'}
            trigger={'click'}
            position={'bottomLeft'}
            render={
              <Dropdown.Menu>
                <Dropdown.Item icon={<IoMdClose />} onClick={closeCurrent}>关闭当前标签</Dropdown.Item>
                <Dropdown.Item icon={<AiOutlineColumnWidth />} onClick={closeOther}>关闭其他标签</Dropdown.Item>
                <Dropdown.Item icon={<VscCloseAll />} onClick={closeAll}>关闭全部标签</Dropdown.Item>
                <Dropdown.Item icon={<BsFullscreen />}>全屏</Dropdown.Item>
              </Dropdown.Menu>
            }
        >
          <div className={' h-full cursor-pointer'} style={{ marginTop: "2px", borderBottom: "1px solid var(--semi-color-border)"}}>
            <IconChevronDown  />
          </div>
        </Dropdown>
      </div>

  )
}

export default HeaderTabs
