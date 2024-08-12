import Bank from '../src/user/bank';

// scenario 1 test
const bank = new Bank();
bank.createAccount('1234567890');
const account = bank.findAccount('1234567890');
console.log(account); // { accountNumber: '1234567890', balance: 0 }

//scenario 2 test
try {
    bank.createAccount('1234567890');
}
catch(_) {
    console.log('Account already exists');
}