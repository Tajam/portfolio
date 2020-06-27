<template>
  <div class="mt-3">
    <p-text :text="m_title || title" tag="h2" :special="true" />
    <hr>
  </div>
</template>

<script>
import PText from '~/components/p-text'

export default {
  components: {
    PText
  },
  props: {
    option: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      m_title: undefined
    }
  },
  created () {
    const { title } = this.option
    if (title) { this.m_title = title }
  }
}
</script>
