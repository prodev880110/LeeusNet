export default {
	name: 'landing-page',
	data() {
		return {
			isConnected: false,
			socketMessage: ''
		}
	},

	sockets: {
		connect() {
			// Fired when the socket connects.
			this.isConnected = true;
		},

		disconnect() {
			this.isConnected = false;
		},

		// Fired when the server sends something on the "messageChannel" channel.
		messageChannel(data) {
			this.socketMessage = data
		}
	},

	methods: {
		pingServer() {
			// Send the "pingServer" event to the server.
			this.$socket.emit('pingServer', 'PING!')
		}
	}
}
