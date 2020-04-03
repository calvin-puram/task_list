import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Statement from "./components/Statement";
import AccountStatement from "./components/AccountDetails";

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <Balance />
            <Statement />
            <AccountStatement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
