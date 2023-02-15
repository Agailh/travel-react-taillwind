import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4 ">
      <div>
        <h1>Lemao Beaches</h1>
      </div>
      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      <div>
        <HiOutlineMenuAlt4 />
      </div>
    </div>
  );
};

export default Navbar;
