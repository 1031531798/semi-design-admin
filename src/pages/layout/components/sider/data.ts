
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
  {itemKey: '001',text: 'web.menu.user', path: 'user' },
  {itemKey: '002',text: 'web.menu.labor'  },
  {itemKey: '003',text: 'web.menu.task', items: [
    {itemKey: '004',text: 'web.menu.task.manage'  },
    {itemKey: '005',text: 'web.menu.task.search'  },
  ]},
  
]