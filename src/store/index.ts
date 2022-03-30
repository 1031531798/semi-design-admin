import create from 'zustand'
import { setCache, getCache } from '../hook/useCache';

export interface openMenuItem {
  path: string,
  itemKey: string,
  text: string
}
interface StoreState {
  localeMode: string,
  menuFold: boolean,
  openRouterList: openMenuItem[],
  setOpenRouter: Function,
  setLocaleMode: Function
}

const useStore = create<StoreState>((set) => ({
  menuFold: false,
  localeMode: 'zh_CN',
  openRouterList: getCache({
    key: 'OPEN_ROUTER_LIST',
    storage: sessionStorage
  }) || [],
  setLocaleMode: (mode: string) => set(() => ({ localeMode: mode })),
  changeMenuFold: () => set((state: StoreState) => ({ menuFold: !state.menuFold })),
  setOpenRouter: (pathList: openMenuItem[]) => {
    setCache({
      key: 'OPEN_ROUTER_LIST',
      value: pathList,
      storage: sessionStorage
    })
    return set((state: StoreState) => (
      {
        openRouterList: pathList
      }
    ))
  }
}))

export default useStore