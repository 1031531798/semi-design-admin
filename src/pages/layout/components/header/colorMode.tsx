import { Button, Tooltip } from "@douyinfe/semi-ui";
import { useMemo } from "react";
import useStore from "../../../../store";
import { ColorModeType } from "../../../../config/type";
import { IconMoon, IconSun } from "@douyinfe/semi-icons";
import { useLocale } from "../../../../locales";

const ColorMode = () => {
  const setMode = useStore((state) => state.setColorMode);
  const colorMode = useStore((state) => state.colorMode);
  const { formatMessage } = useLocale();
  // 变更 semi ui 暗黑模式
  function setSemiColorMode() {
    const body = document.body;
    if (colorMode === ColorModeType.dark) {
      // semi ui 暗黑模式
      body.setAttribute("theme-mode", "dark");
      // tailwindcss 暗黑模式
      document.documentElement.classList.add("dark");
    } else {
      body.removeAttribute("theme-mode");
      document.documentElement.classList.remove("dark");
    }
  }
  // 设置mode icon
  const getModeIcon = useMemo(() => {
    setSemiColorMode();
    return colorMode === ColorModeType.light ? <IconMoon /> : <IconSun />;
  }, [colorMode]);
  // 设置对应mode 提示
  const getModeTooltip = useMemo(() => {
    return colorMode === ColorModeType.light
      ? formatMessage({ id: "web.setting.color-dark" })
      : formatMessage({ id: "web.setting.color-light" });
  }, [colorMode, formatMessage]);
  function changeColorMode() {
    const mode =
      colorMode === ColorModeType.light
        ? ColorModeType.dark
        : ColorModeType.light;
    setMode(mode);
  }

  return (
    <Tooltip content={getModeTooltip}>
      <Button
        icon={getModeIcon}
        onClick={changeColorMode}
        style={{ width: 40, marginRight: 20 }}
      />
    </Tooltip>
  );
};

export default ColorMode;
