export enum TransactionTypeEnum {
  "deposit",
  "withdrawal",
  "invoice",
  "payment"
}

export interface TransactionType {
  transactionId: string,
  accountName: string
  mask: string
  amount: number
  transactionType: TransactionTypeEnum
  currencyCode: string
  currencyName: string
  currencySymbol: string
  iban: string
  bic: string
}