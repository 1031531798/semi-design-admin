import {MouseEventHandler, ReactNode} from "react";

export type ContextMenuProps = {
    x: number;
    y: number;
    visible: boolean;
    menuList: ContextMenuItemProps[];
}

export type ContextMenuItemProps = {
    name: string;
    icon?: ReactNode;
    onClick: (e: MouseEventHandler<HTMLLIElement>) => void;
}
