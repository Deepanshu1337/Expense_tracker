// components/Balance.js
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/utils";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

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
