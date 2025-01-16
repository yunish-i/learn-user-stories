import { AccountType, BankType } from './types'

export class Bank implements BankType {
    private accounts: AccountType[] = []
    private usernames: string[] = []

    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id)
    }

    private isUserNameExists(username: string): boolean {
        return this.usernames.includes(username)
    }

    private isAccountNumberValid(accountNumber: number): boolean {
        return accountNumber.toString().length === 10
    }

    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(!this.isUserNameExists) {
            throw new Error('User not found');   
        }
        if(!this.isAccountNumberValid) {
            throw new Error('Invalid account number');
        }
        if(this.findAccountById(accountNumber)) {
            throw new Error('Account number already exists');
        }
        const account = { id: accountNumber, balance: 0 };
        this.accounts.push(account);
        return account;
    }
}