<template>
  <div class="bg-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BgCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
