import { BankType, AccountType } from './types';

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    private addAccount(account: AccountType): void {
        this.accounts.push(account);
    }

    private isIdValid(id: number): boolean {
        return id.toString().length === 10;
    }

    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    public createAccount(username: string, age: number, accountNumber: number): AccountType {
        if (this.isUsernameExists(username)) {
            throw new Error('Username already exists');
        }
        if(!this.isIdValid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if(this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        if(age < 18) {
            throw new Error('Age must be at least 18');
        }
        const account: AccountType = {
            id: accountNumber,
            balance: 0,
        };
        this.addAccount(account);
        this.usernames.push(username);
        return account;
    }
}