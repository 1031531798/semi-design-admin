import { Spin } from "@douyinfe/semi-ui";

interface FallbackMessageProps {
  message?: string;
  description?: string;
}

const PageLoading = ({ message }: FallbackMessageProps) => {
  return (
    <div className={"flex flex-row align-middle justify-center"}>
      <Spin tip={message} />
    </div>
  );
};

export default PageLoading;
