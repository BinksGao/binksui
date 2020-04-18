// 导入组件，组件必须声明 name
import Radio from './src/radio.vue'
// 为组件提供 install 安装方法，供按需引入
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}
// 默认导出组件
export default Radio
