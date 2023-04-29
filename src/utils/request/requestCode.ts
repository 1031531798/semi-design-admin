// 请求 状态code
export enum requestCode {
  RESULT_CODE_SUCCESS = 200, // 成功处理请求
  RESULT_CODE_BAD_REQUEST = 412, // 请求错误
  RESULT_CODE_NOT_LOGIN = 402, // 未登录
  RESULT_CODE_PARAM_ERROR = 406, // 传参错误
  RESULT_CODE_SERVER_ERROR = 500, // 服务器错误
}
