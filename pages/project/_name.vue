<template>
  <div v-if="!fetching" class="px-4">
    <b-row v-for="(row, ri) in data" :key="`project-page-row-${ri}`">
      <b-col v-for="(col, ci) in row" :key="`project-page-col-${ri}-${ci}`">
        <component :is="`p-${col.type}`" :option="col.option" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PEmbed from '~/components/projects/p-embed'
import PHead from '~/components/projects/p-head'
import PImg from '~/components/projects/p-img'
import PList from '~/components/projects/p-list'
import PText from '~/components/projects/p-text'

export default {
  components: {
    PEmbed,
    PHead,
    PImg,
    PList,
    PText
  },
  async asyncData ({ params, error }) {
    return await import(`~/assets/projects/${params.name}.json`)
      .then((data) => {
        return {
          fetching: false,
          data: data.data
        }
      })
      .catch((e) => {
        error({ statusCode: 404 })
      })
  },
  data: () => {
    return {
      fetching: true
    }
  }
}
</script>

<style scoped>
</style>
