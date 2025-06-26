# Hooks 目录

这个目录用于存放项目中的自定义React Hooks。

## 已包含的Hooks

### useLocalStorage
用于localStorage的状态管理，自动同步状态与本地存储。

```typescript
import { useLocalStorage } from '@/hooks'

function MyComponent() {
  const [name, setName] = useLocalStorage('username', '')
  
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  )
}
```

### useDebounce
防抖Hook，用于延迟更新值，常用于搜索输入等场景。

```typescript
import { useDebounce } from '@/hooks'

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  
  useEffect(() => {
    // 只有当用户停止输入500ms后才执行搜索
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])
}
```

### useToggle
布尔值切换Hook，提供切换、设为true、设为false等操作。

```typescript
import { useToggle } from '@/hooks'

function ModalComponent() {
  const [isOpen, toggle, setTrue, setFalse] = useToggle(false)
  
  return (
    <>
      <button onClick={setTrue}>打开模态框</button>
      <Modal visible={isOpen} onClose={setFalse}>
        <button onClick={toggle}>切换状态</button>
      </Modal>
    </>
  )
}
```

### useAsync
异步操作状态管理Hook，处理loading、error、data状态。

```typescript
import { useAsync } from '@/hooks'

function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error, execute } = useAsync(
    () => fetchUser(userId),
    true // 立即执行
  )
  
  if (loading) return <div>加载中...</div>
  if (error) return <div>错误: {error.message}</div>
  if (!user) return null
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={execute}>刷新</button>
    </div>
  )
}
```

## 自定义Hook最佳实践

1. **命名规范**: 所有自定义Hook都应该以`use`开头
2. **单一职责**: 每个Hook应该只负责一个特定的功能
3. **类型安全**: 使用TypeScript提供完整的类型定义
4. **错误处理**: 适当处理可能出现的错误情况
5. **性能优化**: 使用`useCallback`、`useMemo`等优化性能
6. **文档注释**: 为每个Hook提供清晰的JSDoc注释

## 添加新的Hook

1. 在`hooks`目录下创建新的`.ts`文件
2. 实现自定义Hook逻辑
3. 在`index.ts`中导出新的Hook
4. 更新此README文档

## 导入方式

```typescript
// 推荐：从统一入口导入
import { useLocalStorage, useDebounce } from '@/hooks'

// 或者单独导入
import { useLocalStorage } from '@/hooks/useLocalStorage'
```