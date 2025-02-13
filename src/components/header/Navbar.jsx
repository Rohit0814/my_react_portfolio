import React from "react";
import logo1 from "../../assets/logo1.png"
import { MenuTab } from "./MenuTab";

const Navbar = () => {
  return (
  <>
    <nav className="bg-gray-700 fixed z-10 w-full top-0">
      <div className="flex items-center mx-20 py-5 justify-between">
      <div className="flex items-center">
        <img src={logo1} className="w-16"/>
        <span className="text-2xl font-extrabold text-amber-100">Rohit Singh</span>
      </div>
      <div className="flex gap-7">
        <MenuTab icon="fa-solid fa-house-chimney" name="Home" link="/"/>
        <MenuTab icon="fa-regular fa-address-card" name="About" link="/about"/>
        <MenuTab icon="fa-solid fa-address-book" name="Contact" link="/contact"/>
        <MenuTab icon="fa-solid fa-diagram-project" name="Project" link="/project"/>
        <MenuTab icon="fa-brands fa-researchgate" name="Research" link="/research"/>
      </div>
      </div>
    </nav>
  </>
  );
};

export default Navbar
