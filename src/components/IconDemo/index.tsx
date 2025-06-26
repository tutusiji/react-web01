import React from 'react'
import { Card, Space, Typography, Divider } from 'antd'

const { Title, Text } = Typography

const IconDemo: React.FC = () => {
  const carbonIcons = [
    { name: 'home', class: 'i-carbon-home' },
    { name: 'user', class: 'i-carbon-user' },
    { name: 'settings', class: 'i-carbon-settings' },
    { name: 'search', class: 'i-carbon-search' },
    { name: 'notification', class: 'i-carbon-notification' },
    { name: 'heart', class: 'i-carbon-favorite' },
    { name: 'star', class: 'i-carbon-star' },
    { name: 'download', class: 'i-carbon-download' },
  ]

  const mdiIcons = [
    { name: 'account', class: 'i-mdi-account' },
    { name: 'email', class: 'i-mdi-email' },
    { name: 'phone', class: 'i-mdi-phone' },
    { name: 'calendar', class: 'i-mdi-calendar' },
    { name: 'clock', class: 'i-mdi-clock' },
    { name: 'map', class: 'i-mdi-map' },
    { name: 'camera', class: 'i-mdi-camera' },
    { name: 'music', class: 'i-mdi-music' },
  ]

  const tablerIcons = [
    { name: 'brand-github', class: 'i-tabler-brand-github' },
    { name: 'brand-twitter', class: 'i-tabler-brand-twitter' },
    { name: 'brand-facebook', class: 'i-tabler-brand-facebook' },
    { name: 'brand-instagram', class: 'i-tabler-brand-instagram' },
    { name: 'brand-linkedin', class: 'i-tabler-brand-linkedin' },
    { name: 'brand-youtube', class: 'i-tabler-brand-youtube' },
    { name: 'brand-discord', class: 'i-tabler-brand-discord' },
    { name: 'brand-slack', class: 'i-tabler-brand-slack' },
  ]

  const IconGrid: React.FC<{ icons: typeof carbonIcons; title: string }> = ({ icons, title }) => (
    <div>
      <Title level={4}>{title}</Title>
      <div className="grid grid-cols-4 gap-4">
        {icons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center p-3 border rounded hover:bg-gray-50 transition-colors">
            <div className={`${icon.class} text-2xl text-gray-600 mb-2`} />
            <Text className="text-xs text-center">{icon.name}</Text>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Space direction="vertical" size="large" className="w-full">
      <div>
        <Title level={3}>SVG 图标示例</Title>
        <Text type="secondary">
          本项目集成了 UnoCSS 的图标预设，支持多个图标库。使用方式：
          <code className="bg-gray-100 px-2 py-1 rounded mx-1">className="i-[collection]-[name]"</code>
        </Text>
      </div>

      <Divider />

      <IconGrid icons={carbonIcons} title="Carbon Icons" />
      
      <Divider />
      
      <IconGrid icons={mdiIcons} title="Material Design Icons" />
      
      <Divider />
      
      <IconGrid icons={tablerIcons} title="Tabler Icons" />

      <Card size="small" className="bg-blue-50">
        <Title level={5}>使用说明</Title>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>图标类名格式：<code>i-[collection]-[name]</code></li>
          <li>Carbon Icons: <code>i-carbon-home</code></li>
          <li>MDI Icons: <code>i-mdi-account</code></li>
          <li>Tabler Icons: <code>i-tabler-brand-github</code></li>
          <li>可以通过 UnoCSS 的工具类调整大小和颜色</li>
          <li>更多图标请访问: <a href="https://icones.js.org/" target="_blank" rel="noopener noreferrer">icones.js.org</a></li>
        </ul>
      </Card>
    </Space>
  )
}

export default IconDemo