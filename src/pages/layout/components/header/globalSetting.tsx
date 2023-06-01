import { IconSetting } from "@douyinfe/semi-icons";
import { Button, Tooltip, SideSheet, Switch, Typography  } from "@douyinfe/semi-ui";
import {useState} from "react";
import useSettingsStore from "@/store/settings";
import {useSetting} from "@/hook/useSetting";

const GlobalSetting = () => {
  const tooltipText = "平台设置";
  const [visibleSetting, setVisibleSetting] = useState(false)
  const {platformSetting,setPlatformSetting} = useSettingsStore()
  const {greyChange, weaknessChange} = useSetting()
  const {Title} = Typography
  const itemClass = "flex flex-row justify-between pb-4"
  function toggleSetting() {
    setVisibleSetting(!visibleSetting)
  }
  return (
    <>
      <Tooltip content={tooltipText}>
        <Button
          icon={<IconSetting></IconSetting>}
          onClick={toggleSetting}
          style={{ width: 40, marginRight: "20px" }}
        />
      </Tooltip>
      <SideSheet title={tooltipText} visible={visibleSetting} onCancel={toggleSetting}>
        <div className={itemClass}>
          <Title heading={6}>灰色模式</Title >
          <Switch checked={platformSetting.grayMode} onChange={greyChange} />
        </div>
        <div className={itemClass}>
          <Title heading={6}>色弱模式</Title >
          <Switch checked={platformSetting.weaknessMode} onChange={weaknessChange} />
        </div>
        <div className={itemClass}>
          <Title heading={6}>是否显示面包屑</Title >
          <Switch checked={platformSetting.showBreadcrumb} onChange={() => setPlatformSetting({showBreadcrumb: !platformSetting.showBreadcrumb})} />
        </div>
        <div className={itemClass}>
          <Title heading={6}>过渡动画</Title >
          <Switch checked={platformSetting.transition} onChange={() => setPlatformSetting({transition: !platformSetting.transition})} />
        </div>
      </SideSheet>
    </>
  );
};

export default GlobalSetting;
