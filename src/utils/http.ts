/**
 * 配置 axios 网络请求
 */

import Axios from 'axios';
// import { ElMessage } from 'element-plus';

const baseURL = 'http://rap2api.taobao.org/app/mock/274700';

const http = Axios.create({
  baseURL, // url = base url + request url
  timeout: 5000, // 请求超时 5s
});

// 前置拦截器（发起请求之前的拦截）
http.interceptors.request.use(
  (request) => {
    /**
     * 根据你的项目实际情况来对 request 做处理
     * 这里在请求头中添加了 token
     */

    // 如果有 token 就携带tokon
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      request.headers.common.Authorization = token;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
http.interceptors.response.use(
  (response) => {
    /**
     * 根据项目实际情况来对 response 和 error 做处理
     * 这里把响应数据直接取出了一层
     */
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      // ElMessage.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      // ElMessage.error(`${error}`);
      console.log(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default http;
