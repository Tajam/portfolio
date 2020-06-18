<template>
  <div>
    <b-img class="thumbnail" center fluid :src="picture.url" :alt="picture.name" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      picture: {
        url: 'profile-picture.jpg',
        name: 'Profile Image'
      }
    }
  }
}
</script>

<style scoped>
  .thumbnail {
    padding: .5em;
    background-color: rgba(255, 255, 255, .75);
    border-radius: .25em;
  }
</style>
