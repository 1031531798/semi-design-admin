import { usePrefixCls } from "src/hook/useConfig";
import networkError from '@/assets/image/network_error.svg'
import { Button } from "@douyinfe/semi-ui";

const PagesException = () => {
  const prefixCls = usePrefixCls("pages-exception");
  return (
    <div
      className={`${prefixCls} flex flex-col items-center justify-center w-full h-full`}
    >
      <img width={500} src={networkError} alt={"网络异常"} />
      <h2>网络连接失败 请检查网络是否正常</h2>
      <p className={'text-gray-400'}>如果多次连接失败 请联系网站管理员解决问题</p>
      <div>
        <Button theme="solid" type="primary" style={{ marginRight: 8 }}>
          检查网络
        </Button>
        <Button>刷新</Button>
      </div>
    </div>
  );
};

export default PagesException;
