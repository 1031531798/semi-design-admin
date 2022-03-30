import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';
import { Select } from '@douyinfe/semi-ui';

const Index: FC = () => {
  const prefixCls = usePrefixCls('pages-detail')
  return (
    <div className={prefixCls}>
      <Select defaultValue='abc' style={{ width: 120 }}>
        <Select.Option value='abc'>抖音</Select.Option>
        <Select.Option value='hotsoon'>火山</Select.Option>
        <Select.Option value='jianying' disabled>剪映</Select.Option>
        <Select.Option value='xigua'>西瓜视频</Select.Option>
      </Select>
      <br /><br />
      <Select defaultValue='abc' disabled style={{ width: 120 }}>
        <Select.Option value='abc'>抖音</Select.Option>
        <Select.Option value='hotsoon'>火山</Select.Option>
      </Select>
      <br /><br />
      <Select placeholder='请选择业务线' style={{ width: 120 }}>
        <Select.Option value='abc'>抖音</Select.Option>
        <Select.Option value='hotsoon'>火山</Select.Option>
        <Select.Option value='jianying' disabled>剪映</Select.Option>
        <Select.Option value='xigua'>西瓜视频</Select.Option>
      </Select>
    </div>
  )
}

export default Index