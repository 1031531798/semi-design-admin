import { AxiosInstance } from "axios";
import { requestCode } from "./requestCode";
import { Toast } from "@douyinfe/semi-ui";
import useStore from "../../store";

// axios 拦截器
export function axiosInterceptors(request: AxiosInstance) {
  // 请求拦截
  request.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      const { headers } = config;
      const { token } = useStore.getState();
      // 请求头添加token
      if (token && headers) {
        headers.token = token;
      }
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 响应拦截
  request.interceptors.response.use(
    (response) => {
      // 2xx 范围内的状态码都会触发该函数。
      return new Promise((resolve, reject) => {
        const { data } = response;
        const { code, message } = data;
        if (code === requestCode.RESULT_CODE_SUCCESS) {
          resolve(response);
        } else {
          Toast.error(message);
          reject(response);
        }
      });
    },
    function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
}
