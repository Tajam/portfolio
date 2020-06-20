/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/'

module.exports = {
  base
}
