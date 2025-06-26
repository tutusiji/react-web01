import { useState, useCallback } from 'react'

/**
 * 自定义Hook：布尔值切换
 * @param initialValue 初始值，默认为false
 * @returns [value, toggle, setTrue, setFalse] 当前值、切换函数、设为true函数、设为false函数
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue)

  // 切换值
  const toggle = useCallback(() => {
    setValue(prev => !prev)
  }, [])

  // 设为true
  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  // 设为false
  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  return [value, toggle, setTrue, setFalse] as const
}