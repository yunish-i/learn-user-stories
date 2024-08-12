import Bank from '../src/user/bank';

// scenario 1 test
const bank = new Bank();
bank.createAccount('1234567890');
const account = bank.findAccount('1234567890');
const balance = bank.checkBalance('1234567890');
console.log(balance); // 'Balance for account 1234567890 is $0'

bank.deposit('1234567890', 100);
const newBalance = bank.checkBalance('1234567890');
console.log(newBalance); // 'Balance for account 1234567890 is $100'

//scenario 2 test
try {
    bank.checkBalance('404');
}
catch(_) {
    console.log('Account not found');
}