<template>
  <div>
    <b-row class="d-md-none">
      <b-col>
        <p-head title="Projects" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col
        v-for="(value, key) in projects"
        :key="`big-card-${key}`"
        cols="12"
        md="10"
        class="mb-2 mb-md-4"
      >
        <p-card :id="key" :detailed="true" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { projects } from '~/assets/projects-header.json'
import PCard from '~/components/p-card'
import PHead from '~/components/p-head'

export default {
  components: {
    PCard,
    PHead
  },
  data: () => {
    return {
      projects
    }
  }
}
</script>
