import create from 'zustand'
import { setCache, getCache } from '../hook/useCache';
import { CacheEnum } from '../enum/cache';
import { MenuItem } from 'src/pages/layout/components/sider/data';

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
  setOpenMenuBar: (menu: string[]) => void,
  setSelectMenuBar: (menu: string[]) => void,
  setOpenRouter: (t: MenuItem[]) => void,
  setLocaleMode: (mode: string) => void,
}

const useStore = create<StoreState>((set) => ({
  menuFold: false,
  localeMode: 'zh_CN',
  openRouterList: getCache({
    key: CacheEnum.openRouteList,
    storage: sessionStorage
  }) || [],
  openMenuBar: getCache({ key: CacheEnum.openMenu, storage: sessionStorage }) || [],
  selectMenuBar: getCache({ key: CacheEnum.selectMenu, storage: sessionStorage }) || [],
  setOpenMenuBar: (menu: string[]) => {
    setCache({
      key: CacheEnum.openMenu,
      value: menu,
      storage: sessionStorage
    })
    return set(() => ({ openMenuBar: menu }))
  },
  setSelectMenuBar: (menu: string[]) => {
    setCache({
      key: CacheEnum.selectMenu,
      value: menu,
      storage: sessionStorage
    })
    return set(() => ({ selectMenuBar: menu }))
  },
  setLocaleMode: (mode: string) => set(() => ({ localeMode: mode })),
  changeMenuFold: () => set((state: StoreState) => ({ menuFold: !state.menuFold })),
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
  }
}))

export default useStore