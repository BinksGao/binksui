<template>
    <div class="bg-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'BgRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>
<style lang="scss">

</style>
