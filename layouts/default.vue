<template>
  <div>
    <navbar />
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import Navbar from '~/components/navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  body {
    font-family: 'Lato', sans-serif;
    height: 100vh;
    background: rgb(0,255,170);
    background: -moz-linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background: -webkit-linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background: linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
  }
  .modal-bg {
    background-image: rgb(0,255,170);
    background-image: -moz-linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background-image: -webkit-linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background-image: linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
