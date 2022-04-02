export interface webConfig {
  prefixCls: string | undefined;
  menuSetting: MenuConfig,
  defaultRouter: string,
  colorMode: ColorModeType
}

export type MenuConfig =  {
  width: string | number;
}
export interface cacheProps {
  cacheCipher: {key: string; iv: string},
  cacheTimeOut: number
}
export enum ColorModeType {
  light = 'light',
  dark = 'dark'
}