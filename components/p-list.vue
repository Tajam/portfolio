<template>
  <div>
    <p-text :text="m_title || title" tag="h3" />
    <b-list-group flush>
      <b-list-group-item
        v-for="item in (m_items || items)"
        :key="`list-${m_title || title}-${item}`"
        class="py-0 px-1 px-md-3"
      >
        <p-text :text="item" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import PText from '~/components/p-text'

export default {
  components: {
    PText
  },
  props: {
    options: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    title: {
      type: String,
      required: false,
      default: 'untitled'
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      m_title: undefined,
      m_items: undefined
    }
  },
  created () {
    const { title, items } = this.options
    if (title) { this.m_title = title }
    if (items) { this.m_items = items }
  }
}
</script>

<style scoped>
  .list-group-item {
    background-color: rgba(0, 0, 0, 0) !important;
  }
</style>
