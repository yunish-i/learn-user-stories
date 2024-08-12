import Bank from '../src/bank';

// scenario 1 test
const bank = new Bank();
bank.createAccount('1234567890');
bank.deposit('1234567890', 100);
let account = bank.findAccount('1234567890'); 
console.log(account); // { accountNumber: '1234567890', balance: 100 }

bank.deposit('1234567890', 100);
account = bank.findAccount('1234567890'); 
console.log(account); // { accountNumber: '1234567890', balance: 200 }


// scenario 2 test
try {
    bank.deposit('1234567890', -100);
}
catch(_) {
    console.log('Deposit amount must be positive');
}

// scenario 3 test
try {
    bank.deposit('404', 120);
}
catch(_) {
    console.log('Account not found');
}