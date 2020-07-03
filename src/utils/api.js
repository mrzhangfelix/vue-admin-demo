import axios from 'axios'
import {Message} from 'element-ui'

//全局拦截
axios.interceptors.request.use(config => {
    config.baseURL = 'http://49.232.206.221:8059'
    // config.baseURL = '/'
    config.baseURL = '/api'
    config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
    // config.timeout = 6000
    let token = sessionStorage.getItem('token')
    if (token) {
      config.headers = {
        'access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return config;
  },
  err => {
    Message.error({message: '请求超时!'});
    // return Promise.resolve(err);
  })
axios.interceptors.response.use(
  data => {
    // 内部服务器错误
    if (data.status && data.status == 500) {
      Message.error({message: '内部服务器错误' + data.data.message});
      return;
    }
    if (data.data.msg) {
      Message.success({message: data.data.msg});
    }
    return data;
  },
  err => {
    if ((typeof err.response) == 'undefined') {
      Message.error({message: '未找到返回信息，请重新登陆'});
      return new Error('未登录');
    } else if (err.response.status == 504 || err.response.status == 404) {
      Message.error({message: '网关超时或服务未找到'});
    } else if (err.response.status == 403) {
      Message.error({message: '权限不足,请联系管理员!'});
    } else if (err.response.status == 401) {
      Message.error({message: '401:未授权' + err.response.data.message});
      this.$router.push({path: '/'});
    } else {
      if (err.response.data.msg) {
        Message.error({message: err.response.data.message});
      } else {
        Message.error({message: '未知错误!'});
      }
    }
    // return Promise.resolve(err);
  })
let base = '';
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    headers: {
    }
  });
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    headers: {
    }
  });
}
