import useSettingsStore from "@/store/settings";

type UseSettingReturnType = {
  greyChange: (value: boolean) => void;
  weaknessChange: (value: boolean) => void;
}
export function useSetting(): UseSettingReturnType {
  const { setPlatformSetting } = useSettingsStore()

  /** 灰色模式设置 */
  const greyChange = (value: boolean): void => {
    console.log(value)
    toggleClass(value, "html-grey", document.querySelector("html"));
    setPlatformSetting({
      grayMode: value
    });
  };
  /** 色弱模式设置 */
  const weaknessChange = (value: boolean): void => {
    toggleClass(
      value,
      "html-weakness",
      document.querySelector("html")
    );
    setPlatformSetting({
      weaknessMode: value
    });
  };
  return {
    greyChange,
    weaknessChange
  }
}
function toggleClass(flag: boolean, clsName: string, target?: HTMLElement | null) {
  const targetEl = target || document.body;
  let { className } = targetEl;
  className = className.replace(clsName, "").trim();
  targetEl.className = flag ? `${className} ${clsName} ` : className;
}
