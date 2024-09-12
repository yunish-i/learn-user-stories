import Bank from '../src/bankDemo';

// scenario 1 test
const bank = new Bank();
bank.createAccount('John Doe', 35, '1234567890');
if(bank.getAccounts()[0].accountNumber == '1234567890') {
    console.log('Scenario 1 passed');
}
else {
    console.log('Scenario 1 failed');
}
// scenario 2 test
try {
    bank.createAccount('John Doe', 35, '1234567890');
    console.log('Scenario 2 failed');
}
catch(_) {
    console.log('Secnario 2 passed');
}