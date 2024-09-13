// A bank account has a name, age, account number, and balance.
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: 0;
}

/**
 * A bank class that manages all bank accounts in the bank.
 */
export default class Bank {
    /**
     * A list of all bank accounts in the bank.
     */
    private accounts: BankAccount[] = [];

    /**
     * Checks if an account already exists in the bank.
     * @param {string} accountNumber The account number to check.
     * @returns {BankAccount} bankaccount if it exists, undefined otherwise.
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const accExists = this.isAccountExists(accountNumber);
        if(accExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }
}