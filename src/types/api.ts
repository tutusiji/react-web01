// API 相关类型定义

// 基础 API 响应类型
export interface BaseApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
  timestamp?: string
}

// 分页响应类型
export interface PaginatedResponse<T = any> {
  list: T[]
  pagination: {
    current: number
    pageSize: number
    total: number
    totalPages: number
  }
}

// 用户相关 API 类型
export namespace UserAPI {
  // 登录请求
  export interface LoginRequest {
    username: string
    password: string
    captcha?: string
    remember?: boolean
  }

  // 登录响应
  export interface LoginResponse {
    token: string
    refreshToken: string
    userInfo: {
      id: string
      username: string
      name: string
      email: string
      avatar?: string
      role: string
      permissions: string[]
    }
    expiresIn: number
  }

  // 注册请求
  export interface RegisterRequest {
    username: string
    password: string
    confirmPassword: string
    email: string
    name: string
    captcha: string
  }

  // 用户信息更新请求
  export interface UpdateUserRequest {
    name?: string
    email?: string
    avatar?: string
    phone?: string
    bio?: string
  }

  // 密码修改请求
  export interface ChangePasswordRequest {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }
}

// 文件上传相关 API 类型
export namespace UploadAPI {
  // 上传响应
  export interface UploadResponse {
    url: string
    filename: string
    size: number
    type: string
    hash?: string
  }

  // 批量上传响应
  export interface BatchUploadResponse {
    success: UploadResponse[]
    failed: {
      filename: string
      error: string
    }[]
  }
}

// 示例业务 API 类型
export namespace ExampleAPI {
  // 列表项类型
  export interface ListItem {
    id: string
    title: string
    description: string
    status: 'active' | 'inactive' | 'pending'
    createdAt: string
    updatedAt: string
    author: {
      id: string
      name: string
      avatar?: string
    }
    tags: string[]
    viewCount: number
    likeCount: number
  }

  // 列表查询参数
  export interface ListQuery {
    page?: number
    pageSize?: number
    keyword?: string
    status?: string
    tags?: string[]
    authorId?: string
    sortBy?: 'createdAt' | 'updatedAt' | 'viewCount' | 'likeCount'
    sortOrder?: 'asc' | 'desc'
    dateRange?: [string, string]
  }

  // 创建/更新请求
  export interface CreateOrUpdateRequest {
    title: string
    description: string
    content: string
    status: 'active' | 'inactive' | 'pending'
    tags: string[]
    coverImage?: string
    metadata?: Record<string, any>
  }

  // 详情响应
  export interface DetailResponse extends ListItem {
    content: string
    coverImage?: string
    metadata?: Record<string, any>
    comments: {
      id: string
      content: string
      author: {
        id: string
        name: string
        avatar?: string
      }
      createdAt: string
      replies: any[]
    }[]
  }
}

// 系统配置相关 API 类型
export namespace SystemAPI {
  // 系统信息
  export interface SystemInfo {
    version: string
    buildTime: string
    environment: string
    features: {
      name: string
      enabled: boolean
      description: string
    }[]
    statistics: {
      userCount: number
      activeUsers: number
      totalRequests: number
      errorRate: number
    }
  }

  // 配置项
  export interface ConfigItem {
    key: string
    value: any
    type: 'string' | 'number' | 'boolean' | 'object' | 'array'
    description: string
    category: string
    editable: boolean
  }

  // 日志查询参数
  export interface LogQuery {
    level?: 'debug' | 'info' | 'warn' | 'error'
    module?: string
    startTime?: string
    endTime?: string
    keyword?: string
    page?: number
    pageSize?: number
  }

  // 日志项
  export interface LogItem {
    id: string
    timestamp: string
    level: 'debug' | 'info' | 'warn' | 'error'
    module: string
    message: string
    details?: any
    userId?: string
    ip?: string
    userAgent?: string
  }
}

// 通知相关 API 类型
export namespace NotificationAPI {
  // 通知项
  export interface NotificationItem {
    id: string
    type: 'system' | 'user' | 'business'
    level: 'info' | 'success' | 'warning' | 'error'
    title: string
    content: string
    data?: any
    read: boolean
    createdAt: string
    expiresAt?: string
  }

  // 查询参数
  export interface NotificationQuery {
    type?: string
    level?: string
    read?: boolean
    page?: number
    pageSize?: number
  }

  // 标记已读请求
  export interface MarkReadRequest {
    ids: string[]
  }
}

// 统计分析相关 API 类型
export namespace AnalyticsAPI {
  // 时间范围
  export type TimeRange = '1d' | '7d' | '30d' | '90d' | '1y' | 'custom'

  // 统计数据点
  export interface DataPoint {
    timestamp: string
    value: number
    label?: string
  }

  // 趋势数据
  export interface TrendData {
    current: number
    previous: number
    change: number
    changePercent: number
    trend: 'up' | 'down' | 'stable'
    data: DataPoint[]
  }

  // 分布数据
  export interface DistributionData {
    name: string
    value: number
    percent: number
    color?: string
  }

  // 统计查询参数
  export interface StatsQuery {
    timeRange: TimeRange
    startDate?: string
    endDate?: string
    granularity?: 'hour' | 'day' | 'week' | 'month'
    metrics?: string[]
    filters?: Record<string, any>
  }
}

// 错误响应类型
export interface ErrorResponse {
  code: number
  message: string
  details?: any
  timestamp: string
  path?: string
  method?: string
}

// 请求头类型
export interface RequestHeaders {
  'Content-Type'?: string
  'Authorization'?: string
  'X-Requested-With'?: string
  'Accept'?: string
  'Accept-Language'?: string
  [key: string]: string | undefined
}

// 请求配置类型
export interface RequestOptions {
  headers?: RequestHeaders
  timeout?: number
  retry?: number
  cache?: boolean
  mock?: boolean
}