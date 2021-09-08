import transactionData from "./data.json";

import type { NextApiRequest, NextApiResponse } from "next";
import { TransactionType } from "../../../types/types";

function transactionHandler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const { transactionId } = query;
  const transaction = (
    transactionData.transactions as unknown as Array<TransactionType>
  ).find((t) => t.transactionId === transactionId);
  res.status(200).json(transaction);
}

export default transactionHandler;
