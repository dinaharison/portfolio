import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import { navbarLinks } from "./data/navbarlinks";
import SectionTemplate from "./sections/SectionTemplate";

function Home() {
  return (
    <div className="bg-slate-200  text-teal-900">
      <Header></Header>
      {navbarLinks.map((link) => (
        <SectionTemplate
          id={link.name}
          component={link.component}
          key={link.name}
        />
      ))}
    </div>
  );
}

export default Home;
