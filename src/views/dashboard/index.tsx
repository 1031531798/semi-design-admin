import { usePrefixCls } from "src/hook/useConfig";
import { HomeCardList } from "./components/cardList";
import { Col, Row } from "@douyinfe/semi-ui";
import Overview from "./components/overview";
import Activity from "./components/activity";
import Payment from "./components/payment";
import Record from "@/views/dashboard/components/record";

const Dashboard = () => {
  const prefixCls = usePrefixCls("dashboard-workbench");

  return (
    <div className={prefixCls + " p-2 h-full flex flex-col"}>
      <HomeCardList />
      <Row gutter={20} type="flex" className={"flex-grow h-full pt-10 pb-10"}>
        <Col className={"flex flex-col flex-grow h-full"} span={16}>
          <Overview />
          <div className={"flex flex-grow flex-row h-1/2"}>
            <Activity />
            <Payment />
          </div>
        </Col>
        <Col span={8}>
          <Record />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
