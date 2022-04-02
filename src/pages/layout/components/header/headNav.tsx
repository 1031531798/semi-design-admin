import { FC } from 'react';
import { usePrefixCls } from 'src/hook/useConfig';
import { Breadcrumb } from '@douyinfe/semi-ui';
import useStore from 'src/store';
import { useLocale } from '../../../../locales/index';
import { openMenuItem } from '../../../../store/index';

const Index: FC = () => {
  const prefixCls = usePrefixCls('header-breadcrumb')
  const openRouterList = useStore(state => state.openRouterList)
  const { formatMessage } = useLocale()

  function renderBreadcrumbItem () {
    const breadcrumbList = openRouterList.map((item: openMenuItem) => {
      return <Breadcrumb.Item key={item.itemKey}>{formatMessage({id: item.text})}</Breadcrumb.Item>
    })
    return breadcrumbList
  }
  return (
    <div className={prefixCls}>
      <Breadcrumb>
        {renderBreadcrumbItem()}
      </Breadcrumb>
    </div>
  )
}

export default Index