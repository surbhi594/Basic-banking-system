function Account(name, balance) {
    this.name = name;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    if (this._isPositive(amount)) {
        this.balance += amount;
        alert(`Deposit: ${this.name} new balance is ${this.balance}`);
        return true;
    }
    return false;
}

Account.prototype.withdraw = function(amount) {
    if (this._isAllowed(amount)) {
        this.balance -= amount;
        alert(`Withdraw: ${this.name} new balance is ${this.balance}`);
        return true;
    }
    return false;
}

Account.prototype.transfer = function(amount, account) {
    if (this.withdraw(amount) && account.deposit(amount)) {
        console.info(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
        return true;
    }
    return false;
}


Account.prototype._isPositive = function(money) {
    const isPositive = money > 0;
    if (!isPositive) {
        console.error('Amount Balance in you bank must be positive to Transfer !');
        return false;
    }
    return true;
}

Account.prototype._isAllowed = function(money) {
    if (!this._isPositive(money)) return false;

    const isAllowed = this.balance - money >= 0;
    if (!isAllowed) {
        console.error('You have insufficent Balance to Transfer!');
        return false;
    }
    return true;
}

const a = new Account('a', 100);
const b = new Account('b', 0);


output.innerText += `before:  a: ${a.balance}, b: ${b.balance}\n`;

a.transfer(100, b);

output.innerText += `after:  a: ${a.balance}, b: ${b.balance}\n`



function sendMoney() {
    var table = document.getElementById("AmiteshTable");
    var transferFrom = document.getElementById("TransferFrom").value;
    var transferTo = document.getElementById("TransferTo").value;
    var amount = document.getElementById("enterAmount").value;
    if (!(transferFrom)) {
        alert("Enter Valid Name of the person Who is transferring money");
        return;
    }
    if (!(transferTo)) {
        alert("Enter Valid Name of recipient");
        return;
    }
    if (!(amount)) {
        alert("Enter Valid Amount to Send");
        return;
    }
    var row = table.insertRow(1);
    row.classList.add("table-primary");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = transferFrom;
    cell2.innerHTML = transferTo;
    cell3.innerHTML = amount;

}