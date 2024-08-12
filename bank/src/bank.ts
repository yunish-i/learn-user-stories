interface BankAccount {
    accountNumber: string;
    balance: number;
  }
  
export default class Bank {
    private accounts: BankAccount[] = [];

    createAccount(accountNumber: string): BankAccount {
        if(this.findAccount(accountNumber)) {
            throw new Error('Account already exists');
        }
        const newAccount: BankAccount = { accountNumber, balance: 0 };
        this.accounts.push(newAccount);
        return newAccount;
    }

    findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
}
  