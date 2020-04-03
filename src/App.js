import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Statement from "./components/Statement";
import AccountStatement from "./components/AccountDetails";
import AddAccount from "./components/AddAcount";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <Balance />
            <Statement />
            <AccountStatement />
            <AddAccount />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
