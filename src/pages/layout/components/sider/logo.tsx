import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';
const Index = () => {
  const prefixCls = usePrefixCls('layout-logo')
  return (
    <div className={`${prefixCls} flex-row`}  style={{color: 'black', margin: '10px'}}>
      <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" alt={"logo"} />
      <h3>{process.env.REACT_APP_TITLE}</h3>
    </div>
  )
}

export default Index
