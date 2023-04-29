import axios from "axios";
import { axiosInterceptors } from "./interceptors";

const request = axios.create({
  baseURL: "/api",
  timeout: 10000,
});
// 注册拦截器
axiosInterceptors(request);

export default request;
