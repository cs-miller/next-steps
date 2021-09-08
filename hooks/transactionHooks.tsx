import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { TransactionType } from "../types/types";

export function useTransactions() {
  const { data, error } = useSWR<{ transactions: Array<TransactionType> }>(
    "/api/transactions",
    fetcher
  );

  return {
    transactions: data?.transactions,
    isLoading: !data && !error,
    isError: error,
  };
}

export function useTransaction(transactionId: string) {
  const { data, error } = useSWR<TransactionType>(
    `/api/transactions/${transactionId}`,
    fetcher
  );

  return {
    transaction: data,
    isLoading: !data && !error,
    isError: error,
  };
}
