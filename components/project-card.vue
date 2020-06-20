<template>
  <a :href="`project/${url}`">
    <b-card
      :title="name"
      :img-src="`projects/${url}/thumbnail.jpg`"
      :img-alt="name"
      img-height="100%"
      :img-width="width"
      img-left
    >
      <div v-if="tags">
        <b-badge v-for="tag in tags" :key="`tag-${tag}-${name}`" class="mr-1">
          {{ tag }}
        </b-badge>
      </div>
      <b-card-text v-if="desc" class="my-2 d-none d-md-block">
        {{ desc }}
      </b-card-text>
      <div v-if="stacks" class="d-none d-md-block">
        <span class="text-muted mr-1">
          Stacks:
        </span>
        <b-badge v-for="stack in stacks" :key="`stack-${stack}-${name}`" class="mr-1">
          {{ stack }}
        </b-badge>
      </div>
    </b-card>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'Untitled'
    },
    url: {
      type: String,
      required: true,
      default: '#'
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
