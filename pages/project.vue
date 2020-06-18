<template>
  <b-row align-h="center">
    <b-col
      v-for="(value, key) in projects"
      :key="`big-card-${key}`"
      cols="12"
      md="10"
      class="mb-4"
    >
      <project-card
        :name="value.name"
        :thumbnail="value.thumbnail"
        :desc="value.desc"
        :tags="value.tags"
        :stacks="value.stacks"
        :width="180"
      />
    </b-col>
  </b-row>
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

</style>
