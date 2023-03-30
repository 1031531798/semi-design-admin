import { useMemo } from 'react';
import { Tabs } from '@douyinfe/semi-ui';
import useStore from 'src/store';
import { TabProps } from '../../../../store/type';
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash'
import {useLocale} from "../../../../locales";

const Index = () => {
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
    let list = _.cloneDeep(tabList)
    list = list.filter(item => {
      return item.itemKey !== key
    })
    navigate(list[list.length - 1].itemKey)
    setTabList(list)
  }
  return (
    <Tabs
      type="card"
      collapsible
      activeKey={pathname}
      onChange={changeTab}
      onTabClose={closeTab}
      tabList={getTabList}
    ></Tabs>
  )
}

export default Index
