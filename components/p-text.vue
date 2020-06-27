<template>
  <div :class="{center: m_center || center}" class="text w-100">
    <component :is="m_tag || tag" :class="{special: m_special || special}">
      {{ m_text || text }}
    </component>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => { return {} }
    },
    text: {
      type: String,
      default: ''
    },
    special: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'span'
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      m_text: undefined,
      m_special: undefined,
      m_tag: undefined,
      m_center: undefined
    }
  },
  created () {
    const { text, special, tag } = this.option
    if (text) { this.m_text = text }
    if (special) { this.m_special = special }
    if (tag) { this.m_tag = tag }
  }
}
</script>

<style scoped>
  .text {
    color: rgba(255, 255, 255, .925);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
    text-align: justify;
  }
  .special {
    font-family: 'Staatliches', cursive;
    font-weight: normal !important;
  }
  h1, h2, h3 {
    font-weight: bolder;
  }
  @media only screen and (max-width:992px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    .center {
      text-align: center !important;
    }
  }
</style>
