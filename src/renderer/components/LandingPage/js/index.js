var io = require('socket.io-client');
import $ from 'jquery';

export default {
	name: 'landing-page',
	data() {
		return {}
	},
	created(){
		$(function () {
	    const socket = io();
	    $('form').submit(function(){
	      socket.emit('chat message', $('#m').val());
	      $('#m').val('');
	      return false;
	    });
	    socket.on('chat message', function(msg){
	      $('#messages').append($('<li>').text(msg));
	    });
	  });
	}
}
