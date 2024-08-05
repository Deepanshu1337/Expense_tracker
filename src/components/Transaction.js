// components/Transaction.js
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/utils";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};
