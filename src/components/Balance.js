// components/Balance.js
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/utils";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Convert amounts to numbers, calculate total balance
  const total = transactions
    .map((transaction) => Number(transaction.amount)) // Convert to numbers if needed
    .reduce((acc, item) => acc + item, 0) // Accumulate total balance
    .toFixed(2); // Format to 2 decimal places

  // Optional: Debugging output
  console.log("Transactions:", transactions);
  console.log("Total:", total);

  return (
    <>
      <center>
        <h4>Your Balance</h4>
      </center>
      <h1>
        <center>&#8377; {moneyFormatter(total)}</center>
      </h1>
    </>
  );
};
