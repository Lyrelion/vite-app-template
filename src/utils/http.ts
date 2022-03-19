/**
 * 配置 axios 网络请求
 */

import axios from "axios";

const HOST = 'http://rap2api.taobao.org/app/mock/274700';

const http = axios.create({
  baseURL: HOST,  // url = base url + request url
  // withCredentials: true, // 如跨域请求时要带上cookie,则设置为 true
  timeout: 1000 * 10, // 请求超时时长 5秒
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
