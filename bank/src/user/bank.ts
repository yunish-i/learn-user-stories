interface BankAccount {
    accountNumber: string;
    balance: number;
  }
  
export default class Bank {
    private accounts: BankAccount[] = [];

    // creates a new account with the given account number and a balance of 0
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

    deposit(accountNumber: string, amount: number): string {
      const account = this.findAccount(accountNumber);
      if (!account) {
        throw new Error("Account not found");
      }
  
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
      }
  
      account.balance += amount;
      return `Successfully deposited $${amount} into account ${accountNumber}. New balance is $${account.balance}.`;
    }

    withdraw(accountNumber: string, amount: number): string {
      const account = this.findAccount(accountNumber);
      if (!account) {
        throw new Error("Account not found");
      }

      if (amount <= 0) {
        throw new Error("Withdrawal amount must be positive");
      }

      if (amount > account.balance) {
        throw new Error("Insufficient funds");
      }

      account.balance -= amount;
      return `Successfully withdrew $${amount} from account ${accountNumber}. New balance is $${account.balance}.`;
    }

    checkBalance(accountNumber: string): string {
      const account = this.findAccount(accountNumber);
      if (!account) {
        throw new Error("Account not found");
      }
  
      return `The balance of account ${accountNumber} is $${account.balance}.`;
    }
}
  