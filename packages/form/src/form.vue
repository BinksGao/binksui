<template>
  <div class="bg-form"><slot></slot></div>
</template>

<script>
export default {
  name: 'BgForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '60px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
