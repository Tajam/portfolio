<template>
  <a :href="m_url || url" target="_blank" class="d-block w-100 center my-3">
    <fa class="d-inline mr-2" :icon="faLink" />
    <h5 class="d-inline">
      {{ m_text || text }}
    </h5>
  </a>
</template>

<script>
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    option: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: 'Link'
    }
  },
  data () {
    return {
      faLink,
      m_url: undefined,
      m_text: undefined
    }
  },
  created () {
    const { url, text } = this.option
    if (url) { this.m_url = url }
    if (text) { this.m_text = text }
  }
}
</script>

<style scoped>
  a {
    color: rgba(255, 255, 255, .925);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  }
  @media only screen and (max-width:992px) {
    .center {
      text-align: center;
    }
  }
</style>
