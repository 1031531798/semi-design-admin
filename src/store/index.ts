import create from 'zustand'
import { setCache, getCache } from '../hook/useCache';
import { CacheEnum } from '../enum/cache';
import { MenuItem } from 'src/pages/layout/components/sider/data';
import { ColorModeType } from 'src/config/type';
import { webSettings } from 'src/config/setting';

export interface openMenuItem {
  path: string,
  itemKey: string,
  text: string
}
interface StoreState {
  localeMode: string,
  menuFold: boolean,
  openRouterList: MenuItem[],
  openMenuBar: string[];
  selectMenuBar: string[];
  colorMode: ColorModeType;
  setColorMode: (mode: ColorModeType) => void;
  setOpenMenuBar: (menu: string[]) => void,
  setSelectMenuBar: (menu: string[]) => void,
  setOpenRouter: (t: MenuItem[]) => void,
  setLocaleMode: (mode: string) => void,
}

const useStore = create<StoreState>((set) => ({
  // 菜单展开
  menuFold: false,
  changeMenuFold: () => set((state: StoreState) => ({ menuFold: !state.menuFold })),
  // 语言
  localeMode: 'zh_CN',
  setLocaleMode: (mode: string) => set(() => ({ localeMode: mode })),
  // 面包屑数据
  openRouterList: getCache({
    key: CacheEnum.openRouteList,
    storage: sessionStorage
  }) || [],
  setOpenRouter: (pathList: MenuItem[]) => {
    setCache({
      key: CacheEnum.openRouteList,
      value: pathList,
      storage: sessionStorage
    })
    return set(() => (
      {
        openRouterList: pathList
      }
    ))
  },
  // 色彩模式
  colorMode: getCache({
    key: CacheEnum.colorMode,
    storage: localStorage
  }) || webSettings.colorMode,
  setColorMode: (mode: ColorModeType) => {
    setCache({
      key: CacheEnum.colorMode,
      value: mode,
      storage: sessionStorage
    })
    return set(() => ({ colorMode: mode }))
  },
  // 展开的菜单
  openMenuBar: getCache({ key: CacheEnum.openMenu, storage: sessionStorage }) || [],
  setOpenMenuBar: (menu: string[]) => {
    setCache({
      key: CacheEnum.openMenu,
      value: menu,
      storage: sessionStorage
    })
    return set(() => ({ openMenuBar: menu }))
  },
  // 选中的菜单
  selectMenuBar: getCache({ key: CacheEnum.selectMenu, storage: sessionStorage }) || [],
  setSelectMenuBar: (menu: string[]) => {
    setCache({
      key: CacheEnum.selectMenu,
      value: menu,
      storage: sessionStorage
    })
    return set(() => ({ selectMenuBar: menu }))
  },
}))

export default useStore