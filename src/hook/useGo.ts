import { useNavigate } from "react-router-dom";

type GoParams = {
  path: string;
};

// 跳转对象
export function useGo() {
  const navigate = useNavigate();
  const go = (params: GoParams) => {
    const { path } = params;
    navigate(path);
  };
  return {
    go,
  };
}
