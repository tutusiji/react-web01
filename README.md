# React Web Template

一个基于 React 18 + TypeScript + Vite 的现代化 Web 应用模板，集成了完整的开发工具链和最佳实践。

## ✨ 特性

- 🚀 **Vite** - 极速的构建工具和开发服务器
- ⚛️ **React 18** - 最新版本的 React 框架
- 🔷 **TypeScript** - 类型安全的 JavaScript 超集
- 🎨 **Ant Design** - 企业级 UI 设计语言和组件库
- 🗃️ **Redux Toolkit** - 现代化的 Redux 状态管理
- 🛣️ **React Router** - 声明式路由管理
- 🎯 **UnoCSS** - 原子化 CSS 引擎
- 💅 **Sass** - CSS 预处理器
- 📡 **Axios** - Promise 基础的 HTTP 客户端
- 📱 **移动端适配** - 基于 postcss-pxtorem 的响应式设计
- 🔧 **ESLint** - 代码质量检查
- 🎭 **图标系统** - 集成 Carbon、MDI、Tabler 图标库

## 🏗️ 架构设计

### 技术栈架构

```
┌─────────────────────────────────────────────────────────────┐
│                        用户界面层                              │
│  React Components + Ant Design + UnoCSS + Sass            │
├─────────────────────────────────────────────────────────────┤
│                        状态管理层                              │
│           Redux Toolkit + React-Redux                     │
├─────────────────────────────────────────────────────────────┤
│                        路由管理层                              │
│                   React Router DOM                        │
├─────────────────────────────────────────────────────────────┤
│                        数据请求层                              │
│                  Axios + API 封装                          │
├─────────────────────────────────────────────────────────────┤
│                        工具函数层                              │
│              Utils + Types + Constants                    │
├─────────────────────────────────────────────────────────────┤
│                        构建工具层                              │
│        Vite + TypeScript + ESLint + PostCSS               │
└─────────────────────────────────────────────────────────────┘
```

### 设计模式

- **组件化设计**: 采用函数式组件 + Hooks 模式
- **状态管理**: 使用 Redux Toolkit 的 Slice 模式
- **类型安全**: 全面的 TypeScript 类型定义
- **样式方案**: UnoCSS 原子化 + Sass 模块化
- **API 设计**: RESTful API + 统一的请求/响应处理

## 📁 目录结构

```
react-web/
├── public/                     # 静态资源目录
├── src/
│   ├── api/                    # API 接口定义
│   │   └── index.ts           # 统一的 API 接口
│   ├── components/             # 可复用组件
│   │   ├── IconDemo/          # 图标演示组件
│   │   └── Layout/            # 布局组件
│   │       ├── Header/        # 头部组件
│   │       └── Sidebar/       # 侧边栏组件
│   ├── pages/                  # 页面组件
│   │   ├── Home/              # 首页
│   │   ├── About/             # 关于页面
│   │   └── NotFound/          # 404 页面
│   ├── store/                  # Redux 状态管理
│   │   ├── index.ts           # Store 配置
│   │   ├── hooks.ts           # 类型化的 Redux Hooks
│   │   └── slices/            # Redux Slices
│   │       ├── counterSlice.ts # 计数器状态
│   │       └── userSlice.ts   # 用户状态
│   ├── styles/                 # 样式文件
│   │   ├── index.scss         # 全局样式
│   │   ├── variables.scss     # Sass 变量
│   │   ├── reset.scss         # 样式重置
│   │   ├── utilities.scss     # 工具类样式
│   │   └── App.scss           # 应用样式
│   ├── types/                  # TypeScript 类型定义
│   │   ├── index.ts           # 通用类型
│   │   ├── api.ts             # API 相关类型
│   │   └── components.ts      # 组件相关类型
│   ├── utils/                  # 工具函数
│   │   ├── index.ts           # 通用工具函数
│   │   └── request.ts         # HTTP 请求封装
│   ├── App.tsx                 # 根组件
│   └── main.tsx                # 应用入口
├── .env                        # 环境变量（通用）
├── .env.development           # 开发环境变量
├── .env.production            # 生产环境变量
├── .eslintrc.cjs              # ESLint 配置
├── index.html                 # HTML 模板
├── package.json               # 项目依赖
├── postcss.config.js          # PostCSS 配置
├── tsconfig.json              # TypeScript 配置
├── uno.config.ts              # UnoCSS 配置
└── vite.config.ts             # Vite 配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0 或 pnpm >= 6.0.0

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 应用将在 http://localhost:3000 启动
```

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 代码检查

```bash
# 运行 ESLint
npm run lint
```

## ⚙️ 配置说明

### 环境变量

项目支持多环境配置，通过 `.env` 文件管理：

```bash
# 应用配置
VITE_APP_TITLE=React Web Template    # 应用标题
VITE_APP_VERSION=1.0.0              # 应用版本

# 移动端适配
VITE_MOBILE_ADAPT=true               # 是否开启移动端适配

# API 配置
VITE_API_BASE_URL=/api               # API 基础路径
VITE_API_TIMEOUT=10000               # 请求超时时间

# Redux DevTools
VITE_SHOW_DEVTOOLS=true              # 是否显示 Redux DevTools
```

### 路径别名

项目配置了 `@` 别名指向 `src` 目录：

```typescript
// 使用别名导入
import { store } from '@/store'
import Header from '@/components/Layout/Header'
import { formatDate } from '@/utils'
```

### 样式方案

#### UnoCSS 原子化 CSS

```html
<!-- 使用原子化类名 -->
<div class="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg">
  <span>标题</span>
  <button class="btn-primary">按钮</button>
</div>
```

#### Sass 变量和 Mixins

```scss
// 使用 Sass 变量
.custom-component {
  color: $primary-color;
  font-size: $font-size-lg;
  
  // 使用 Mixins
  @include flex-center;
  @include text-ellipsis;
}
```

#### 移动端适配

项目使用 `postcss-pxtorem` 自动将 px 转换为 rem：

```scss
// 设计稿 375px，写法保持 px
.mobile-element {
  width: 100px;    // 自动转换为 2.67rem
  height: 50px;    // 自动转换为 1.33rem
}

// 不需要转换的元素添加 .no-rem 类
.no-rem {
  border: 1px solid #ccc;  // 保持 1px
}
```

## 🎯 核心功能

### 状态管理

使用 Redux Toolkit 进行状态管理：

```typescript
// 在组件中使用
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { increment, decrement } from '@/store/slices/counterSlice'

function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
```

### API 请求

统一的 API 请求封装：

```typescript
// 使用封装的 API
import { userApi } from '@/api'

// 获取用户信息
const userInfo = await userApi.getUserInfo()

// 用户登录
const loginResult = await userApi.login({
  username: 'admin',
  password: '123456'
})
```

### 图标使用

支持多种图标库：

```html
<!-- Carbon Icons -->
<i class="i-carbon-home text-2xl"></i>

<!-- Material Design Icons -->
<i class="i-mdi-account text-2xl"></i>

<!-- Tabler Icons -->
<i class="i-tabler-settings text-2xl"></i>
```

## 📦 构建和部署

### 构建优化

- **代码分割**: 自动进行路由级别的代码分割
- **资源优化**: 图片、字体等静态资源自动优化
- **Tree Shaking**: 自动移除未使用的代码
- **压缩**: 生产环境自动压缩 JS、CSS

### 部署建议

1. **静态部署**: 构建后的 `dist` 目录可直接部署到任何静态服务器
2. **CDN 加速**: 建议将静态资源部署到 CDN
3. **Gzip 压缩**: 服务器开启 Gzip 压缩以减少传输大小
4. **缓存策略**: 合理设置静态资源的缓存策略

## 🔧 开发指南

### 代码规范

- 使用 ESLint 进行代码检查
- 遵循 TypeScript 严格模式
- 组件使用 PascalCase 命名
- 文件使用 camelCase 或 kebab-case 命名
- 常量使用 UPPER_SNAKE_CASE 命名

### 组件开发

```typescript
// 组件模板
import React from 'react'
import type { FC } from 'react'

interface Props {
  title: string
  onClick?: () => void
}

const MyComponent: FC<Props> = ({ title, onClick }) => {
  return (
    <div className="my-component" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  )
}

export default MyComponent
```

### 类型定义

```typescript
// 定义 API 响应类型
interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
}

// 定义组件 Props 类型
interface ButtonProps {
  type?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
}
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目：

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [UnoCSS](https://unocss.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

如有问题或建议，欢迎提交 Issue 或 Pull Request！