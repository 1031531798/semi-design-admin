import create from 'zustand'

export interface routeItem {
  
}
interface StoreState {
  menuFold: boolean,
  menuBreadcrumb: routeItem[]
}
const useStore = create<StoreState>((set) => ({
  menuFold: false,
  menuBreadcrumb: [],
  changeMenuFold: () => set((state: StoreState) => ({ menuFold: !state.menuFold  })),
}))

export {useStore}