import { useState, useEffect, useCallback } from 'react'

interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

/**
 * 自定义Hook：异步操作状态管理
 * @param asyncFunction 异步函数
 * @param immediate 是否立即执行，默认为true
 * @returns { data, loading, error, execute } 数据、加载状态、错误、执行函数
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null
  })

  // 执行异步函数
  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const data = await asyncFunction()
      setState({ data, loading: false, error: null })
      return data
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error })
      throw error
    }
  }, [asyncFunction])

  // 如果immediate为true，组件挂载时立即执行
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return {
    ...state,
    execute
  }
}