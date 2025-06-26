import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Forms from '@/pages/Forms'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import '@/styles/App.scss'

const { Content } = Layout

// 受保护的路由组件
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // 检查本地存储中的登录状态
    const token = localStorage.getItem('authToken')
    const loginStatus = localStorage.getItem('isLoggedIn')
    
    if (token && loginStatus === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  // 监听登录状态变化
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('authToken')
      const loginStatus = localStorage.getItem('isLoggedIn')
      setIsAuthenticated(Boolean(token && loginStatus === 'true'))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">加载中...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <Layout className="app-layout min-h-screen">
      <Header />
      <Layout>
        <Sidebar />
        <Layout className="site-layout">
          <Content className="site-layout-content p-6">
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

const App: React.FC = () => {

  return (
    <Routes>
      {/* 登录页面 - 独立显示，不在Layout框架中 */}
      <Route path="/login" element={<Login />} />
      
      {/* 受保护的路由 - 需要登录后才能访问 */}
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />
      <Route path="/components/forms" element={
        <ProtectedRoute>
          <Forms />
        </ProtectedRoute>
      } />
      
      {/* 404页面 */}
      <Route path="*" element={
        <ProtectedRoute>
          <NotFound />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App