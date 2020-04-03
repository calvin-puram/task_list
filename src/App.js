import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Statement from "./components/Statement";

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <Balance />
            <Statement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
