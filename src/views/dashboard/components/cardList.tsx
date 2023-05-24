// 仪表盘 卡片列表
import { Col, Row } from "@douyinfe/semi-ui";
import NumberCard from "../../../components/card/numberCard";
import { IoWallet } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";

export const HomeCardList = () => {
  const cards = [
    {
      icon: <IoWallet size={30} color={"#1fcb4f"} />,
      title: "余额",
      value: "41210",
    },
    {
      icon: <GiReceiveMoney size={30} color={"#1fcb4f"} />,
      title: "收益",
      value: "3522",
    },
    {
      icon: <GiPayMoney size={30} color={"#1fcb4f"} />,
      title: "费用",
      value: "5819",
    },
    {
      icon: <GiTakeMyMoney size={30} color={"#1fcb4f"} />,
      title: "存款",
      value: "30020",
    },
  ];
  return (
    <>
      <Row type="flex" justify="space-between">
        {cards.map((item) => (
          <Col style={{ marginBottom: '10px'}} xl={5} lg={12} md={12} sm={24} xs={24} key={item.title}>
            <NumberCard
              icon={item.icon}
              value={item.value}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
