import { MenuItem } from 'src/pages/layout/components/sider/data';
interface PathFindProps {
  menus: any[],
  path: string,
  keys?: string[]
  field?: string,
}
// 根据path 获取menu对象
export function findMenuByPath(config: PathFindProps): MenuItem[] {
  const { menus, keys = [], path } = config
  for (const menu of menus) {
    if (menu.path === path) {
      return [...keys, menu]
    }
    if (menu.items && menu.items.length > 0) {
      const result = findMenuByPath({ menus: menu.items, path, keys: [...keys, menu] })
      if (result.length === 0) {
        continue
      }
      return result
    }
  }
  return []
}
// 根据path 获取menu field
export function findMenuFieldByPath(config: PathFindProps): MenuItem[] {
  const { menus, keys = [], path, field = 'itemKey' } = config
  for (const menu of menus) {
    if (menu.path === path) {
      return [...keys, menu[field]]
    }
    if (menu.items && menu.items.length > 0) {
      const result = findMenuFieldByPath({ menus: menu.items, path, field, keys: [...keys, menu[field]] })
      if (result.length === 0) {
        continue
      }
      return result
    }
  }
  return []
}