import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between bg-slate-200">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
