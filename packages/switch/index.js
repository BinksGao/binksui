// 导入组件，组件必须声明 name
import Switch from './src/switch.vue'
// 为组件提供 install 安装方法，供按需引入
Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch)
}
// 默认导出组件
export default Switch
