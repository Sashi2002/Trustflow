import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex flex-wrap py-2 sm:py-6 justify-between items-center px-4 md:px-8 lg:px-16 xl:px-20 max-sm:bg-blue">
      {/* Logo and brand name */}
      <div className="flex items-center cursor-pointer">
        <Image src={logo} alt="logo" height={50} width={50} />
        <p className="text-blue text-2xl font-poppins ml-2">Trustflow</p>
      </div>

      {/* Desktop navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-black">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={"/user"}>{nav.title} </Link>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Hamburger menu */}
        <Image
          src={toggle ? close : menu}
          className="w-6 h-6 cursor-pointer"
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile menu */}
        {toggle && (
          <div className="absolute top-20 right-0 mx-4 my-2 bg-white rounded-xl shadow-lg z-20 w-60">
            <ul className="list-none">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-base py-2 px-4 ${
                    index === navLinks.length - 1 ? "border-b" : ""
                  }`}
                >
                  <Link href={"/user"}>{nav.title} </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
