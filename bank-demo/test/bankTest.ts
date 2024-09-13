import Bank from "../src/bank";

// Setup
const bank = new Bank();

//scenario 1
const account = bank.createAccount("John Doe", 24, "122434");
if(account.accountNumber === "122434") {
    console.log("Test 1 passed");
}
else {
    console.log("Test 1 failed");
}

//scenario 2
try {
    bank.createAccount("John Doe", 24, "122434");
    console.log("Test 2 failed");
}
catch(_) {
    console.log("Test 2 passed");
}