import axios from "axios";

const baseURL = "/api";

// 请求
const http = axios.create({
  baseURL,
  timeout: 6000,
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    //请求头设置
    let token = localStorage.getItem("token") || "";
    config.headers!.Authorization = token;
    return config;
  },
  (err) => {
    console.log(err);
  }
);
// 响应拦截
http.interceptors.response.use(
  (arr) => {
    // 对响应码的处理
    switch (arr.status) {
      case 400:
        break;
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      case 422:
        break;
      case 500:
        break;
    }
    return arr.data;
  },
  (err) => {
    console.log(err);
  }
);
// 返出
export { http, baseURL };
