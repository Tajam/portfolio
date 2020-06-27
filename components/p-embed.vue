<template>
  <div>
    <b-embed
      :type="m_type || type"
      aspect="embed-responsive-16by9"
      :src="m_url || url"
      allowfullscreen
    />
    <p-text
      v-if="!m_caption || caption !== ''"
      :text="m_caption || caption"
      class="text-center mt-1"
    />
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
    type: {
      type: String,
      required: false,
      default: 'iframe'
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    caption: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      m_type: undefined,
      m_url: undefined,
      m_caption: undefined
    }
  },
  created () {
    const { type, url, caption } = this.option
    if (type) { this.m_type = type }
    if (url) { this.m_url = url }
    if (caption) { this.m_caption = caption }
  }
}
</script>
