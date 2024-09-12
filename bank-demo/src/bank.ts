// This is a type for all bank accounts in the bank
interface BankAcccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represent a simple bank with the ability create new accounts
 */

export default class Bank {
    // This is a private field that holds all the accounts in the bank
    private accounts: BankAcccount[] = [];

    /**
     * This method checks if an account with the given account number exists
     * @param {string} -- accountNumber The account number to check
     * @returns {BankAcccount | undefined} -- The account if it exists, otherwise undefined
     */
    private isAccountExists(accountNumber: string): BankAcccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    /**
     * This methods creates a new account with the given name, age and account number
     * @param {string} -- name The name of the account holder 
     * @param {number} -- age The age of the account holder 
     * @param {string} -- accountNumber The account number of the account holder
     * @returns {BankAccount} -- The created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAcccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if(isAccExists != null){
            throw new Error('Account already exists');
        }
        const account = {name, age, accountNumber, balance: 0};
        this.accounts.push(account);
        return account;
    }
}