import { webConfig, cacheProps } from './type';
const webSettings: webConfig = {
  prefixCls: process.env.REACT_APP_PREFIXCLS,
  menuSetting: {
    width: 250
  },
}
const cacheSettings: cacheProps = {
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