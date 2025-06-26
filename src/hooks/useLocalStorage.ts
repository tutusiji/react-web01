import { useState } from 'react'

/**
 * 自定义Hook：localStorage状态管理
 * @param key localStorage的键名
 * @param initialValue 初始值
 * @returns [value, setValue] 状态值和设置函数
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 从localStorage获取初始值
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // 设置值的函数
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 允许传入函数来更新状态
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      // 保存到localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}