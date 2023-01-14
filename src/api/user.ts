import request from "../utils/request";
import {PagingType} from "../types/paging";

// 获取用户分页
export function getUserPage (params: PagingType) {
    return request({
        method: 'get',
        url: '/users/list',
        params
    })
}
