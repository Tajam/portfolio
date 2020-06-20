<template>
  <div class="text">
    {{ option.content }}
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
      default: () => { return {} }
    }
  }
}
</script>

<style scoped>
  .text {
    color: rgba(255, 255, 255, .925);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  }
</style>
