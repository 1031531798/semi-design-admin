import {
  IconAppCenter, IconBriefcase, IconHistogram, IconUserSetting, IconArticle,
  IconAlignJustify, IconFavoriteList, IconUploadError, IconGallery
} from '@douyinfe/semi-icons';
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
    itemKey: '1', text: 'web.menu.dashboard', icon: IconAppCenter, items: [
      { itemKey: '101', text: 'web.menu.dashboard.workbench', icon: IconBriefcase, path: '/workbench' },
      { itemKey: '102', text: 'web.menu.dashboard.analyse', icon: IconHistogram, path: '/analyse' },
    ]
  },
  {
    itemKey: '3', text: 'web.menu.page', icon: IconGallery, items: [
      { itemKey: '301', text: 'web.menu.page.form', icon: IconArticle, path: '/pages/form' },
      { itemKey: '302', text: 'web.menu.page.detail', icon: IconAlignJustify, path: '/pages/detail' },
      { itemKey: '303', text: 'web.menu.page.result', icon: IconFavoriteList, path: '/pages/result' },
      { itemKey: '304', text: 'web.menu.page.error', icon: IconUploadError, path: '/pages/error' },
    ]
  },
  { itemKey: '2', text: 'web.menu.user', icon: IconUserSetting, path: '/user' }
]