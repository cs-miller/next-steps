import React from "react";
import Link from "next/link";
import { ColDef, ICellRendererParams } from "@ag-grid-community/core";

import { Grid } from "./Grid";
import {TransactionType} from "../types/types";

const TransactionListColDefs: Array<ColDef> = [
  {
    colId: "transactionId",
    field: "transactionId",
    headerName: "Transaction ID",
    cellRendererFramework: (params: ICellRendererParams) => {
      return <Link href={`/transactions/${params.value}`}>{params.value}</Link>;
    },
  },
  { colId: "accountName", field: "accountName", headerName: "Account Name" },
  { colId: "currency", field: "currencyCode", headerName: "Currency" },
  { colId: "amount", field: "amount", headerName: "Amount" },
  {
    colId: "transactionType",
    field: "transactionType",
    headerName: "TransactionType",
  },
];

interface TransactionListProps {
  transactions: Array<TransactionType>;
}
export const TransactionList: React.FC<TransactionListProps> = (props) => {
  return (
    <Grid rowData={props.transactions} columnDefs={TransactionListColDefs} />
  );
};
