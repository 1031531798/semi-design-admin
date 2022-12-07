import request from "../utils/request";

export function loginUser (data: any) {
    return request.post('/websites-server/rest/auth/token', data)
}
