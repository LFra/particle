<template>
  <div id="__nuxt">
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
let layouts = {

  "_default": process.BROWSER_BUILD ? () => System.import('/Users/ludwigfrank/Dropbox/Development/Apps/particle/node_modules/nuxt/dist/app/layouts/default.vue') : require('/Users/ludwigfrank/Dropbox/Development/Apps/particle/node_modules/nuxt/dist/app/layouts/default.vue')

}

export default {
  head: {"title":"Auth Routes","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","content":"Auth Routes example"}]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout)
      }
      this.layout = layouts[_layout]
      return Promise.resolve(this.layout)
    },
    loadLayout (_layout) {
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        this.layout = layouts[_layout]
        return this.layout
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  }
}
</script>


