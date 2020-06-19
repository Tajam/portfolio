<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <b-list-group flush>
      <b-list-group-item
        v-for="item in items"
        :key="`skill-${title}-${item}`"
        class="py-0 px-1 py-md-1 px-md-3"
      >
        {{ item }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Untitled'
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
  h3 {
    color: rgba(255, 255, 255, .925);
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  }
  .list-group-item {
    font-size: 1.1rem;
    font-weight: bolder;
    color: rgba(255, 255, 255, .925);
    background-color: rgba(0, 0, 0, 0);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  }
  @media only screen and (max-width:992px) {
    h3 {
      font-size: 1.3rem;
    }
    .list-group-item {
      font-weight: normal;
      font-size: 1rem;
    }
  }
</style>
