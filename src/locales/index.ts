import { MessageDescriptor, useIntl } from "react-intl";
import localesData from "./data";
interface MessageProps extends MessageDescriptor {
  id: string;
}
type FormatMessageProps = (descriptor: MessageProps) => string;
function getLocalesData() {
  const zh_CN: any = {};
  const en_GB: any = {};

  for (const key in localesData) {
    const str = localesData[key];
    zh_CN[key] = str.zh_CN;
    en_GB[key] = str.en_GB;
  }
  return {
    zh_CN,
    en_GB,
  };
}
export const localeConfig = getLocalesData();
export const useLocale = () => {
  const { formatMessage: _formatMessage, ...rest } = useIntl();
  const formatMessage: FormatMessageProps = _formatMessage;
  function getFormatText(id: string) {
    return formatMessage({ id });
  }
  return {
    ...rest,
    formatMessage,
    getFormatText,
  };
};
