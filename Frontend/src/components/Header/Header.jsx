import React from "react";
import AdBar from "./AdBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="border-b-[1px] border-gray">
      <AdBar />
      <Navbar/>
    </div>
    
  );
};

export default Header;
