// provides production/testing encryption
const SHA256 = require('crypto-js/SHA256');
//Define Block
class Block {
	// Set params
	constructor(timestamp, transactions, previousHash) {
		//properties
		this.timestamp = timestamp;
		this.transactions = transactions;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}
	// calculates hash
	calculateHash() {
		return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
	}
	//proof of work
	mineBlock(difficulty) {
		let count = 0;
		while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
			this.nonce++;
			count++;
			this.hash = this.calculateHash();
		}
		console.log("Block has been Mined: (" + count + " iterations). Hash:" + this.hash);
	}
}
module.exports = Block
