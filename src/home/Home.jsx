import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";

function Home() {
  return (
    <div className="bg-slate-200  text-teal-900">
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  );
}

export default Home;
