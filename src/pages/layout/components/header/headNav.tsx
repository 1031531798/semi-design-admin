import { usePrefixCls } from "src/hook/useConfig";
import { Breadcrumb } from "@douyinfe/semi-ui";
import useStore from "src/store";
import { useLocale } from "../../../../locales";
import { MenuItem } from "src/pages/layout/components/sider/data";

const HeaderNav = () => {
  const prefixCls = usePrefixCls("header-breadcrumb");
  const openRouterList = useStore((state) => state.openRouterList);
  const { formatMessage } = useLocale();

  function renderBreadcrumbItem() {
    if (Array.isArray(openRouterList)) {
      return openRouterList.map((item: MenuItem) => {
        return (
          <Breadcrumb.Item key={item.itemKey}>
            {formatMessage({ id: item.text })}
          </Breadcrumb.Item>
        );
      });
    }
  }
  return (
    <div className={prefixCls}>
      <Breadcrumb>{renderBreadcrumbItem()}</Breadcrumb>
    </div>
  );
};

export default HeaderNav;
