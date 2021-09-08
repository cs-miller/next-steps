import { useTransactions } from "../../hooks/transactionHooks";
import { TransactionList } from "../../components/TransactionList";

export default function () {
  const { transactions, isLoading } = useTransactions();
  return <TransactionList transactions={transactions} />;
}
