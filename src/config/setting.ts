import { WebConfig, CacheProps, ColorModeType } from './type';
const webSettings: WebConfig = {
  prefixCls: process.env.REACT_APP_PREFIXCLS,
  menuSetting: {
    width: 250
  },
  colorMode: ColorModeType.light,
  defaultRouter: '/dashboard',
  defaultTabs: [{
    tab: 'web.menu.dashboard', itemKey: '/dashboard'
  }]
}
const cacheSettings: CacheProps = {
  cacheCipher: {
    key: '_11111000001111@',
    iv: '@11111000001111_',
  },
  cacheTimeOut: 60 * 60 * 24 * 7

}
export {
  webSettings,
  cacheSettings
}
