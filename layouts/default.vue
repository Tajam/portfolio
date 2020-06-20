<template>
  <div class="mb-2 mb-md-0">
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
    background: rgb(0, 189, 145);
    background: -moz-linear-gradient(145deg, rgb(0, 190, 127) 0%, rgb(0, 189, 145) 50%, rgb(0, 184, 174) 100%);
    background: -webkit-linear-gradient(145deg, rgb(0, 190, 127) 0%, rgb(0, 189, 145) 50%, rgb(0, 184, 174) 100%);
    background: linear-gradient(145deg, rgb(0, 190, 127) 0%, rgb(0, 189, 145) 50%, rgb(0, 184, 174) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .modal-bg {
    opacity: .925;
    background-image: rgb(0, 189, 145);
    background-image: -moz-linear-gradient(145deg, rgb(0, 190, 127) 0%, rgb(0, 189, 145) 50%, rgb(0, 184, 174) 100%);
    background-image: -webkit-linear-gradient(145deg, rgb(0, 190, 127) 0%, rgb(0, 189, 145) 50%, rgb(0, 184, 174) 100%);
    background-image: linear-gradient(145deg, rgb(0, 190, 127) 0%, rgb(0, 189, 145) 50%, rgb(0, 184, 174) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
