import { useRouter } from "next/router";
import { useTransaction } from "../../hooks/transactionHooks";

const Transaction: React.FC<{}> = (props) => {
  const router = useRouter();
  const { transactionId } = router.query;
  const { transaction, isLoading } = useTransaction(transactionId as string);
  return isLoading ? (
    <pre>loading...</pre>
  ) : (
    <pre>{JSON.stringify(transaction)}</pre>
  );
};

export default Transaction;
