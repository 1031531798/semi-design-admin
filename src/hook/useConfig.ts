import { webSettings } from "src/config/setting";
import { MenuConfig } from "../config/type";
function usePrefixCls(name: string, className?: string ): string {
  return `${className || ''} ${webSettings.prefixCls}-${name}`;
}

function useMenuSettings(): MenuConfig {
  return webSettings.menuSetting;
}
export { usePrefixCls, useMenuSettings };
