import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/app'
import Course from './modules/course'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = new Vuex.Store({
    modules: {
     App,
     Course
    },
    plugins: [vuexLocal.plugin]

});


export default store