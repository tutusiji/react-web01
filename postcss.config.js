export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度/10，假设设计稿为375px
      propList: ['*'],
      selectorBlackList: ['.no-rem'], // 不转换的类名
      exclude: /node_modules/i,
      minPixelValue: 2 // 小于2px的不转换
    }
  }
}