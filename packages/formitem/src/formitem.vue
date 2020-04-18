<template>
  <div class="bg-form-item">
    <label class="bg-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="bg-form-item__content">
      <slot></slot>
    </div>
</div>
</template>

<script>
export default {
  name: 'BgFormItem',
  props: {
    label: {
      type: String
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.bg-form-item {
  margin-bottom: 25px;
  .bg-form-item__label {
    text-align: left;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .bg-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
