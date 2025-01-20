export type AccountType = {
  id: number;
  balance: number;
};

export interface BankType {
  /**
   * create a bank account
   * @param username
   * @param age
   * @param accountNumber
   */
  createAccount(
    username: string,
    age: number,
    accountNumber: number
  ): AccountType;

  /**
   * deposit money into an account
   * @param accountNumber
   * @param amount
   */
  deposit(accountNumber: number, amount: number): number;

  /**
   * withdraw money from an account
   * @param accountNumber
   * @param amount
   */
  withdraw(accountNumber: number, amount: number): number;

  /**
   * check the balance of an account
   * @param accountNumber
   */
  checkBalance(accountNumber: number): number;
}
