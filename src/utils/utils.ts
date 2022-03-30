import { isArray } from './is';
export function menuToHeavyArray (list: any[]) {
  if (isArray(list)) {
    const arr = Array.from(new Set(list))
    return Array.from(new Set(list))
  }
  return list
}