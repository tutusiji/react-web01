import React, { useState } from 'react'
import { Card, Button, Space, Typography } from 'antd'
import IconDemo from '@/components/IconDemo'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <Title level={2}>欢迎使用 React Web 模板</Title>
      
      <Card title="功能特性" className="mb-6">
        <Paragraph>
          这是一个功能完整的 React 工程模板，包含以下特性：
        </Paragraph>
        <ul className="list-disc list-inside space-y-2">
          <li>⚡ Vite + React + TypeScript</li>
          <li>🎨 Ant Design + UnoCSS 原子化CSS</li>
          <li>📱 移动端适配 (px2rem)</li>
          <li>🎯 Sass + PostCSS + Autoprefixer</li>
          <li>🔗 Axios 请求封装</li>
          <li>🗂️ 路径别名 @ 配置</li>
          <li>🚦 React Router 路由</li>
          <li>🗃️ React Hooks 状态管理</li>
          <li>🌍 环境变量配置</li>
          <li>📏 ESLint + TypeScript 代码规范</li>
          <li>📦 pnpm 包管理</li>
          <li>🎭 SVG 图标支持</li>
        </ul>
      </Card>

      <Card title="计数器示例" className="mb-6">
        <div className="flex-center space-x-4">
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <span className="text-2xl font-bold text-primary-600">{count}</span>
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button onClick={() => setCount(0)} type="dashed">
            重置
          </Button>
        </div>
      </Card>

      <Card title="UnoCSS 原子化CSS示例" className="mb-6">
        <Space direction="vertical" size="middle" className="w-full">
          <div className="flex-center space-x-4">
            <div className="btn-primary">主要按钮</div>
            <div className="btn-secondary">次要按钮</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-100 p-4 rounded text-center">红色卡片</div>
            <div className="bg-green-100 p-4 rounded text-center">绿色卡片</div>
            <div className="bg-blue-100 p-4 rounded text-center">蓝色卡片</div>
          </div>
        </Space>
      </Card>

      <Card title="SVG 图标示例">
        <IconDemo />
      </Card>
    </div>
  )
}

export default Home