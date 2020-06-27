<template>
  <div class="mt-4">
    <p-head title="Notable Project" />
    <p-card v-for="id in featured" :id="id" :key="`card-${id}`" class="mb-2" />
  </div>
</template>

<script>
import { featured } from '~/assets/projects-header.json'
import PHead from '~/components/p-head'
import PCard from '~/components/p-card'

export default {
  components: {
    PHead,
    PCard
  },
  data: () => {
    return {
      featured
    }
  }
}
</script>
