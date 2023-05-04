import { useRoutes } from "react-router-dom";
import { routeList } from "./route";

export const RenderRouter = () => {
  return useRoutes(routeList);
};
