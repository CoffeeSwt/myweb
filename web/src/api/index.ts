// 封装页面请求
import request from "@/utils/request.js";

export const api = {
  //   默认get请求
  testGet: (params: any) => request({ url: "/user", params }),
  login: (body: any) =>
    request({ url: "auth/login", method: "post", data: body }),
};
