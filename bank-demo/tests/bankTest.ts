import { BankType, AccountType } from "../src/types";
import { Bank } from "../src/bank";

const accounts = [{ id: 1234567890, balance: 1000 },
{ id: 1234567891, balance: 2000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// Scenario 1: successful account creation
const acc1 = bank.createAccount('user3', 19, 1234567892);
if(acc1.id !== 1234567892 || acc1.balance !== 0 || acc1.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    const acc2 = bank.createAccount('user3', 21, 1234567892);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

//Scenario 2: unsuccessful account creation due to invalid age
try {
    bank.createAccount('user1', 17, 1234567893);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username
try {
    bank.createAccount('user4', 19, 1234567891);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}