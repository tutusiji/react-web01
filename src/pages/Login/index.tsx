import React from 'react'
import { Form, Input, Button, Card, Row, Col, Divider, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import type { FormProps } from 'antd'
import './index.scss'

interface LoginFormValues {
  username: string
  password: string
  remember: boolean
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = React.useState(false)

  const onFinish: FormProps<LoginFormValues>['onFinish'] = async (values) => {
    setLoading(true)
    try {
      // 模拟登录API调用
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('登录信息:', values)
      
      // 模拟生成token
      const mockToken = 'mock_jwt_token_' + Date.now()
      
      // 保存登录状态到本地存储
      localStorage.setItem('authToken', mockToken)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userInfo', JSON.stringify({
        username: values.username,
        loginTime: new Date().toISOString()
      }))
      
      message.success('登录成功！')
      
      // 登录成功后跳转到首页
      navigate('/', { replace: true })
    } catch (error) {
      message.error('登录失败，请检查用户名和密码！')
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed: FormProps<LoginFormValues>['onFinishFailed'] = (errorInfo) => {
    console.log('登录失败:', errorInfo)
    message.error('请检查输入信息！')
  }

  // 验证用户名或邮箱
  const validateUsernameOrEmail = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('请输入用户名或邮箱！'))
    }
    
    // 检查是否为邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // 检查是否为用户名格式（字母、数字、下划线，3-20位）
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
    
    if (emailRegex.test(value) || usernameRegex.test(value)) {
      return Promise.resolve()
    }
    
    return Promise.reject(new Error('请输入正确的用户名（3-20位字母数字下划线）或邮箱格式！'))
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <Row className="login-content" gutter={0}>
          {/* 左侧Logo展示区域 */}
          <Col xs={0} sm={0} md={12} lg={14} xl={16} className="login-left">
            <div className="logo-section">
              <div className="logo-container">
                {/* SVG Logo */}
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 120 120" 
                  className="logo-svg"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="50" fill="url(#logoGradient)" />
                  <path 
                    d="M40 45 L60 65 L80 45" 
                    stroke="white" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <circle cx="60" cy="75" r="3" fill="white" />
                </svg>
                <h1 className="logo-title">React Web</h1>
                <p className="logo-subtitle">现代化前端开发平台</p>
              </div>
              
              {/* 装饰性图形 */}
              <div className="decoration-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
              </div>
            </div>
          </Col>
          
          {/* 右侧登录表单区域 */}
          <Col xs={24} sm={24} md={12} lg={10} xl={8} className="login-right">
            <div className="login-form-container">
              <div className="form-header">
                <h2 className="form-title">欢迎回来</h2>
                <p className="form-subtitle">请登录您的账户</p>
              </div>
              
              <Card className="login-card" bordered={false}>
                <Form
                  form={form}
                  name="loginForm"
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  size="large"
                >
                  <Form.Item
                    label="用户名或邮箱"
                    name="username"
                    rules={[
                      { validator: validateUsernameOrEmail }
                    ]}
                  >
                    <Input 
                      prefix={<UserOutlined className="text-gray-400" />}
                      placeholder="请输入用户名或邮箱"
                      className="login-input"
                    />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                      { required: true, message: '请输入密码！' },
                      { min: 6, message: '密码至少6位字符！' }
                    ]}
                  >
                    <Input.Password 
                      prefix={<LockOutlined className="text-gray-400" />}
                      placeholder="请输入密码"
                      className="login-input"
                    />
                  </Form.Item>

                  <Form.Item className="login-options">
                    <div className="flex justify-between items-center">
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                          记住我
                        </label>
                      </Form.Item>
                      <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
                        忘记密码？
                      </a>
                    </div>
                  </Form.Item>

                  <Form.Item className="mb-4">
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      className="login-button w-full"
                      loading={loading}
                      size="large"
                    >
                      {loading ? '登录中...' : '登录'}
                    </Button>
                  </Form.Item>

                  <Divider className="my-6">
                    <span className="text-gray-400 text-sm">或</span>
                  </Divider>

                  <div className="social-login">
                    <Button 
                      className="w-full mb-3" 
                      size="large"
                      icon={<div className="i-carbon-logo-github mr-2" />}
                    >
                      使用 GitHub 登录
                    </Button>
                    <Button 
                      className="w-full" 
                      size="large"
                      icon={<div className="i-carbon-email mr-2" />}
                    >
                      使用邮箱注册
                    </Button>
                  </div>

                  <div className="text-center mt-6">
                    <span className="text-sm text-gray-500">
                      还没有账户？
                      <a href="#" className="text-blue-500 hover:text-blue-600 ml-1">
                        立即注册
                      </a>
                    </span>
                  </div>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login