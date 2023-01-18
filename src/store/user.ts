import create from 'zustand'

import {UserType} from "../types/user";

interface UserStoreState {
  userInfo: UserType | undefined
  setUserInfo: (userInfo: UserType) => void

}

const useUserStore = create<UserStoreState>((set) => ({
  // 用户详情
  userInfo: undefined,
  setUserInfo: (info: UserType) => set(() => ({ userInfo: info })),

}))

export default useUserStore
