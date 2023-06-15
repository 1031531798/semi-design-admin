import { usePrefixCls } from 'src/hook/useConfig';
import resultImage from '@/assets/image/result_finish.png'
import {Button} from "@douyinfe/semi-ui";
const PagesResult = () => {
  const prefixCls = usePrefixCls('pages-result')
  const className = prefixCls
  return (
    <div className={`${prefixCls} flex flex-col items-center justify-center w-full h-full`}>
      <img width={500} src={resultImage} alt={'结果图片'} />
      <h2>包裹已经打包完毕</h2>
      <div>
        <Button theme='solid' type='primary' style={{ marginRight: 8 }}>再次购买</Button>
        <Button>查看详情</Button>
      </div>
    </div>
  )
}

export default PagesResult
