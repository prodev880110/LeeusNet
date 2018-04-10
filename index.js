// Module Imports
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// File Imports
const Blockchain = require('./chain/blockchain.js');
const Transaction = require('./chain/transaction.js');
const leeusNode = require('./chain/node.js');

const port = 3000 + Math.floor(Math.random() * 10);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
});

http.listen(port, function() {
	console.log('Making noise on: ' + port);
});

// Leeus = new Blockchain();

// const port = 18070+Math.floor(Math.random()*30);
// console.log('starting node on ', port)
// let node1 = new leeusNode(port);
//
// node1.init();
//
// const http_port = 4000 + Math.floor(Math.random()*10);
//
// let BrewHTTP = function (){
// 	const app = new express();
//
// 	app.use(bodyParser.json());
//
// 	app.get('/addNode/:port', (req, res)=>{
// 		console.log('add host: '+req.params.port)
// 		node1.addPeer('localhost', req.params.port)
//
// 		res.send();
// 	})
//
// 	app.get('/spawnBrew/:teammember', (req, res)=>{
// 		let newBlock = node1.createBlock(req.params.teammember);
// 		console.log('block created');
// 		res.send();
// 	})
//
// 	app.listen(http_port, () => {
// 		console.log(`http server up.. ${http_port}`);
// 	})
// }
//
// let httpserver = new BrewHTTP();
