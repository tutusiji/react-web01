// 工具函数集合

/**
 * 格式化日期
 * @param date 日期
 * @param format 格式化字符串
 * @returns 格式化后的日期字符串
 */
export const formatDate = (date: Date | string | number, format = 'YYYY-MM-DD HH:mm:ss'): string => {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * 格式化文件大小
 * @param bytes 字节数
 * @param decimals 小数位数
 * @returns 格式化后的文件大小
 */
export const formatFileSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * 格式化数字
 * @param num 数字
 * @param options 格式化选项
 * @returns 格式化后的数字字符串
 */
export const formatNumber = (
  num: number,
  options: {
    decimals?: number
    separator?: string
    prefix?: string
    suffix?: string
  } = {}
): string => {
  const { decimals = 0, separator = ',', prefix = '', suffix = '' } = options
  
  const parts = num.toFixed(decimals).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  
  return prefix + parts.join('.') + suffix
}

/**
 * 防抖函数
 * @param func 要防抖的函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 * @returns 防抖后的函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: number | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    
    const callNow = immediate && !timeout
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    
    if (callNow) func(...args)
  }
}

/**
 * 节流函数
 * @param func 要节流的函数
 * @param limit 时间限制
 * @returns 节流后的函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * 深拷贝
 * @param obj 要拷贝的对象
 * @returns 拷贝后的对象
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T
  if (typeof obj === 'object') {
    const clonedObj = {} as { [key: string]: any }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj as T
  }
  return obj
}

/**
 * 生成唯一ID
 * @param prefix 前缀
 * @returns 唯一ID
 */
export const generateId = (prefix = ''): string => {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substr(2, 9)
  return prefix + timestamp + randomStr
}

/**
 * 获取URL参数
 * @param name 参数名
 * @param url URL字符串
 * @returns 参数值
 */
export const getUrlParam = (name: string, url?: string): string | null => {
  const urlStr = url || window.location.href
  const urlObj = new URL(urlStr)
  return urlObj.searchParams.get(name)
}

/**
 * 设置URL参数
 * @param params 参数对象
 * @param url URL字符串
 * @returns 新的URL字符串
 */
export const setUrlParams = (params: Record<string, string>, url?: string): string => {
  const urlStr = url || window.location.href
  const urlObj = new URL(urlStr)
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlObj.searchParams.set(key, value)
    } else {
      urlObj.searchParams.delete(key)
    }
  })
  
  return urlObj.toString()
}

/**
 * 检查是否为移动设备
 * @returns 是否为移动设备
 */
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * 检查是否为空值
 * @param value 要检查的值
 * @returns 是否为空
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * 数组去重
 * @param arr 数组
 * @param key 去重的键
 * @returns 去重后的数组
 */
export const uniqueArray = <T>(arr: T[], key?: keyof T): T[] => {
  if (!key) {
    return [...new Set(arr)]
  }
  
  const seen = new Set()
  return arr.filter(item => {
    const value = item[key]
    if (seen.has(value)) {
      return false
    }
    seen.add(value)
    return true
  })
}

/**
 * 数组分组
 * @param arr 数组
 * @param key 分组的键
 * @returns 分组后的对象
 */
export const groupBy = <T>(arr: T[], key: keyof T): Record<string, T[]> => {
  return arr.reduce((groups, item) => {
    const group = String(item[key])
    if (!groups[group]) {
      groups[group] = []
    }
    groups[group].push(item)
    return groups
  }, {} as Record<string, T[]>)
}

/**
 * 对象转换为FormData
 * @param obj 对象
 * @returns FormData
 */
export const objectToFormData = (obj: Record<string, any>): FormData => {
  const formData = new FormData()
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (value instanceof File) {
        formData.append(key, value)
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item)
        })
      } else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value))
      } else {
        formData.append(key, String(value))
      }
    }
  })
  
  return formData
}

/**
 * 下载文件
 * @param url 文件URL
 * @param filename 文件名
 */
export const downloadFile = (url: string, filename?: string): void => {
  const link = document.createElement('a')
  link.href = url
  if (filename) {
    link.download = filename
  }
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 复制文本到剪贴板
 * @param text 要复制的文本
 * @returns Promise
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // 兼容旧浏览器
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    }
  } catch (error) {
    console.error('复制失败:', error)
    return false
  }
}

/**
 * 获取文件扩展名
 * @param filename 文件名
 * @returns 扩展名
 */
export const getFileExtension = (filename: string): string => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
}

/**
 * 验证邮箱格式
 * @param email 邮箱地址
 * @returns 是否有效
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 验证手机号格式
 * @param phone 手机号
 * @returns 是否有效
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

/**
 * 验证身份证号格式
 * @param idCard 身份证号
 * @returns 是否有效
 */
export const isValidIdCard = (idCard: string): boolean => {
  const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return idCardRegex.test(idCard)
}

/**
 * 获取随机颜色
 * @returns 随机颜色值
 */
export const getRandomColor = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

/**
 * 睡眠函数
 * @param ms 毫秒数
 * @returns Promise
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}