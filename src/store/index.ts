import create from 'zustand'
import {setCache, getCache} from '../hook/useCache';

export interface openMenuItem {
  path: string,
  itemKey: string,
  text: string
}
interface StoreState {
  menuFold: boolean,
  openRouterList: openMenuItem[],
  setOpenRouter: Function
}

const useStore = create<StoreState>((set) => ({
  menuFold: false,
  openRouterList: getCache({
    key: 'OPEN_ROUTER_LIST',
    storage: sessionStorage
  }) || [],
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