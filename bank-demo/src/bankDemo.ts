interface BankAccount {
    fullName: string;
    age: number;
    accountNumber: string;
    balance: number;
}

export default class Bank {
    private accounts: BankAccount[] = [];

    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccountExist = this.findAccount(accountNumber);
        if (isAccountExist != null) {
            throw new Error('Account already exists');
        }
        const newAccount: BankAccount = { fullName: name, age, accountNumber, balance: 0 };
        this.accounts.push(newAccount);
        return newAccount;
    }

    public getAccounts(): BankAccount[] {
        return this.accounts;
    }

    private findAccount(accountNumber: string): BankAccount | null {
        const account = this.accounts.find(account => account.accountNumber === accountNumber);
        return account ? account : null;
    }

}   