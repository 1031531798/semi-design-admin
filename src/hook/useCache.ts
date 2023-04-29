import { isString } from "../utils/is";
import { CacheConfig, createStorage } from "../utils/cache";

export function getCache(config: CacheConfig) {
  const { key } = config;
  if (isString(key)) {
    return createStorage(config).get(key);
  }
}

export function setCache(config: CacheConfig) {
  const { key, value } = config;
  if (isString(key)) {
    createStorage(config).set(key, value);
  }
}

function useCache() {
  return {
    getCache,
    setCache,
  };
}

export default useCache;
