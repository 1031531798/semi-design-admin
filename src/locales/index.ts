import { MessageDescriptor, useIntl } from 'react-intl'
import zh_CN from './zh-CN/index';
import en_GB from './en-GB/index';
interface MessageProps extends MessageDescriptor {
	id: string
}
type FormatMessageProps = (descriptor: MessageProps) => string

export const localeConfig = {
	zh_CN: zh_CN,
	en_GB: en_GB
}
export const useLocale = () => {
	const { formatMessage: _formatMessage, ...rest } = useIntl()
	const formatMessage: FormatMessageProps = _formatMessage
	function getFormatText (id: string) {
		return formatMessage({id})
	}
	return {
		...rest,
		formatMessage,
		getFormatText
	}
}
