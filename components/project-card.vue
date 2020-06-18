<template>
  <b-card
    :title="name"
    :img-src="thumbnail"
    :img-alt="name"
    img-height="100%"
    :img-width="width"
    img-left
    @click="link('#')"
  >
    <div v-if="tags">
      <b-badge v-for="tag in tags" :key="`tag-${tag}-${name}`" class="mr-1">
        {{ tag }}
      </b-badge>
    </div>
    <b-card-text v-if="desc" class="my-2">
      {{ desc }}
    </b-card-text>
    <div v-if="stacks">
      <span class="text-muted mr-1">
        Stacks:
      </span>
      <b-badge v-for="stack in stacks" :key="`stack-${stack}-${name}`" class="mr-1">
        {{ stack }}
      </b-badge>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true,
      default: 'image-placeholder.jpg'
    },
    name: {
      type: String,
      required: true,
      default: 'Untitled'
    },
    desc: {
      type: String,
      required: false,
      default: undefined
    },
    tags: {
      type: Array,
      required: false,
      default: undefined
    },
    stacks: {
      type: Array,
      required: false,
      default: undefined
    },
    width: {
      type: Number,
      required: false,
      default: 80
    }
  },
  methods: {
    link (route) {
      this.$router.push({
        path: '#'
      })
    }
  }
}
</script>

<style scoped>
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
</style>
