import {Avatar, Card} from "@douyinfe/semi-ui";
import InfiniteScroll from 'react-infinite-scroller';

const DashBoardRecord = (props: any) => {
  const recordData = [
    {
      icon: <Avatar src={"https://sf3-cdn-tos.bdxiguastatic.com/img/user-avatar/2x_d62d2fe9fee5f959835e70b676bdf69d~240x240.image"} />,
      title: "英伟达",
      name: '3080Ti 显卡',
      price: '4999',
      time: '2023-05-18 12:00:00'
    },
    {
      icon: <Avatar src={"https://play-lh.googleusercontent.com/C1tISqYgtW_ejAmnGzvepbaYt7NJLagPelCZ_lzNv06RJPQgBx1_q3VX67z9wc48EgY"} />,
      title: "哔哩哔哩",
      name: '年度大会员',
      price: '199',
      time: '2023-05-18 12:00:00'
    },
    {
      icon: <Avatar src={"https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/89/16/52/891652bf-b587-c9e4-b2a6-15d908e7b60e/source/256x256bb.jpg"} />,
      title: "网易",
      name: 'UU加速器白金会员12个月',
      price: '248',
      time: '2023-05-28 12:00:00'
    },
    {
      icon: <Avatar src={"https://www.fortress.com.hk/_ui/responsive/theme-ftrhk/images/ftrhk/brand/Sony.jpg"} />,
      title: "SONY",
      name: 'PS5 次世代游戏机',
      price: '4999',
      time: '2023-05-28 12:00:00'
    },
    {
      icon: <Avatar src={"https://play-lh.googleusercontent.com/MQGh69wPvBb3E5wd-Yt1k_lv3MIr4e_e26irASzmNtIvlLn_SQE7Z_ki-EVWayCTG-E=w240-h480-rw"} />,
      title: "淘宝",
      name: '电动升降桌',
      price: '1999',
      time: '2023-05-28 12:00:00'
    },
    {
      icon: <Avatar src={"https://play-lh.googleusercontent.com/MQGh69wPvBb3E5wd-Yt1k_lv3MIr4e_e26irASzmNtIvlLn_SQE7Z_ki-EVWayCTG-E=w240-h480-rw"} />,
      title: "淘宝",
      name: '人体工学椅',
      price: '1099',
      time: '2023-05-28 12:00:00'
    },
    {
      icon: <Avatar src={"https://yt3.googleusercontent.com/ytc/AGIKgqOGwUa0cjYdRXYzQJAcDPmZafYcUDdaDYR9Caomww=s900-c-k-c0x00ffffff-no-rj"} />,
      title: "APPLE",
      name: 'MacBook AIR M2 24G',
      price: '4999',
      time: '2023-05-28 12:00:00'
    },

  ]
  function renderList () {
    return recordData.map((item) => {
      return (
        <div className={"flex flex-row justify-between items-center p-2"} key={item.name}>
          <div className={"flex flex-row items-center"}>
            {item.icon}
            <div className={"ml-2"}>
              <div className={"text-sm"}>{item.title}</div>
              <div className={"text-xs"}>{item.name}</div>
            </div>
          </div>
          <div className={"text-sm"}>￥{item.price}</div>
        </div>
      )
    })
  }
  function loadMore () {
    console.log('loadMore')
  }
  return (
    <Card
      title="账单"
      className={"w-full h-full flex flex-col flex-grow"}
      headerLine={false}
      bodyStyle={{
        display: 'flex',
        flexGrow: 1,
        width: "100%",
        height: "0%",
      }}
    >
      <InfiniteScroll loadMore={loadMore} className={'w-full h-full overflow-y-auto'}>
        {renderList()}
      </InfiniteScroll>
    </Card>
  )
}
export default DashBoardRecord;
