// Node_Modules
import Vue from 'vue'
import axios from 'axios'
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io'
import VueMaterial from 'vue-material'

// Imports Vuematerial styles
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'


// Files in Directory
import App from './App'
import router from './router'
import store from './store'
let port = require('../../server/port.json').port;
let server = 'http://localhost:' + port;



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueMaterial, VueSocketIO, server, store);

/* eslint-disable no-new */
new Vue({
	components: {
		App
	},
	router,
	store,
	template: '<App/>'
}).$mount('#app')
