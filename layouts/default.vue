<template>
  <b-container>
    <b-row class="mt-5" align-h="center">
      <b-col>
        <navbar />
        <hr>
      </b-col>
    </b-row>
    <nuxt />
  </b-container>
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
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  body {
    font-family: 'Lato', sans-serif;
    height: 100vh;
    background: rgb(0,255,170);
    background: -moz-linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background: -webkit-linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    background: linear-gradient(145deg, rgba(0,255,170,1) 0%, rgba(0,255,195,1) 50%, rgba(0,255,242,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffaa",endColorstr="#00fff2",GradientType=1);
  }
</style>
