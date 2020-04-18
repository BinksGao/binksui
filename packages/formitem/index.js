// 导入组件，组件必须声明 name
import FormItem from './src/formitem.vue'
// 为组件提供 install 安装方法，供按需引入
FormItem.install = function (Vue) {
  Vue.component(FormItem.name, FormItem)
}
// 默认导出组件
export default FormItem
