let myAccountBalance = parseInt(document.getElementById("currentAccountBalance").innerText);

function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    if (myAccountBalance - enterAmount < 0) {
        alert("You Do Not have Sufficient Balance To transfer this amount of Money.Please Check Your Current Balance.");
    }
    if (enterAmount > 500000) {
        alert("You Do Not have Sufficient Balance To transfer this amount of Money.")
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var AmountGain = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById("currentAccountBalance").innerText) - enterAmount
        document.getElementById("currentAccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerHTML = AmountGain;
        alert(`** Transaction Successful **  
      Rs.${enterAmount} is sent to ${enterName}@gmail.com.`);

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs.${enterAmount} is sent to recepient with Email-id ${enterName}@gmail.com on ${Date()} from your account and your current Balance now is Rs.${myAccountBalance}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}