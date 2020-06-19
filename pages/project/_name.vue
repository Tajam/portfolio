<template>
  <div>
    {{ data.test }}
  </div>
</template>

<script>
export default {
  async validate ({ params, error }) {
    return await import(`~/assets/projects/${params.name}.json`)
      .then((data) => {
        return { data }
      })
      .catch((e) => {
        error({ statusCode: 404 })
      })
  }
}
</script>

<style scoped>
</style>
