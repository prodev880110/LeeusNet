import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
	modules,
	strict: process.env.NODE_ENV !== 'production',
	state: {
		isConnected: false,
		socketMessage: ''
	},

	mutations: {
		SOCKET_CONNECT(state) {
			state.isConnected = true;
		},

		SOCKET_DISCONNECT(state) {
			state.isConnected = false;
		},

		SOCKET_messageChannel(state, message) {
			state.socketMessage = message
		}
	}
})
