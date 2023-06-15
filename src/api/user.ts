import request from "../utils/request";
import { PagingType } from "../types/paging";

// 获取用户分页
export function getUserPage(params: PagingType) {
  return request({
    method: "get",
    url: "/users/list",
    params,
  });
}

// 获取用户详情
export function getUserDetailByToken() {
  return request({
    method: "get",
    url: "/users/detail",
  });
}
// 获取部门数据
export function getDeptData() {
  return request.get("/deptData");
}