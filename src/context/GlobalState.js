import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initState = {
  transactions: [
    { id: 1, text: "Salary", amount: "200.00" },
    { id: 2, text: "Food", amount: "-60.00" },
    { id: 3, text: "Bussiness", amount: "100.00" },
    { id: 4, text: "Transport", amount: "-10.00" }
  ]
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
