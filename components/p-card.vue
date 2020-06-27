<template>
  <div>
    <a :href="`${base}project/${m_id || id}`">
      <b-card
        :title="name"
        :img-src="`${base}projects/${m_id || id}/thumbnail.jpg`"
        :img-alt="name"
        img-height="100%"
        :img-width="(m_detailed || detailed) ? 180 : 80"
        img-left
      >
        <div>
          <b-badge v-for="tag in tags" :key="`tag-${tag}-${name}`" class="mr-1">
            {{ tag }}
          </b-badge>
        </div>
        <b-card-text v-if="m_detailed || detailed" class="my-2 d-none d-md-block">
          {{ desc }}
        </b-card-text>
        <div v-if="m_detailed || detailed" class="d-none d-md-block">
          <span class="text-muted mr-1">
            Stacks:
          </span>
          <b-badge v-for="stack in stacks" :key="`stack-${stack}-${name}`" class="mr-1">
            {{ stack }}
          </b-badge>
        </div>
      </b-card>
    </a>
  </div>
</template>

<script>
import { projects } from '~/assets/projects-header.json'

export default {
  props: {
    option: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    detailed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      base: process.env.base,
      name: projects[this.id || this.option.id].name,
      desc: projects[this.id || this.option.id].desc,
      tags: projects[this.id || this.option.id].tags,
      stacks: projects[this.id || this.option.id].stacks,
      m_id: undefined,
      m_detailed: undefined
    }
  },
  created () {
    const { id, detailed } = this.option
    if (id) { this.m_id = id }
    if (detailed) { this.m_detailed = detailed }
  }
}
</script>

<style scoped>
  a {
    color: rgba(50, 50, 50, 1);
    text-decoration: none;
  }
  .card {
    cursor: pointer;
    background-color: rgba(255, 255, 255, .6);
    transition-duration: 250ms;
  }
  .card:hover {
    background-color: rgba(255, 255, 255, .8);
  }
  .card-title {
    margin: 0.25rem 0;
    font-size: 1.05rem;
    font-weight: 700;
  }
  .card-body {
    padding: .75rem;
  }
  @media only screen and (max-width:992px) {
    img {
      width: 80px !important
    }
  }
</style>
