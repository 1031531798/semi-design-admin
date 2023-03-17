import { usePrefixCls } from 'src/hook/useConfig';
import {HomeCardList} from "./components/cardList";

const Index = () => {
  const prefixCls = usePrefixCls('dashboard-workbench')

  return (
    <div className={prefixCls + ' p-2'}>
      <HomeCardList />
    </div>
  )
}

export default Index
