import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
}
const IconCard = (props: IconProps) => {
  const { icon } = props;
  return (
    <>
      <div
        className={
          "p-3 border rounded-lg border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-700 flex flex-row items-center justify-center m-5"
        }
      >
        {icon}
      </div>
    </>
  );
};

export default IconCard;
