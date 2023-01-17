import request from "../utils/request";

export function loginUser (data: any) {
    return request.post('/users/login', data)
}
