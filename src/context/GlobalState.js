import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initState = {
  transactions: []
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // Add Form
  function addAccount(item) {
    dispatch({
      type: "ADD_ACCOUNT",
      payload: item
    });
  }

  // Delete Button
  function deleteItem(id) {
    dispatch({
      type: "DELETE_ITEM",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, addAccount, deleteItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
