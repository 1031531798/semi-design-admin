import { ReactNode, useEffect, useState } from "react";
import NumberAnimate from "../NumberAnimate";
import { Progress } from "@douyinfe/semi-ui";
import { numberSplit } from "@/utils/utils";

type ProgressCardProps = {
  title: string;
  value: number;
  total: number;
  color: string;
  icon: ReactNode;
};
// 进度条卡片
const ProgressCard = ({
  title,
  value,
  total,
  color,
  icon,
}: ProgressCardProps) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent((value / total) * 100);
  });
  return (
    <div className={"flex flex-row items-center"}>
      {icon}
      <div className={"h-full flex flex-col grow"}>
        <div className={"flex flex-row justify-between pb-2"}>
          <span>{title}</span>
          <div className={"flex flex-row font-bold"}>
            $
            <NumberAnimate
              className={"text-gray-100"}
              start={0}
              end={value}
              time={1000}
              formatter={numberSplit}
            />
            <span className={"ml-1 mr-1"}>/</span>
            <span className={"text-gray-400"}>${numberSplit(total)}</span>
          </div>
        </div>
        <Progress
          stroke={color}
          percent={percent}
          style={{ height: "8px" }}
        ></Progress>
      </div>
    </div>
  );
};
export default ProgressCard;
