import {MouseEventHandler, ReactNode, MutableRefObject} from "react";

export type ContextMenuProps = {
    ref: MutableRefObject<ContextMenuInstance>
    x: number;
    y: number;
    menuList?: ContextMenuItemProps[];
}

export type ContextMenuItemProps = {
    name: string;
    icon?: ReactNode;
    onClick: MouseEventHandler<HTMLLIElement>;
}
// 实例方法
export type ContextMenuInstance = {
    open: () => void;
    close: () => void;
}
