import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-20 px-4 ">
      <div>
        <h1>Lemao Beaches</h1>
      </div>
      <ul className="flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <div className="flex">
        <BiSearch />
        <BsPerson />
      </div>
    </div>
  );
};

export default Navbar;
