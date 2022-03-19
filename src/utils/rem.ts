/**
 * rem 等比适配配置文件
 */

// 基准大小（此值要与 postcss.config.js 文件中的 rootValue保持一致）
const baseSize = 37.5 

// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375 宽的缩放比例，可根据自己需要修改（设计稿多宽，这个值就是多少）
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

// 初始化
setRem()

// 改变窗口大小时，重新设置 rem
window.onresize = function () {
  console.log("改变窗口大小时，重新设置 rem")
  setRem()
}