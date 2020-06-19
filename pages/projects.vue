<template>
  <div>
    <b-row class="d-md-none">
      <b-col>
        <div class="mx-4 header">
          Projects
        </div>
        <hr>
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
        <project-card
          :url="key"
          :name="value.name"
          :thumbnail="value.thumbnail"
          :desc="value.desc"
          :tags="value.tags"
          :stacks="value.stacks"
          :width="180"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { projects } from '~/assets/projects-header.json'
import ProjectCard from '~/components/project-card'

export default {
  components: {
    ProjectCard
  },
  data: () => {
    return {
      projects
    }
  }
}
</script>

<style scoped>
  .header {
      color: rgba(255, 255, 255, .9);
      font-family: 'Staatliches', cursive;
      font-size: 2rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
    }
</style>
