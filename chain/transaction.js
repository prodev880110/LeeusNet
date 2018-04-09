//define transactions
class Transaction {
	constructor(timestamp, payerAddr, payeeAddr, amount) {
		this.timestamp = timestamp;
		this.payerAddr = payerAddr;
		this.payeeAddr = payeeAddr;
		this.amount = amount;
	}
}
module.exports = Transaction
