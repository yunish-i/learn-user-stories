// A type for bank accounts
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
};

/**
 * A class representing a bank with accounts
 */
export default class Bank {
    // An array of accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Find an account in the bank
     * @param accountNumber The account number to find
     * @returns The account if found, or null if not found
     */
    private findAccount(accountNumber: string): BankAccount | null {
        for (const account of this.accounts) {
            if(account.accountNumber === accountNumber) {
                return account;
            }
        }
        return null;
    }
    
    /**
     * A method to create a new account in the bank
     * @param name 
     * @param age 
     * @param accountNumber 
     * @returns BankAccount object of the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccountExists = this.findAccount(accountNumber);
        if(isAccountExists != null) {
            throw new Error('Account already exists');
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