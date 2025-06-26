import React, { useState } from 'react'
import { Card, Typography, Descriptions, Tag, Space, Button, message } from 'antd'
import { exampleApi } from '@/api'

const { Title, Paragraph } = Typography

const About: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState<any>(null)

  const handleTestApi = async () => {
    setLoading(true)
    try {
      // 这里是示例API调用，实际使用时需要后端支持
      const response = await exampleApi.getList()
      setApiData(response)
      message.success('API调用成功')
    } catch (error) {
      console.error('API调用失败:', error)
      message.error('API调用失败，请检查后端服务')
    } finally {
      setLoading(false)
    }
  }

  const envInfo = {
    '应用标题': import.meta.env.VITE_APP_TITLE,
    '应用版本': import.meta.env.VITE_APP_VERSION,
    '运行环境': import.meta.env.VITE_APP_ENV || import.meta.env.MODE,
    'API地址': import.meta.env.VITE_API_BASE_URL,
    '移动端适配': import.meta.env.VITE_MOBILE_ADAPT === 'true' ? '已开启' : '已关闭',
    '开发工具': import.meta.env.VITE_SHOW_DEVTOOLS === 'true' ? '已开启' : '已关闭',
  }

  return (
    <div className="about-page">
      <Title level={2}>关于页面</Title>
      
      <Card title="项目信息" className="mb-6">
        <Paragraph>
          这是一个基于 React + TypeScript + Vite 构建的现代化前端项目模板。
          集成了当前主流的开发工具和最佳实践。
        </Paragraph>
        
        <Descriptions bordered column={2}>
          <Descriptions.Item label="框架">React 18</Descriptions.Item>
          <Descriptions.Item label="构建工具">Vite</Descriptions.Item>
          <Descriptions.Item label="语言">TypeScript</Descriptions.Item>
          <Descriptions.Item label="UI库">Ant Design</Descriptions.Item>
          <Descriptions.Item label="CSS框架">UnoCSS</Descriptions.Item>
          <Descriptions.Item label="CSS预处理器">Sass</Descriptions.Item>
          <Descriptions.Item label="状态管理">Redux Toolkit</Descriptions.Item>
          <Descriptions.Item label="路由">React Router</Descriptions.Item>
          <Descriptions.Item label="HTTP客户端">Axios</Descriptions.Item>
          <Descriptions.Item label="代码规范">ESLint</Descriptions.Item>
          <Descriptions.Item label="包管理器">pnpm</Descriptions.Item>
          <Descriptions.Item label="移动端适配">px2rem</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="环境变量" className="mb-6">
        <Descriptions bordered column={1}>
          {Object.entries(envInfo).map(([key, value]) => (
            <Descriptions.Item key={key} label={key}>
              <Tag color={value?.toString().includes('已开启') ? 'green' : 'blue'}>
                {value}
              </Tag>
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Card>

      <Card title="API测试" className="mb-6">
        <Space direction="vertical" className="w-full">
          <Paragraph>
            点击下方按钮测试API调用功能（需要后端服务支持）：
          </Paragraph>
          
          <Button 
            type="primary" 
            loading={loading} 
            onClick={handleTestApi}
            className="mb-4"
          >
            测试API调用
          </Button>
          
          {apiData && (
            <Card size="small" title="API响应数据">
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(apiData, null, 2)}
              </pre>
            </Card>
          )}
        </Space>
      </Card>

      <Card title="技术栈说明">
        <Space direction="vertical" size="middle" className="w-full">
          <div>
            <Title level={4}>开发体验</Title>
            <ul className="list-disc list-inside space-y-1">
              <li>热重载开发服务器</li>
              <li>TypeScript 类型检查</li>
              <li>ESLint 代码规范检查</li>
              <li>路径别名 @ 支持</li>
              <li>环境变量配置</li>
            </ul>
          </div>
          
          <div>
            <Title level={4}>样式方案</Title>
            <ul className="list-disc list-inside space-y-1">
              <li>UnoCSS 原子化CSS，按需生成</li>
              <li>Sass 预处理器支持</li>
              <li>PostCSS 自动添加浏览器前缀</li>
              <li>px2rem 移动端适配</li>
              <li>SVG 图标支持</li>
            </ul>
          </div>
          
          <div>
            <Title level={4}>状态管理</Title>
            <ul className="list-disc list-inside space-y-1">
              <li>Redux Toolkit 简化状态管理</li>
              <li>类型安全的 hooks</li>
              <li>开发工具支持</li>
            </ul>
          </div>
        </Space>
      </Card>
    </div>
  )
}

export default About