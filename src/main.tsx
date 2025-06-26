import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { store } from '@/store'
import App from '@/App'
import '@/styles/index.scss'
import 'uno.css'

// 移动端适配检查
const isMobileAdapt = import.meta.env.VITE_MOBILE_ADAPT === 'true'

if (isMobileAdapt) {
  // 移动端适配逻辑已在 index.html 中实现
  console.log('移动端适配已开启')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)