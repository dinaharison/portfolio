import React from "react";
import logo from "../../assets/portfolio-black.png";

function Logo() {
  return (
    <div className="logo w-16 h-16 p-1">
      <img src={logo} alt="logo" className="w-full h-full object-cover" />
    </div>
  );
}

export default Logo;
