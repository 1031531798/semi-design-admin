import { usePrefixCls } from "src/hook/useConfig";
import { Steps, Descriptions, Tag } from "@douyinfe/semi-ui";
import "./index.scss";
const PagesDetail = () => {
  const prefixCls = usePrefixCls("pages-detail");
  const data = [
    { key: "创建人", value: "admin" },
    { key: "订单号", value: "WJ134578890932118" },
    { key: "会员等级", value: "3级" },
    { key: "订单类型", value: <Tag style={{ margin: 0 }}>电商</Tag> },
    { key: "订单状态", value: "已完成" },
    { key: "创建时间", value: "2023-11-12 11:22:32" },
  ];
  const goodsData = [
    { key: "商品名称", value: "小米10" },
    { key: "商品编号", value: "WJ134578890932118" },
    { key: "商品类型", value: "电子产品" },
    { key: "商品价格", value: "￥2999" },
    { key: "商品数量", value: "1" },
    { key: "商品总价", value: "￥2999" },
    { key: "商品状态", value: "已完成" },
    { key: "创建时间", value: "2023-11-12 11:22:32" },
    { key: "商品图片", value: <img src={"https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi12pro-dimensity14svnx/3387.png"} alt={'小米10'} className={'w-40'} />},
    { key: "商品描述", value: "小米10是小米公司旗下的一款智能手机，于2020年2月13日在北京发布。"},
    { key: "商品详情", value: "小米10是小米公司旗下的一款智能手机，于2020年2月13日在北京发布。"},
    { key: "商品参数", value: "6.5寸 16G运行内存 256G存储空间 银色 5G双卡双待手机"}
  ]
  const stepsData = [
    {
      title: "订单提交",
      description: (
        <div>
          <span>admin 发起提交</span>
          <br />
          <span>2023-11-12 11:22:32</span>
        </div>
      ),
    },
    { title: "订单审核", description: "正在等待管理员进行审核" },
    { title: "订单出库" },
    { title: "订单派送" },
    { title: "用户收货" },
    { title: "订单完成" },
  ];
  const style = {
    boxShadow: "var(--semi-shadow-elevated)",
    backgroundColor: "var(--semi-color-bg-2)",
    borderRadius: "4px",
    padding: "10px",
    marginRight: "20px",
  };
  return (
    <div className={prefixCls}>
      <Descriptions
        data={data}
        row
        style={style}
        className={"description-form"}
      />
      <Steps type="basic" size="small" current={1} className={"p-6"}>
        {stepsData.map((item) =>  {
          return (
            <Steps.Step
              key={item.title}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Steps>
      <div>
        <Descriptions align="center" data={goodsData} style={style} />
      </div>
    </div>
  );
};

export default PagesDetail;
