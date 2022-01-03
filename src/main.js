import Vue from 'vue'

// plugins
import vuetify from './plugins/vuetify'
import './plugins/fontAwesome'

// Custom directives
import './directives'

// css
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import router from './router'
import store from './store'

// css Global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
