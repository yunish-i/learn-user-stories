import Bank from '../src/user/bank';

// scenario 1 test 
const bank = new Bank();
bank.createAccount('1234567890');
bank.deposit('1234567890', 100);
bank.withdraw('1234567890', 50);
let account = bank.findAccount('1234567890');
console.log(account); // { accountNumber: '1234567890', balance: 50 }

// scenario 2 test
try {
    bank.withdraw('1234567890', 150);
}
catch(_) {
    console.log('Insufficient funds');
}

// scenario 3 test
try {
    bank.withdraw('1234567890', -50);
}
catch(_) {
    console.log('Withdrawal amount must be positive');
}

// scenario 4 test
try {
    bank.withdraw('404', 50);
}
catch(_) {
    console.log('Account not found');
}