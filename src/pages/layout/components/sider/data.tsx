import {
  IconAppCenter,
  IconUserSetting,
  IconArticle,
  IconAlignJustify,
  IconFavoriteList,
  IconUploadError,
  IconGallery,
  IconSetting,
} from "@douyinfe/semi-icons";
import React from "react";
export interface MenuItem {
  itemKey: string;
  text: string;
  icon?: React.ReactNode;
  path?: string;
  items?: MenuItem[];
  link?: string;
  component?: React.ComponentType<any>;
}

export const menuList: MenuItem[] = [
  {
    itemKey: "1",
    text: "web.menu.dashboard",
    icon: <IconAppCenter />,
    path: "/dashboard",
  },
  {
    itemKey: "3",
    text: "web.menu.page",
    icon: <IconGallery />,
    path: "/pages",
    items: [
      {
        itemKey: "301",
        text: "web.menu.page.form",
        icon: <IconArticle />,
        path: "/pages/form",
      },
      {
        itemKey: "302",
        text: "web.menu.page.detail",
        icon: <IconAlignJustify />,
        path: "/pages/detail",
      },
      {
        itemKey: "303",
        text: "web.menu.page.result",
        icon: <IconFavoriteList />,
        path: "/pages/result",
      },
      {
        itemKey: "304",
        text: "web.menu.page.error",
        icon: <IconUploadError />,
        path: "/pages/exception",
      },
    ],
  },
  {
    itemKey: "2",
    text: "web.menu.user",
    icon: <IconUserSetting />,
    path: "/user",
  },
  {
    itemKey: "4",
    text: "web.menu.system",
    icon: <IconSetting />,
    path: "/sys",
    items: [
      {
        itemKey: "401",
        text: "web.menu.system.menu",
        icon: <IconArticle />,
        path: "/sys/menu",
      },
    ],
  },
];
