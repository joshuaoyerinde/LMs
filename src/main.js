import Vue from 'vue'
import App from './App.vue'
import router from './router'
import lVuex from './store/index'
// //importing of vuematerial
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import 'videojs-contrib-hls.js/src/videojs.hlsjs'

//vuetify
import vuetify from './plugins/vuetify'

import './style.css';

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  store:lVuex,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
