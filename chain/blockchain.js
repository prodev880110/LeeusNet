const express = require('express');
const bodyParser = require('body-parser');

const Block = require('./block');
const Transaction = require('./transaction');
//creates chain
class Blockchain {
	constructor() {
		//sets up createGenesisBlock
		this.chain = [];
		// set difficulty
		this.difficulty = 3;
		//hold unmined transactions
		this.unminedTransactions = [];
		this.miningReward = 1;
		this.registeredAddresses = [];//'wallet-a', 'wallet-b', 'wallet-c', 'wallet-k'
		this.createGenesisBlock();
		//calls airdropCoins
		this.airdropCoins(100);
	}

	airdropCoins(coins) {
		for (const addr of this.registeredAddresses) {
			let transaction = new Transaction(Date.now(), "mint", addr, coins);
			this.unminedTransactions.push(transaction);
		}
		this.mineCurrentBlock('wallet-k');
	}

	createGenesisBlock() {
		let transaction = new Transaction(Date.now(), "mint", "genesis", 0);
		let block = new Block(Date.now(), [transaction], "0")
		this.chain.push(block);

	}
	//gets latest Block
	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}
	// getTotalBlocks() {
	// 	return chain.length;
	// }
	//
	// getChain() {
	// 	return chain;
	// }
	//mine current blocks
	mineCurrentBlock(minerAddr) {
		let validTransactions = [];
		for (const transaction of this.unminedTransactions) {
			if (transaction.payerAddr === "mint" || this.validateTransaction(transaction)) {
				// allows mint to make transaction
				validTransactions.push(transaction);
			}
		}

		console.log("Transactions Validated " + validTransactions.length);

		let block = new Block(Date.now(), validTransactions, this.getLatestBlock().hash);

		block.mineBlock(this.difficulty);

		console.log("Rawr! Successfully Mined...");
		this.chain.push(block);
		// reset unminedTransactions array
		this.unminedTransactions = [
      // mint coins
      new Transaction(Date.now(), "mint", minerAddr, this.miningReward)
    ];
	}
	// validate
	validateTransaction(transaction) {
		let payerAddr = transaction.payerAddr
		let balance = this.getAddressBalance(payerAddr);
		if (balance >= transaction.amount) {
			return true;
		} else {
			return false;
		}
	}
	//
	createTransaction(transaction) {
		this.unminedTransactions.push(transaction);
	}

	//gets address balance
	getAddressBalance(addr) {
		//start balance
		let balance = 0;
		// loops through transactions
		for (const block of this.chain) {
			for (const transaction of block.transactions) {
				if (transaction.payerAddr === addr) {
					// sub transaction amt from payer balance
					balance -= transaction.amount;
				}
				if (transaction.payeeAddr == addr) {
					// adds transaction amt to payee balance
					balance += transaction.amount;
				}
			}
		}
		return balance;
	}
	//validate Chain
	isChainValid() {
		//start at 1 to skip genesis block
		for (let i = 1; i < this.chain.length; i++) {
			// grab block at loop index
			const currentBlock = this.chain[i];
			//grab previos
			const previousBlock = this.chain[i - 1];
			//validate data integrity
			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}
			// validare hash chain link
			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}
		//all goood!!
		return true;
	}
}
module.exports = Blockchain
