import Bank from "../src/bank";

// scenario 1
const bank = new Bank();
const account = bank.createAccount('Jane Doe', 36, '1234567890');
if (account.accountNumber == '1234567890') {
    console.log('Scenario 1 passed');
}
else {
    console.log('Scenario 1 failed');
}

// scenario 2
try {
    bank.createAccount('Jane Doe', 36, '1234567890');
    console.log('Scenario 2 failed');
}
catch(_) {
    console.log('Scenario 2 passed');
}