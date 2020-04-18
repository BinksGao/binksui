// 导入组件，组件必须声明 name
import RadioGroup from './src/radio-group.vue'
// 为组件提供 install 安装方法，供按需引入
RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup)
}
// 默认导出组件
export default RadioGroup
