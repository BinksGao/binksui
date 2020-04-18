import Vue from 'vue'
import App from './App.vue'
/**
 *本地测试
  import BgButton from './components/button.vue'
  import BgDialog from './components/dialog.vue'
  import BgInput from './components/input.vue'
  import BgSwitch from './components/switch.vue'
  import BgRadio from './components/radio.vue'
  import BgRadioGroup from './components/radio-group.vue'
  import BgCheckBox from './components/checkbox.vue'
  import BgCheckBoxGroup from './components/checkbox-group.vue'
  import BgForm from './components/form.vue'
  import BgFormItem from './components/formitem.vue'
  import '../packages/fonts/iconfont.css'

  Vue.component(BgButton.name, BgButton)
  Vue.component(BgDialog.name, BgDialog)
  Vue.component(BgInput.name, BgInput)
  Vue.component(BgSwitch.name, BgSwitch)
  Vue.component(BgRadio.name, BgRadio)
  Vue.component(BgRadioGroup.name, BgRadioGroup)
  Vue.component(BgCheckBox.name, BgCheckBox)
  Vue.component(BgCheckBoxGroup.name, BgCheckBoxGroup)
  Vue.component(BgForm.name, BgForm)
  Vue.component(BgFormItem.name, BgFormItem)
 */

import BinksUI from '../packages'
Vue.config.productionTip = false
Vue.use(BinksUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
