<template>
  <div>
    <b-row>
      <b-col>
        <h1 class="plain-text">
          Hi, I am Jin Heng!
        </h1>
        <h5 class="plain-text">
          Create games, apps, webs and some Spigot plugins.
        </h5>
      </b-col>
    </b-row>
    <b-row class="mt-4 px-4 px-md-0">
      <b-col v-for="(value, key) in skills" :key="`skill-list-${key}`">
        <skill-list :title="key" :items="value" />
      </b-col>
    </b-row>
    <b-row class="mt-4 mt-md-5">
      <b-col cols="12" md="4">
        <a href="Resume.pdf" target="_blank" class="plain-text resume p-3 d-block">
          <fa class="d-inline mr-1" :icon="faFileAlt" />
          <span>
            Get Resume
          </span>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import SkillList from '~/components/skill-list'

export default {
  components: {
    SkillList
  },
  data: () => {
    return {
      faFileAlt,
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

<style scoped>
  .plain-text {
    font-weight: bold;
    color: rgba(255, 255, 255, .925);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  }
  .resume {
    font-size: 1rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .45);
    transition-duration: 250ms;
    cursor: pointer;
    text-decoration: none;
  }
  .resume:hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
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
