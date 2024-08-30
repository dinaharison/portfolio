import React, { useState } from "react";
import { navbarLinks } from "../data/navbarlinks";
import { Menu, X } from "lucide-react";
import NavBarItem from "./NavBarItem";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-auto flex justify-end">
        <div className="hidden w-full justify-end sm:flex gap-x-2">
          {navbarLinks.map((link, index) => (
            <NavBarItem link={link} key={index} />
          ))}
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={toogleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className="bg-slate-200 flex flex-col items-center 
        basis-full sm:hidden
        absolute w-full top-16 gap-y-2 py-2"
        >
          {navbarLinks.map((link, index) => (
            <NavBarItem link={link} key={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default NavBar;
