import { IconLanguage } from "@douyinfe/semi-icons";
import { Select } from "@douyinfe/semi-ui";
import useStore from "../../../../store";
import { isString } from "@/utils/is";

const LocaleMode = () => {
  const setLocaleMode = useStore((state) => state.setLocaleMode);
  function changeLocale(
    value: string | number | any[] | Record<string, any> | undefined
  ) {
    if (isString(value)) {
      setLocaleMode(value);
    }
  }
  return (
    <Select
      defaultValue="zh_CN"
      onChange={changeLocale}
      style={{ width: 120, marginRight: 10 }}
      insetLabel={<IconLanguage />}
    >
      <Select.Option value="zh_CN">中文</Select.Option>
      <Select.Option value="en_GB">English</Select.Option>
    </Select>
  );
};

export default LocaleMode;
