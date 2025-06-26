import React from 'react'
import { Form, Input, Button, Select, DatePicker, Radio, Checkbox, Switch, InputNumber, Row, Col, Card, message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import type { FormProps } from 'antd'

const { Option } = Select
const { TextArea } = Input

interface FormValues {
  username: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  age: number
  gender: string
  city: string
  birthday: any
  hobbies: string[]
  description: string
  newsletter: boolean
  agreement: boolean
}

const Forms: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish: FormProps<FormValues>['onFinish'] = (values) => {
    console.log('表单提交成功:', values)
    message.success('表单提交成功！')
  }

  const onFinishFailed: FormProps<FormValues>['onFinishFailed'] = (errorInfo) => {
    console.log('表单提交失败:', errorInfo)
    message.error('表单提交失败，请检查输入信息！')
  }

  const validateConfirmPassword = (_: any, value: string) => {
    if (!value || form.getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('两次输入的密码不一致！'))
  }

  const validatePhone = (_: any, value: string) => {
    const phoneRegex = /^1[3-9]\d{9}$/
    if (!value || phoneRegex.test(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请输入正确的手机号码！'))
  }

  const resetForm = () => {
    form.resetFields()
    message.info('表单已重置')
  }

  return (
    <div className="forms-page p-6">
      <Card title="表单示例" className="mb-6">
        <Form
          form={form}
          name="userForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          scrollToFirstError
        >
          <Row gutter={[16, 0]}>
            {/* 基本信息 */}
            <Col span={24}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">基本信息</h3>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  { required: true, message: '请输入用户名！' },
                  { min: 3, max: 20, message: '用户名长度为3-20个字符！' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线！' }
                ]}
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder="请输入用户名" 
                  size="large"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="邮箱"
                name="email"
                rules={[
                  { required: true, message: '请输入邮箱！' },
                  { type: 'email', message: '请输入正确的邮箱格式！' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined />} 
                  placeholder="请输入邮箱" 
                  size="large"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="手机号"
                name="phone"
                rules={[
                  { required: true, message: '请输入手机号！' },
                  { validator: validatePhone }
                ]}
              >
                <Input 
                  prefix={<PhoneOutlined />} 
                  placeholder="请输入手机号" 
                  size="large"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: '请输入密码！' },
                  { min: 6, max: 20, message: '密码长度为6-20个字符！' },
                  { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/, message: '密码必须包含大小写字母和数字！' }
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder="请输入密码" 
                  size="large"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="确认密码"
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: '请确认密码！' },
                  { validator: validateConfirmPassword }
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder="请再次输入密码" 
                  size="large"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="年龄"
                name="age"
                rules={[
                  { required: true, message: '请输入年龄！' },
                  { type: 'number', min: 1, max: 120, message: '年龄必须在1-120之间！' }
                ]}
              >
                <InputNumber 
                  placeholder="请输入年龄" 
                  size="large"
                  style={{ width: '100%' }}
                  min={1}
                  max={120}
                />
              </Form.Item>
            </Col>

            {/* 详细信息 */}
            <Col span={24}>
              <h3 className="text-lg font-semibold mb-4 mt-6 text-gray-700">详细信息</h3>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="性别"
                name="gender"
                rules={[{ required: true, message: '请选择性别！' }]}
              >
                <Radio.Group size="large">
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                  <Radio value="other">其他</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="城市"
                name="city"
                rules={[{ required: true, message: '请选择城市！' }]}
              >
                <Select placeholder="请选择城市" size="large">
                  <Option value="beijing">北京</Option>
                  <Option value="shanghai">上海</Option>
                  <Option value="guangzhou">广州</Option>
                  <Option value="shenzhen">深圳</Option>
                  <Option value="hangzhou">杭州</Option>
                  <Option value="nanjing">南京</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="生日"
                name="birthday"
                rules={[{ required: true, message: '请选择生日！' }]}
              >
                <DatePicker 
                  placeholder="请选择生日" 
                  size="large"
                  style={{ width: '100%' }}
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                label="兴趣爱好"
                name="hobbies"
                rules={[{ required: true, message: '请选择至少一个兴趣爱好！' }]}
              >
                <Checkbox.Group>
                  <Row>
                    <Col span={8}><Checkbox value="reading">阅读</Checkbox></Col>
                    <Col span={8}><Checkbox value="music">音乐</Checkbox></Col>
                    <Col span={8}><Checkbox value="sports">运动</Checkbox></Col>
                    <Col span={8}><Checkbox value="travel">旅行</Checkbox></Col>
                    <Col span={8}><Checkbox value="cooking">烹饪</Checkbox></Col>
                    <Col span={8}><Checkbox value="gaming">游戏</Checkbox></Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                label="个人描述"
                name="description"
                rules={[
                  { required: true, message: '请输入个人描述！' },
                  { max: 500, message: '个人描述不能超过500个字符！' }
                ]}
              >
                <TextArea 
                  rows={4} 
                  placeholder="请简单介绍一下自己..." 
                  showCount 
                  maxLength={500}
                />
              </Form.Item>
            </Col>

            {/* 其他选项 */}
            <Col span={24}>
              <h3 className="text-lg font-semibold mb-4 mt-6 text-gray-700">其他选项</h3>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                name="newsletter"
                valuePropName="checked"
                label="订阅邮件通知"
              >
                <Switch checkedChildren="开启" unCheckedChildren="关闭" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('请同意用户协议！')),
                  },
                ]}
              >
                <Checkbox>
                  我已阅读并同意 <a href="#" className="text-blue-500">用户协议</a> 和 <a href="#" className="text-blue-500">隐私政策</a>
                </Checkbox>
              </Form.Item>
            </Col>

            {/* 提交按钮 */}
            <Col span={24}>
              <Form.Item className="mb-0">
                <div className="flex gap-4 justify-center">
                  <Button type="primary" htmlType="submit" size="large" className="min-w-32">
                    提交表单
                  </Button>
                  <Button onClick={resetForm} size="large" className="min-w-32">
                    重置表单
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default Forms