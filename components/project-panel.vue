<template>
  <div class="mt-4">
    <div class="mx-4 header">
      Notable Projects
    </div>
    <hr>
    <div v-for="key in featured" :key="`card-${key}`" class="mb-2">
      <project-card
        :url="key"
        :name="projects[key].name"
        :tags="projects[key].tags"
      />
    </div>
  </div>
</template>

<script>
import { featured, projects } from '~/assets/projects-header.json'
import ProjectCard from '~/components/project-card'

export default {
  components: {
    ProjectCard
  },
  data: () => {
    return {
      projects,
      featured
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
