import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        // 使用 Iconify 图标集
        carbon: () => import('@iconify/json/json/carbon.json').then(i => i.default),
        mdi: () => import('@iconify/json/json/mdi.json').then(i => i.default),
        tabler: () => import('@iconify/json/json/tabler.json').then(i => i.default),
        // 自定义 SVG 图标
        custom: {
          // 可以在这里添加自定义 SVG 图标
        }
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  shortcuts: {
    // 常用的组合样式
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-around': 'flex items-center justify-around',
    'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'btn-primary': 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors',
    'btn-secondary': 'bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors'
  },
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      }
    },
    breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  rules: [
    // 自定义规则
    [/^m-([\d\.]+)$/, ([, d]) => ({ margin: `${d}px` })],
    [/^p-([\d\.]+)$/, ([, d]) => ({ padding: `${d}px` })]
  ]
})