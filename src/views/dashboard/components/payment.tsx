import { Card } from "@douyinfe/semi-ui";
import ProgressCard from "../../../components/card/progressCard";
import IconCard from "../../../components/card/iconCard";
import { IconHorn, IconDesktop } from "@douyinfe/semi-icons";
import { BiChip, BiDetail } from "react-icons/bi";

const Payment = () => {
  function renderProgress() {
    const progress = [
      {
        title: "Promotion Pay",
        value: 400,
        total: 1000,
        icon: (
          <IconCard
            icon={
              <IconHorn size={"extra-large"} style={{ color: "#1fcb4f" }} />
            }
          />
        ),
      },
      {
        title: "Software Pay",
        value: 800,
        total: 1200,
        icon: (
          <IconCard
            icon={
              <IconDesktop size={"extra-large"} style={{ color: "#1fcb4f" }} />
            }
          />
        ),
      },
      {
        title: "Hardware Pay",
        value: 1200,
        total: 1800,
        icon: (
          <IconCard icon={<BiChip size={24} style={{ color: "#1fcb4f" }} />} />
        ),
      },
      {
        title: "Total Pay",
        value: 2400,
        total: 4000,
        icon: (
          <IconCard
            icon={<BiDetail size={24} style={{ color: "#1fcb4f" }} />}
          />
        ),
      },
    ];
    return progress.map((item) => {
      const color = item.value / item.total > 0.5 ? "#1fcb4f" : "#F6BD16";
      return (
        <ProgressCard
          key={item.title}
          title={item.title}
          value={item.value}
          total={item.total}
          color={color}
          icon={item.icon}
        />
      );
    });
  }

  return (
    <Card
      title="Payment"
      className={"w-full flex flex-col flex-grow mt-5"}
      bordered={false}
      headerLine={false}
      bodyStyle={{
        width: "100%",
        height: "100%",
      }}
    >
      {renderProgress()}
    </Card>
  );
};
export default Payment;
