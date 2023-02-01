import { Spin } from '@douyinfe/semi-ui'

interface FallbackMessageProps {
	message?: string
	description?: string
}

const PageLoading = (
    {
        message,
    }: FallbackMessageProps
) => {
	return (
		<div className={'flex-row-center'}>
			<Spin tip={message} />
		</div>
	)
}

export default PageLoading
