import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'

// 创建axios实例
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const { data, status } = response
    
    if (status === 200) {
      // 根据后端接口规范调整
      if (data.code === 0 || data.success) {
        return data.data || data
      } else {
        message.error(data.message || '请求失败')
        return Promise.reject(new Error(data.message || '请求失败'))
      }
    }
    
    return response
  },
  (error) => {
    // 对响应错误做点什么
    const { response } = error
    
    if (response) {
      switch (response.status) {
        case 401:
          message.error('未授权，请重新登录')
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          message.error('拒绝访问')
          break
        case 404:
          message.error('请求地址出错')
          break
        case 500:
          message.error('服务器内部错误')
          break
        default:
          message.error('网络错误')
      }
    } else {
      message.error('网络连接异常')
    }
    
    return Promise.reject(error)
  }
)

export default request