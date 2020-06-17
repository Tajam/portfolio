<template>
  <b-row class="p-0 m-0">
    <b-col class="p-0 m-0">
      <b-button-toolbar class="text-center">
        <b-button-group v-for="(value, key) in items" :key="value.key">
          <nuxt-link
            :to="value.url"
            class="mx-4 nav-text"
            :class="{active: value.status}"
            variant="light"
            @click.native="highlight(key)"
          >
            <div>
              {{ key }}
            </div>
            <div class="underline" />
          </nuxt-link>
        </b-button-group>
      </b-button-toolbar>
    </b-col>
    <b-col class="p-0 m-0">
      <div class="float-right">
        <span v-for="(value, key) in links" :key="value.key" class="mr-2">
          <a
            class="link-icon"
            target="_blank"
            :href="value.url"
            @mouseenter="linkDescUpdate(key)"
            @mouseleave="linkShow=false"
          >
            <fa :icon="value.icon" />
          </a>
        </span>
        <div class="link-desc" :class="{show: linkShow}">
          {{ linkDesc }}
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => {
    return {
      items: {
        About: {
          key: 'navbar-about-button',
          status: true,
          url: '/'
        },
        Projects: {
          key: 'navbar-projects-button',
          status: false,
          url: '/project'
        }
      },
      links: {
        Github: {
          icon: faGithub,
          key: 'navbar-github-link',
          url: 'https://github.com/Tajam'
        },
        LinkedIn: {
          icon: faLinkedin,
          key: 'navbar-linkedin-link',
          url: 'https://www.linkedin.com/in/tajamheng'
        },
        Resume: {
          icon: faFileAlt,
          key: 'navbar-resume-link',
          url: '#'
        }
      },
      linkDesc: '-',
      linkShow: false
    }
  },
  methods: {
    highlight (key) {
      for (const k in this.items) {
        this.items[k].status = (key === k)
      }
    },
    linkDescUpdate (key) {
      this.linkShow = true
      this.linkDesc = key
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  .nav-text {
    padding: 0.1em 0;
    font-family: 'Staatliches', cursive;
    font-size: 3em;
    color: rgba(255, 255, 255, .8);
    transition-duration: 250ms;
  }
  .nav-text .underline {
    width: 0;
    height: 0;
    margin: auto;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 0.05em;
    transition-duration: 250ms;
  }
  .nav-text:hover {
    padding: 0;
    text-decoration: none;
  }
  .nav-text:hover .underline {
    width: 100%;
    height: .1em;
  }
  .nav-text.active {
    text-decoration: none;
    color: rgba(255, 255, 255, .95);
  }
  .link-icon {
    margin: .25em;
    color: rgba(255, 255, 255, .8);
    font-size: 2.5em;
    transition: 250ms;
  }
  .link-icon:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, .95);
  }
  .link-desc {
    text-align: center;
    font-weight: 700;
    color: rgba(255, 255, 255, 0);
    transition-duration: 250ms;
  }
  .link-desc.show {
    color: rgba(255, 255, 255, .8);
  }
</style>
