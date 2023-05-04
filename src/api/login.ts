import request from "../utils/request";

export function loginUser(data: any) {
  return request.get("/login", data);
}

export function registerUser(data: any) {
  return request.post("users/register", data);
}
