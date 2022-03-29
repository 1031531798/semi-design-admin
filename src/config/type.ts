export interface webConfig {
  prefixCls: string | undefined;
  menuSetting: MenuConfig,
  defaultRouter: string
}

export type MenuConfig =  {
  width: string | number;
}
export interface cacheProps {
  cacheCipher: {key: string; iv: string},
  cacheTimeOut: number
}