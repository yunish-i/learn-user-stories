import { Bank } from "../src/bank";

const accounts = [{ id: 1234567890, balance: 2000 },
{ id: 1234567891, balance: 5000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

//Scenario 1: successful account creation
const acc = bank.createAccount('user1', 25, 1234567892);
if(acc.id !== 1234567892 || acc.balance !== 0 || acc.id.toString().length !== 10) {
    console.log('scenario 1 failed');
}
else {
    console.log('scenario 1 passed');
}

try {
    const acc1 = bank.createAccount('user1', 24, 1234567892);
    console.log('scenario 1 failed');
}
catch(e) {
    console.log('scenario 1 passed');
}

// Scenario 2: unsuccessful account creation due to invalid age
try {
    bank.createAccount('user1', 15, 1234567892);
    console.log('scenario 2 failed');
}
catch(e) {
    console.log('scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
    bank.createAccount('user3', 25, 1234567892);
    console.log('scenario 3 failed');
}
catch(e) {
    console.log('scenario 3 passed');
}