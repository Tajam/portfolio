<template>
  <div>
    <b-row>
      <b-col cols="12" md="4">
        <avatar class="mb-3 mb-md-0" />
        <project-panel class="d-none d-md-block" />
      </b-col>
      <b-col cols="12" md="8" class="px-md-5 py-md-3">
        <about-panel />
      </b-col>
      <b-col cols="12" class="d-md-none">
        <hr>
        <project-panel />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Avatar from '~/components/avatar'
import AboutPanel from '~/components/index/about-panel'
import ProjectPanel from '~/components/index/project-panel'

export default {
  components: {
    Avatar,
    AboutPanel,
    ProjectPanel
  }
}
</script>
