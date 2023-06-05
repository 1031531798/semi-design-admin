import create from 'zustand'
import {UserType} from "@/types/user";


interface SettingsStoreState {
  platformSetting: PlatformSetting
  setPlatformSetting: (info?: Partial<PlatformSetting>) => void
}

type PlatformSetting = {
  showBreadcrumb: boolean;
  menuWidth: number;
  grayMode: boolean;
  weaknessMode: boolean;
  transition: boolean;
  [key: string]: any;
}

const useSettingsStore = create<SettingsStoreState>((set) => ({
  platformSetting: {
    showBreadcrumb: true,
    menuWidth: 200,
    grayMode: false,
    weaknessMode: false,
    transition: true
  },
  setPlatformSetting: (info: Partial<PlatformSetting> = {}) => set((state) => ({ platformSetting: {...state.platformSetting, ...info} })),
}))

export default useSettingsStore
