import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module'

Vue.use(Vuex);

const lVuex = new Vuex.Store({

    modules:{
        modules
    }
})
export default lVuex;