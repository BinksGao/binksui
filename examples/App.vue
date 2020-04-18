<template>
  <div class="app">
    <div class="row">
      <bg-button>按钮</bg-button>
      <bg-button type="primary">按钮</bg-button>
      <bg-button type="success">按钮</bg-button>
      <bg-button type="info">按钮</bg-button>
      <bg-button type="warning">按钮</bg-button>
      <bg-button type="danger">按钮</bg-button>
    </div>
    <div class="row">
      <bg-button plain>按钮</bg-button>
      <bg-button plain type="primary">按钮</bg-button>
      <bg-button plain type="success">按钮</bg-button>
      <bg-button plain type="info">按钮</bg-button>
      <bg-button plain type="warning">按钮</bg-button>
      <bg-button plain type="danger">按钮</bg-button>
    </div>
    <div class="row">
      <bg-button round>按钮</bg-button>
      <bg-button round type="primary">按钮</bg-button>
      <bg-button round type="success">按钮</bg-button>
      <bg-button round type="info">按钮</bg-button>
      <bg-button round type="warning">按钮</bg-button>
      <bg-button round type="danger">按钮</bg-button>
    </div>
    <div class="row">
      <bg-button icon="bg-icon-check" circle></bg-button>
      <bg-button icon="bg-icon-check" circle type="primary"></bg-button>
      <bg-button icon="bg-icon-check" circle type="success"></bg-button>
      <bg-button icon="bg-icon-check" circle type="info"></bg-button>
      <bg-button icon="bg-icon-check" circle type="warning"></bg-button>
      <bg-button icon="bg-icon-check" circle type="danger"></bg-button>
    </div>
    <div class="row">
      <bg-button disabled>按钮</bg-button>
      <bg-button disabled type="primary">按钮</bg-button>
      <bg-button disabled type="success">按钮</bg-button>
      <bg-button disabled type="info">按钮</bg-button>
      <bg-button disabled type="warning">按钮</bg-button>
      <bg-button disabled type="danger">按钮</bg-button>
    </div>
    <bg-button @click="visible=true" type="">点击显示</bg-button>
    <bg-dialog title="温馨提示" :visible.sync="visible">
      <bg-input type="text" placeholder="请输入用户名"></bg-input>
      <template v-slot:footer>
        <bg-button type="primary" @click="visible=false">确定</bg-button>
        <bg-button @click="visible=false">取消</bg-button>
      </template>
    </bg-dialog>
   <bg-form :model="model" label-width="100px">
     <bg-form-item label="用户名:">
       <bg-input placeholder="请输入用户名" clearable v-model="model.username"></bg-input>
     </bg-form-item>
     <bg-form-item label="用户名:">
       <bg-input placeholder="请输入密码" type='password' showPassword v-model="model.password"></bg-input>
     </bg-form-item>
     <bg-form-item label="开通:">
       <bg-switch v-model="model.active" active-color="green" inactive-color="red"></bg-switch>
     </bg-form-item>
     <bg-form-item label="性别:">
       <bg-radio-group v-model="model.gender">
         <bg-radio label="男"></bg-radio>
       <bg-radio label="女"></bg-radio>
       </bg-radio-group>
     </bg-form-item>
     <bg-form-item label="爱好:">
       <bg-checkbox-group v-model="model.hobby">
         <bg-checkbox label="打篮球"></bg-checkbox>
       <bg-checkbox label="打游戏"></bg-checkbox>
       <bg-checkbox label="敲代码"></bg-checkbox>
       </bg-checkbox-group>
     </bg-form-item>
   </bg-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      name: '',
      model: {
        username: '',
        active: false,
        gender: '1',
        hobby: [],
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
  .row{
    margin-bottom: 20px;
    .bg-button{
      margin-right: 20px;
    }
  }
  .app{
    .bg-input{
      width: 30%;
    }
  }
</style>
