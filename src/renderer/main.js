// Node_Modules
import Vue from 'vue'
import axios from 'axios'
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io'
import VueMaterial from 'vue-material'
import { MyVuexStore } from './store/index.js'
// Imports Vuematerial styles
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-dark.css'


// Files in Directory
import App from './App'
import router from './router'
import store from './store'
let port = require('../../server/port.json').port;
let server = 'http://localhost:' + port;



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueMaterial, store)
Vue.use(VueSocketIO, server);

/* eslint-disable no-new */
new Vue({
	components: {
		App
	},
	router,
	store,
	template: '<App/>',
	sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    clickButton: function(val){
        // $socket is socket.io-client instance
        this.$socket.emit('emit_method', val);
    }
  }
}).$mount('#app')
