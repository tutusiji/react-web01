# Assets 目录结构

这个目录用于存放项目的静态资源文件。

## 目录说明

- `images/` - 图片文件
  - `logo.svg` - 项目Logo
- `icons/` - 图标文件
- `fonts/` - 字体文件

## 使用方式

```typescript
// 导入图片
import logo from '@/assets/images/logo.svg'

// 导入图标
import icon from '@/assets/icons/example.svg'

// 在组件中使用
<img src={logo} alt="Logo" />
```

## 注意事项

- 建议使用SVG格式的图标和简单图形，体积小且可缩放
- 大图片建议进行压缩优化
- 字体文件建议使用woff2格式以获得更好的压缩率