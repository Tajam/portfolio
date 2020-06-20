# Tajam's Portfolio

**I am still building it!**

My personal portfolio webpage

![Built with Nuxt.js](https://nuxtjs.org/logos/built-with-nuxt.svg "Also try Svelte!")

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy (Window)

```bash
# install dependencies
$ npm install --save-dev cross-env
$ npm install --save-dev push-dir
```

```js
/* nuxt.config.js */

// Add this line to the top
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/'

// Add the following property
export default {
  ...
  router: {
    base
  }
  ...
}
```

```js
/* package.json */

// Add the following scripts
"scripts": {
  ...
  "build:gh-pages": "cross-env DEPLOY_ENV=GH_PAGES nuxt build",
  "generate:gh-pages": "cross-env DEPLOY_ENV=GH_PAGES nuxt generate",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup",
  ...
},
```

```bash
# generate static project
$ npm run generate:gh-pages

# deploy
$ npm run deploy
```