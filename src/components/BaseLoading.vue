<template>
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <v-progress-circular indeterminate :color="color" :size="size" />
      <h1 class=" my-5">Loading...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    color: {
      required: false,
      type: String,
      default: 'primary'
      // validator: (value) => {
      //   return value.search(/#\W{6,6}/)||value.search(/[\W]/)
      // }
    },
    size: {
      required: false,
      type: [String, Number],
      default: 32
    }
  }
}
</script>

<style lang="stylus">
.spinner-wrapper
  .spinner
    width 4rem
    height 4rem
</style>
