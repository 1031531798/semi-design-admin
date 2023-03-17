import { usePrefixCls } from 'src/hook/useConfig';
import {HomeCardList} from "./components/cardList";
import {Col, Row} from "@douyinfe/semi-ui";
import Overview from "./components/overview";
import Activity from "./components/activity";
import Payment from "./components/payment";

const Index = () => {
  const prefixCls = usePrefixCls('dashboard-workbench')

  return (
      <div className={prefixCls + ' p-2 h-full flex flex-col'}>
          <HomeCardList />
          <Row gutter={20} type="flex" className={'flex-grow pt-10 pb-10'}>
              <Col className={'flex flex-col flex-grow h-full'} span={16}>
                  <Overview />
                  <div className={'flex flex-grow flex-row'}>
                      <Activity />
                      <Payment />
                  </div>
              </Col>
              <Col span={8}>
                <div>asdasdsad</div>
              </Col>
          </Row>
      </div>
  )
}

export default Index
