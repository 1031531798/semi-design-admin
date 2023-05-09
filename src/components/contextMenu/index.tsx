// 右键菜单 组件
import { ContextMenuProps } from "./types";
import { useMemo } from "react";
import "./index.scss";

const ContextMenu = (props: ContextMenuProps) => {
  const { x = 0, y = 0, visible = false, menuList = [] } = props;

  const getStyle = useMemo(() => {
    return {
      left: x,
      top: y,
    };
  }, [x, y]);
  return (
    <div className={"contextmenu absolute"} style={getStyle}>
      <ul>
        {menuList.map((item) => {
          return (
            <li key={item.name} className={'flex flex-row items-center'}>
              {item.icon}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContextMenu;
