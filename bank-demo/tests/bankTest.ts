import { Bank } from "../src/bank";

// setup

const accounts = [
  { id: 1234567890, balance: 3448 },
  { id: 1234567891, balance: 2424 },
];

const usernames = ["user1", "user2"];
const bank = new Bank(accounts, usernames);

// Scenario 1: customer is able to create a new bank account
const acc = bank.createAccount("user1", 23, 1234567892);
if (
  acc.id !== 1234567892 ||
  acc.balance !== 0 ||
  acc.id.toString().length !== 10
) {
  console.log("Create an account - Scenario 1 failed");
} else {
  console.log("Create an account - Scenario 1 passed");
}

try {
  const acc1 = bank.createAccount("user1", 23, 1234567892);
  console.log("Create an account - Scenario 1 failed");
} catch (e) {
  console.log("Create an account - Scenario 1 passed");
}

// Scenario 2: customer is unable to create a new bank account due to invalid age

try {
  bank.createAccount("user1", 17, 1234567893);
  console.log("Create an account - Scenario 2 failed");
} catch (e) {
  console.log("Create an account - Scenario 2 passed");
}

// Scenario 3: customer is unable to create a new bank account due to invalid username

try {
  bank.createAccount("user3", 23, 1234567894);
  console.log("Create an account - Scenario 3 failed");
} catch (e) {
  console.log("Create an account - Scenario 3 passed");
}

// Test deposit method

// Scenario 1: customer is able to deposit money into their account

const balance = bank.deposit(1234567890, 100);
if (balance !== 3548) {
  console.log("Deposit - Scenario 1 failed");
} else {
  console.log("Deposit - Scenario 1 passed");
}

// Scenario 2: customer is unable to deposit money into their account due to invalid account number
try {
  bank.deposit(1234567895, 100);
  console.log("Deposit - Scenario 2 failed");
} catch (e) {
  console.log("Deposit - Scenario 2 passed");
}

// Scenario 3: customer is unable to deposit money into their account due to invalid amount
// the amount is negative
try {
  bank.deposit(1234567890, -100);
  console.log("Deposit - Scenario 3 failed");
} catch (e) {
  console.log("Deposit - Scenario 3 passed");
}

// Test withdraw method
// Scenario 1: customer is able to withdraw money from their account
const balance1 = bank.withdraw(1234567890, 100);
if (balance1 !== 3448) {
  console.log("Withdraw - Scenario 1 failed");
} else {
  console.log("Withdraw - Scenario 1 passed");
}

// Scenario 2: customer is unable to withdraw money from their account due to invalid account number
try {
  bank.withdraw(1234567895, 100);
  console.log("Withdraw - Scenario 2 failed");
} catch (e) {
  console.log("Withdraw - Scenario 2 passed");
}

// Scenario 3: customer is unable to withdraw money from their account due to insufficient balance
try {
  bank.withdraw(1234567890, 4000);
  console.log("Withdraw - Scenario 3 failed (insufficient balance)");
} catch (e) {
  console.log("Withdraw - Scenario 3 passed (insufficient balance)");
}

try {
  bank.withdraw(1234567890, -100);
  console.log("Withdraw - Scenario 3 failed (invalid amount)");
} catch (e) {
  console.log("Withdraw - Scenario 3 passed (invalid amount)");
}

// Test checkBalance method
// Scenario 1: customer is able to check their account balance
const balance2 = bank.checkBalance(1234567890);
if (balance2 !== 3448) {
  console.log("Check balance - Scenario 1 failed");
} else {
  console.log("Check balance - Scenario 1 passed");
}

// Scenario 2: customer is unable to check their account balance due to invalid account number
try {
  bank.checkBalance(1234567895);
  console.log("Check balance - Scenario 2 failed");
} catch (e) {
  console.log("Check balance - Scenario 2 passed");
}
