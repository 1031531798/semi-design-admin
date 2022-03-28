
export interface MenuItem {
  itemKey: string
  text: string
  icon?: React.ReactNode
  path?: string
  items?: MenuItem[],
  link?: string,
  component?: React.ComponentType<any>
}

export const menuList: MenuItem[] = [
  {
    itemKey: '1', text: 'web.menu.dashboard', items: [
      { itemKey: '101', text: 'web.menu.dashboard.workbench', path: '/workbench' },
      { itemKey: '102', text: 'web.menu.dashboard.analyse', path: '/analyse' },
    ]
  },
  { itemKey: '2', text: 'web.menu.user', path: 'user' },
  {
    itemKey: '3', text: 'web.menu.page', items: [
      { itemKey: '301', text: 'web.menu.page.form', path: '/pages/form' },
      { itemKey: '302', text: 'web.menu.page.detail', path: '/pages/detail' },
      { itemKey: '303', text: 'web.menu.page.result', path: '/pages/result' },
      { itemKey: '304', text: 'web.menu.page.error', path: '/pages/error' },
    ]
  },
]