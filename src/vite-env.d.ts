/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_MOBILE_ADAPT: string
  readonly VITE_ENABLE_MOCK: string
  readonly VITE_SHOW_DEVTOOLS: string
  readonly MODE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}