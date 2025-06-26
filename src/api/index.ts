import request from '@/utils/request'

// 用户相关API
export const userApi = {
  // 获取用户信息
  getUserInfo: () => request.get('/user/info'),
  
  // 用户登录
  login: (data: { username: string; password: string }) => 
    request.post('/user/login', data),
  
  // 用户注册
  register: (data: { username: string; password: string; email: string }) => 
    request.post('/user/register', data),
  
  // 用户登出
  logout: () => request.post('/user/logout'),
  
  // 更新用户信息
  updateUserInfo: (data: any) => request.put('/user/info', data),
}

// 示例API
export const exampleApi = {
  // 获取列表数据
  getList: (params?: any) => request.get('/example/list', { params }),
  
  // 获取详情
  getDetail: (id: string) => request.get(`/example/${id}`),
  
  // 创建数据
  create: (data: any) => request.post('/example', data),
  
  // 更新数据
  update: (id: string, data: any) => request.put(`/example/${id}`, data),
  
  // 删除数据
  delete: (id: string) => request.delete(`/example/${id}`),
}

// 文件上传API
export const uploadApi = {
  // 上传文件
  uploadFile: (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    return request.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}