<template>
  <div>
    <b-row align-h="center">
      <b-col cols="3">
        <b-img class="thumbnail" center fluid :src="picture.url" :alt="picture.name" />
      </b-col>
      <b-col cols="9" />
    </b-row>
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
