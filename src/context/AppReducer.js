const DELETE_TRANSACTION = "DELETE_TRANSACTION";
const ADD_TRANSACTION = "ADD_TRANSACTION";

// Define the reducer function
const transactionReducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      // Remove the transaction with the matching id from the array
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case ADD_TRANSACTION:
      // Add the new transaction to the beginning of the array
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      // Return the current state if the action type is not recognized
      return state;
  }
};

// Export the reducer function as the default export
export default transactionReducer;
