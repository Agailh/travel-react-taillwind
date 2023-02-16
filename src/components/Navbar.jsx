import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 ">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Lemao Beaches
        </h1>
      </div>
      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Home</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* Mobile navbar */}

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 fle flex-col" : "absolute left-[-100%]"}>
        <ul>
          <h1>Lemao Beaches</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Home</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button className="my-4">Account</button>
          </div>
          <div className="flex justify-between my-8">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
