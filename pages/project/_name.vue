<template>
  <div v-if="!fetching" class="px-md-5">
    <b-row>
      <b-col cols="12">
        <p-text :text="header.name" tag="h1" :special="true" />
      </b-col>
      <b-col cols="12" class="mb-3">
        <div>
          <b-badge
            v-for="tag in header.tags"
            :key="`tag-${tag}-${header.name}`"
            class="mr-1"
          >
            {{ tag }}
          </b-badge>
        </div>
        <div>
          <b-badge
            v-for="stack in header.stacks"
            :key="`tag-${stack}-${header.name}`"
            variant="primary"
            class="mr-1"
          >
            {{ stack }}
          </b-badge>
        </div>
      </b-col>
      <b-col cols="12">
        <p-text :text="header.desc" />
        <hr>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(col, ci) in data" :key="`pp-col-${ci}`" cols="12" :md="col.size || 12">
        <component :is="`p-${col.type}`" :option="col.option" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PEmbed from '~/components/p-embed'
import PHead from '~/components/p-head'
import PImg from '~/components/p-img'
import PLink from '~/components/p-link'
import PText from '~/components/p-text'
import { projects } from '~/assets/projects-header.json'

export default {
  components: {
    PEmbed,
    PHead,
    PImg,
    PLink,
    PText
  },
  async asyncData ({ params, error }) {
    return await import(`~/assets/projects/${params.name}.json`)
      .then((data) => {
        return {
          fetching: false,
          data: data.data,
          header: projects[params.name]
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
