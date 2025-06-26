import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const menuItems: MenuItem[] = [
    {
      key: '/',
      icon: <div className="i-carbon-home" />,
      label: '首页',
    },
    {
      key: '/about',
      icon: <div className="i-carbon-information" />,
      label: '关于',
    },
    {
      key: '/login',
      icon: <div className="i-carbon-login" />,
      label: '登录',
    },
    {
      key: 'components',
      icon: <div className="i-carbon-cube" />,
      label: '组件示例',
      children: [
        {
          key: '/components/icons',
          icon: <div className="i-carbon-star" />,
          label: '图标',
        },
        {
          key: '/components/forms',
          icon: <div className="i-carbon-form" />,
          label: '表单',
        },
      ],
    },
    {
      key: 'utils',
      icon: <div className="i-carbon-tools" />,
      label: '工具',
      children: [
        {
          key: '/utils/request',
          icon: <div className="i-carbon-network-3" />,
          label: 'HTTP请求',
        },
        {
          key: '/utils/storage',
          icon: <div className="i-carbon-data-base" />,
          label: '本地存储',
        },
      ],
    },
  ]

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Sider 
      collapsible 
      collapsed={collapsed} 
      onCollapse={setCollapsed}
      className="bg-white shadow-sm"
      width={240}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={['components', 'utils']}
        items={menuItems}
        onClick={handleMenuClick}
        className="border-r-0"
        style={{ height: '100%', borderRight: 0 }}
      />
    </Sider>
  )
}

export default Sidebar