<template>
  <div>
    <div>
      <b-img class="thumbnail" center fluid :src="m_url || url" :alt="m_url || url" />
    </div>
    <p-text
      v-if="!m_caption || caption !== ''"
      :content="m_caption || caption"
      class="italic"
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
      m_url: undefined,
      m_caption: undefined
    }
  },
  created () {
    const { url, caption } = this.option
    if (url) { this.m_url = url }
    if (caption) { this.m_caption = caption }
  }
}
</script>

<style scoped>
  .thumbnail {
    padding: .5em;
    background-color: rgba(255, 255, 255, .75);
    border-radius: .25em;
  }
  .italic {
    font-style: italic;
  }
</style>
