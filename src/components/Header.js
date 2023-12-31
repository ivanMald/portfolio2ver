import React from "react";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="h-14" src={Logo} alt=""></img>
          </a>
          <button className="btn btn-sm">Work whit me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
