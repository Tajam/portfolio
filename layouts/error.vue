<template>
  <div class="container">
    <b-row>
      <b-col>
        <a
          :href="`https://www.google.com/search?q=${error.statusCode}+HTTP+status+code`"
          target="_blank"
          class="d-block"
        >
          <div class="icon-error">
            <fa :icon="faExclamationCircle" />
          </div>
        </a>
        <div class="text-error">
          Code: {{ error.statusCode }}
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    error: {
      type: Object,
      required: true,
      default: () => {
        return {
          statusCode: 500
        }
      }
    }
  },
  data: () => {
    return { faExclamationCircle }
  }
}
</script>

<style scoped>
  .icon-error {
    color: rgba(255, 255, 255, .8);
    font-size: 5rem;
    text-align: center;
    transition-duration: 250ms;
  }
  .icon-error:hover {
    font-size: 5.5rem;
    color: rgba(255, 255, 255, .95);
  }
  .text-error {
    color: rgba(255, 255, 255, .9);
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
  }
</style>
