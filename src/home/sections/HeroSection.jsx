import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../../assets/dinah-image.jpg";
import { titles } from "../data/titles";
import { description } from "../data/description";
import { Button } from "@nextui-org/react";

function HeroSection() {
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4">
      <div className="col-span-5 row-span-2 col-start-2 sm:col-span-5 sm:row-span-2 sm:col-start-2 sm:row-start-2 flex flex-row gap-4">
        <div className="w-32 h-44 hidden sm:block">
          <img
            src={heroImage}
            alt="hero image"
            className="object-cover rounded-full"
          />
        </div>
        <div className="w-auto h-full flex justify-center flex-col">
          <h1 className="text-3xl">Hi! I'm Dinah</h1>
          <h2 className="text-2xl">
            <TypeAnimation
              sequence={titles}
              wrapper="span"
              speed={60}
              style={{
                fontSize: "2rem",
                display: "inline-block",
                color: "rgb(107 17 17)",
              }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
      <div className="col-span-5 row-span-4 col-start-2 row-start-3 sm:col-span-5 sm:row-span-3 sm:col-start-2 sm:row-start-4">
        <p className="text-wrap">{description}</p>
        <div className="flex justify-center my-3">
          <Button
            radius="none"
            className="hover:text-teal-400 hover:bg-teal-800 text-teal-900"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
