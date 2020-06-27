<template>
  <div>
    <b-row>
      <p-text text="Hi, I am Jin Heng!" tag="h1" :center="true" />
      <p-text text="Create games, apps, webs and some Spigot plugins." tag="h5" :center="true" />
    </b-row>
    <b-row class="mt-4 px-4 px-md-0">
      <b-col v-for="(value, key) in skills" :key="`skill-list-${key}`">
        <p-list :title="key" :items="value" />
      </b-col>
    </b-row>
    <b-row class="mt-4 mt-md-5">
      <p-link url="Resume.pdf" text="Get my resume here!" />
    </b-row>
  </div>
</template>

<script>
import PList from '~/components/p-list'
import PLink from '~/components/p-link'
import PText from '~/components/p-text'

export default {
  components: {
    PList,
    PLink,
    PText
  },
  data () {
    return {
      skills: {
        Code: [
          'Java',
          'C#',
          'C++',
          'Node.js',
          'Python',
          'PHP'
        ],
        Web: [
          'vue.js',
          'Flask',
          'Laravel'
        ],
        Game: [
          'Unity',
          'GM: S',
          'UE4'
        ]
      }
    }
  }
}
</script>
