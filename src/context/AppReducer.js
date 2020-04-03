export default (state, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        transactions: state.transactions.filter(
          item => item.id !== action.payload
        )
      };
    default:
      return state;
  }
};
