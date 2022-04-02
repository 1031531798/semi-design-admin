import create from 'zustand'
import { setCache, getCache } from '../hook/useCache';
import { CacheEnum } from '../enum/cache';

export interface openMenuItem {
  path: string,
  itemKey: string,
  text: string
}
interface StoreState {
  localeMode: string,
  menuFold: boolean,
  openRouterList: openMenuItem[],
  setOpenRouter: (t: openMenuItem[]) => void,
  setLocaleMode: (mode: string) => void,
}

const useStore = create<StoreState>((set) => ({
  menuFold: false,
  localeMode: 'zh_CN',
  openRouterList: getCache({
    key: CacheEnum.openRouteList,
    storage: sessionStorage
  }) || [],
  setLocaleMode: (mode: string) => set(() => ({ localeMode: mode })),
  changeMenuFold: () => set((state: StoreState) => ({ menuFold: !state.menuFold })),
  setOpenRouter: (pathList: openMenuItem[]) => {
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