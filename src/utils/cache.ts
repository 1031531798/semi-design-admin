import { cacheSettings } from "src/config/setting";
import { isNullOrUnDef } from "./is";
import { AesEncryption } from "./encryption";
export interface CacheConfig {
  key: string;
  storage: Storage;
  value?: any;
  iv?: string;
  hasEncrypt?: boolean;
  timeout?: null | number;
}
export const createStorage = ({
  storage = sessionStorage,
  key = cacheSettings.cacheCipher.key,
  iv = cacheSettings.cacheCipher.iv,
  timeout = cacheSettings.cacheTimeOut,
  hasEncrypt = false,
}: Partial<CacheConfig> = {}) => {
  if (hasEncrypt && [key.length, iv.length].some((item) => item !== 16)) {
    throw new Error("密钥或iv必须为16位!");
  }

  const encryption = new AesEncryption({ key, iv });

  /**
   * Cache class
   */
  const WebStorage = class WebStorage {
    private storage: Storage;
    private prefixKey?: string;
    private encryption: AesEncryption;
    private hasEncrypt: boolean;
    constructor() {
      this.storage = storage;
      this.encryption = encryption;
      this.hasEncrypt = hasEncrypt;
    }

    private getKey(key: string) {
      return `${key}`.toUpperCase();
    }

    /**
     * Set cache
     * @param {string} key
     * @param {*} value
     * @param {*} expire
     * @memberof Cache
     */
    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: !isNullOrUnDef(expire)
          ? new Date().getTime() + expire * 1000
          : null,
      });
      const stringifyValue = this.hasEncrypt
        ? this.encryption.encryptByAES(stringData)
        : stringData;
      this.storage.setItem(this.getKey(key), stringifyValue);
    }

    /**
     * get cache
     * @param {string} key
     * @param {*} def
     * @memberof Cache
     */
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;

      try {
        const decVal = this.hasEncrypt
          ? this.encryption.decryptByAES(val)
          : val;
        const data = JSON.parse(decVal);
        const { value, expire } = data;
        if (isNullOrUnDef(expire) || expire >= new Date().getTime()) {
          return value;
        }
        this.remove(key);
      } catch (e) {
        return def;
      }
    }

    /**
     * 根据key 删除缓存
     * @param {string} key
     * @memberof Cache
     */
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    /**
     * 删除所有缓存
     */
    clear(): void {
      this.storage.clear();
    }
  };
  return new WebStorage();
};
