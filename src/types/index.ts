// 全局类型定义

// 环境变量类型定义已移至 vite-env.d.ts

// API 响应类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

// 分页数据类型
export interface PaginationData<T = any> {
  list: T[]
  total: number
  current: number
  pageSize: number
}

// 用户信息类型
export interface UserInfo {
  id: string
  name: string
  email: string
  avatar?: string
  role?: string
  permissions?: string[]
  createdAt?: string
  updatedAt?: string
}

// 菜单项类型
export interface MenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  path?: string
  children?: MenuItem[]
  disabled?: boolean
  hidden?: boolean
}

// 路由配置类型
export interface RouteConfig {
  path: string
  element: React.ComponentType
  meta?: {
    title?: string
    requireAuth?: boolean
    roles?: string[]
    keepAlive?: boolean
  }
  children?: RouteConfig[]
}

// 表格列配置类型
export interface TableColumn<T = any> {
  key: string
  title: string
  dataIndex?: keyof T
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sorter?: boolean | ((a: T, b: T) => number)
  render?: (value: any, record: T, index: number) => React.ReactNode
}

// 表单字段类型
export interface FormField {
  name: string
  label: string
  type: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'upload'
  required?: boolean
  rules?: any[]
  options?: { label: string; value: any }[]
  placeholder?: string
  disabled?: boolean
  hidden?: boolean
}

// 文件上传类型
export interface UploadFile {
  uid: string
  name: string
  status: 'uploading' | 'done' | 'error' | 'removed'
  url?: string
  thumbUrl?: string
  size?: number
  type?: string
  response?: any
  error?: any
}

// 通知消息类型
export interface NotificationItem {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  duration?: number
  createdAt: string
  read?: boolean
}

// 主题配置类型
export interface ThemeConfig {
  primaryColor: string
  borderRadius: number
  colorBgContainer: string
  colorText: string
  colorTextSecondary: string
  colorBorder: string
  fontSize: number
  fontFamily: string
}

// 应用配置类型
export interface AppConfig {
  title: string
  version: string
  logo: string
  theme: ThemeConfig
  layout: {
    siderWidth: number
    headerHeight: number
    collapsed: boolean
  }
  features: {
    mobileAdapt: boolean
    darkMode: boolean
    i18n: boolean
  }
}

// HTTP 请求配置类型
export interface RequestConfig {
  baseURL: string
  timeout: number
  headers: Record<string, string>
  withCredentials: boolean
}

// 错误信息类型
export interface ErrorInfo {
  code: string | number
  message: string
  details?: any
  timestamp: string
}

// 设备信息类型
export interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  userAgent: string
  screenWidth: number
  screenHeight: number
}

// 工具函数类型
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// 事件处理器类型
export type EventHandler<T = any> = (event: T) => void
export type AsyncEventHandler<T = any> = (event: T) => Promise<void>

// 组件 Props 基础类型
export interface BaseComponentProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

// 加载状态类型
export interface LoadingState {
  loading: boolean
  error: string | null
  data: any
}

// 分页参数类型
export interface PaginationParams {
  current: number
  pageSize: number
  total?: number
}

// 搜索参数类型
export interface SearchParams {
  keyword?: string
  filters?: Record<string, any>
  sorter?: {
    field: string
    order: 'ascend' | 'descend'
  }
}

// 导出所有类型
// 暂时注释掉 API 类型导出,需要时再创建相应文件
// export * from './api'
// 暂时注释掉组件类型导出,需要时再创建相应文件
// export * from './components'
