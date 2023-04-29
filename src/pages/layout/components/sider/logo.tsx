import { usePrefixCls } from 'src/hook/useConfig';
const Logo = () => {
  const prefixCls = usePrefixCls('layout-logo')
  return (
    <div className={`${prefixCls} flex flex-row`}  style={{margin: '10px',height:'60px'}}>
      <img width={60} src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" alt={"logo"} />
      <h3>{process.env.REACT_APP_TITLE}</h3>
    </div>
  )
}

export default Logo
