<template>
  <div>
    <h1 class="plain-text">
      Hi, I am Jin Heng!
    </h1>
    <h5 class="plain-text">
      Game programmer, writes Spigot plugins, make cool websites.
    </h5>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .plain-text {
    font-weight: bold;
    color: rgba(255, 255, 255, .925);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  }
  @media only screen and (max-width:992px) {
    h1 {
      text-align: center;
      font-size: 2em;
    }
    h5 {
      text-align: center;
      font-size: 1em;
    }
  }
</style>
