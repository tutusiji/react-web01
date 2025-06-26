import React, { useState, useEffect } from 'react'
import { Layout, Typography, Space, Button, Dropdown, Avatar, message } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout
const { Title } = Typography

interface UserInfo {
  username: string
  loginTime: string
}

const Header: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    // 获取用户信息
    const token = localStorage.getItem('authToken')
    const loginStatus = localStorage.getItem('isLoggedIn')
    const userInfoStr = localStorage.getItem('userInfo')
    
    if (token && loginStatus === 'true' && userInfoStr) {
      try {
        const parsedUserInfo = JSON.parse(userInfoStr)
        setUserInfo(parsedUserInfo)
        setIsLoggedIn(true)
      } catch (error) {
        console.error('解析用户信息失败:', error)
      }
    }
  }, [])

  const handleLogout = () => {
    // 清除本地存储
    localStorage.removeItem('authToken')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userInfo')
    
    // 更新状态
    setUserInfo(null)
    setIsLoggedIn(false)
    
    message.success('已退出登录')
    
    // 跳转到登录页面
    navigate('/login', { replace: true })
  }

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: handleLogout,
    },
  ]

  return (
    <AntHeader className="bg-white shadow-sm border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="i-carbon-logo-react text-2xl text-blue-500 mr-3" />
        <Title level={3} className="!mb-0 !text-gray-800">
          React Web Template
        </Title>
      </div>
      
      <Space>
        <div className="text-sm text-gray-500">
          环境: {import.meta.env.VITE_APP_ENV || import.meta.env.MODE}
        </div>
        
        {isLoggedIn ? (
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div className="flex items-center cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
              <Avatar 
                size="small" 
                icon={<UserOutlined />} 
                className="mr-2"
              />
              <span className="text-gray-700">{userInfo?.username || '用户'}</span>
            </div>
          </Dropdown>
        ) : (
          <Button type="primary" size="small" onClick={() => navigate('/login')}>
            登录
          </Button>
        )}
      </Space>
    </AntHeader>
  )
}

export default Header