import React from "react";
import SideNavbar from "./components/SideNavbar";
import InputForm from "./components/InputForm";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="flex">
        <div>
          <SideNavbar />
        </div>
        <div>
          <div className="w-100">
            <InputForm />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
