<template>
  <div>
    <b-row>
      <b-col cols="12" md="4">
        <avatar />
      </b-col>
      <b-col cols="12" md="8" class="px-5 py-3">
        <about-panel />
      </b-col>
      <b-col cols="12" md="4">
        <project-panel />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Avatar from '~/components/avatar'
import AboutPanel from '~/components/about-panel'
import ProjectPanel from '~/components/project-panel'

export default {
  components: {
    Avatar,
    AboutPanel,
    ProjectPanel
  }
}
</script>
