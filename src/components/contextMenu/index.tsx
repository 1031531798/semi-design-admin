// 右键菜单 组件
import { ContextMenuProps } from "./types";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import "./index.scss";

const ContextMenu = forwardRef(function ContextMenu (props: ContextMenuProps, ref)  {
  const { x = 0, y = 0, menuList = [] } = props;
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      document.addEventListener("click", close);
    }
    return () => {
      document.removeEventListener('click', close)
    }
  }, [visible]);
  const getStyle = useMemo(() => {
    return {
      display: visible ? "flex" : "none",
      left: x,
      top: y,
      boxShadow: "var(--semi-shadow-elevated)",
      background: "var(--semi-color-bg-3)",
    };
  }, [x, y, visible]);
  function open() {
    setVisible(true);
  }
  function close() {
    setVisible(false);
  }
  // 暴露实例方法
  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    };
  });
  return (
    <div className={"contextmenu absolute p-2"} style={getStyle}>
      <ul>
        {menuList.map((item) => {
          return (
            <li
              key={item.name}
              className={"flex flex-row items-center"}
              onClick={(e) => {
                item.onClick(e);
                setVisible(false);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default ContextMenu;
