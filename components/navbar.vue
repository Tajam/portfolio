<template>
  <div>
    <div class="px-3 py-2 fixed-top d-flex flex-row-reverse menu-bar d-md-none">
      <b-button v-b-modal.menu-modal variant="outline-light">
        <fa :icon="faBars" />
      </b-button>
    </div>
    <div class="top-padding d-md-none" />
    <b-modal id="menu-modal" ref="menu-modal" content-class="modal-bg" :hide-footer="true" :hide-header="true">
      <b-list-group flush>
        <b-list-group-item v-for="(value, key) in items" :key="`navbar-${key}`" class="m-0 p-0">
          <nuxt-link
            :to="value.url"
            class="nav-text small"
            :class="{active: value.status}"
            variant="light"
            @click.native="highlight(key);hideModal()"
          >
            <div>
              {{ key }}
            </div>
          </nuxt-link>
        </b-list-group-item>
        <b-list-group-item v-for="(value, key) in links" :key="`navbar-${key}`" class="m-0 p-0">
          <a
            class="nav-text small"
            target="_blank"
            :href="value.url"
            @mouseenter="linkDescUpdate(key)"
            @mouseleave="linkShow=false"
          >
            {{ key }}
            <fa :icon="value.icon" />
          </a>
        </b-list-group-item>
      </b-list-group>
    </b-modal>
    <b-container class="d-none d-md-block">
      <b-row class="p-0 m-0 mt-5">
        <b-col cols="9" class="p-0 m-0">
          <b-button-toolbar class="text-center">
            <b-button-group v-for="(value, key) in items" :key="value.key">
              <nuxt-link
                :to="value.url"
                class="mr-5 nav-text"
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
        <b-col cols="3" class="p-0 m-0">
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
      <hr class="d-none d-md-block mb-5">
    </b-container>
  </div>
</template>

<script>
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => {
    return {
      faBars,
      items: {
        About: {
          status: true,
          url: '/'
        },
        Projects: {
          status: false,
          url: '/projects'
        }
      },
      links: {
        Github: {
          icon: faGithub,
          url: 'https://github.com/Tajam'
        },
        LinkedIn: {
          icon: faLinkedin,
          url: 'https://www.linkedin.com/in/tajamheng'
        },
        Resume: {
          icon: faFileAlt,
          url: 'Resume.pdf'
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
    },
    hideModal () {
      this.$refs['menu-modal'].hide()
    }
  }
}
</script>

<style scoped>
  .top-padding {
    height: 5.5rem;
  }
  .nav-text {
    padding: 0.25rem 0;
    font-family: 'Staatliches', cursive;
    font-size: 3rem;
    color: rgba(255, 255, 255, .8);
    transition-duration: 250ms;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
  }
  .nav-text.small {
    padding: 0;
    font-size: 1.5rem;
  }
  .nav-text .underline {
    width: 0;
    height: 0;
    margin: auto;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 0.125rem;
    transition-duration: 250ms;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
  }
  .nav-text:hover {
    padding: 0;
    text-decoration: none;
  }
  .nav-text:hover .underline {
    width: 100%;
    height: .25rem;
  }
  .nav-text.active {
    text-decoration: none;
    color: rgba(255, 255, 255, .95);
  }
  .link-icon {
    margin: .25rem;
    color: rgba(255, 255, 255, .8);
    font-size: 2.5rem;
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0);
  }
  .link-desc.show {
    color: rgba(255, 255, 255, .8);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
  }
  .menu-bar {
    background-color: rgba(0, 0, 0, .15);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .3);
  }
  .list-group-item {
    text-align: right;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  .btn {
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 2rem;
    border: 0;
  }
  .btn:focus {
    box-shadow: unset;
  }
</style>
