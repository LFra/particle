'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _4dd9a755 = process.BROWSER_BUILD ? () => System.import('/Users/ludwigfrank/Dropbox/Development/Apps/particle/pages/index.vue') : require('/Users/ludwigfrank/Dropbox/Development/Apps/particle/pages/index.vue')

const _26217c86 = process.BROWSER_BUILD ? () => System.import('/Users/ludwigfrank/Dropbox/Development/Apps/particle/pages/secret.vue') : require('/Users/ludwigfrank/Dropbox/Development/Apps/particle/pages/secret.vue')

const _d5f6afc2 = process.BROWSER_BUILD ? () => System.import('/Users/ludwigfrank/Dropbox/Development/Apps/particle/pages/LEDSetup.vue') : require('/Users/ludwigfrank/Dropbox/Development/Apps/particle/pages/LEDSetup.vue')


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.scrollToTop || (r.components.default.options && r.components.default.options.scrollToTop))) {
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _4dd9a755,
			name: "index"
		},
		{
			path: "/secret",
			component: _26217c86,
			name: "secret"
		},
		{
			path: "/LEDSetup",
			component: _d5f6afc2,
			name: "LEDSetup"
		}
  ]
})
