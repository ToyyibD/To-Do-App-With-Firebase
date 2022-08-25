import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsSunFill, BsMoonFill, BsChevronDown } from "react-icons/bs";

const Navbar = ({ theme, setTheme }) => {
  const [dropdown, setDropdown] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // Toggle light and dark theme
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav className="navbar h-1/6 py-4 border-b dark:bg-black dark:text-white">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="navbar-brand flex flex-row items-center gap-4 ">
          <BiMenu className="text-3xl cursor-pointer" />
          <h1 className="text-3xl font-bold">To-do App</h1>
        </div>
        {/* Navbar Cta starts */}
        <div className="navbar-cta flex flex-row items-center gap-4">
          <button className="navbar-cta__theme">
            {theme ? (
              <BsSunFill className="text-xl" onClick={toggleTheme} />
            ) : (
              <BsMoonFill className="text-xl" onClick={toggleTheme} />
            )}
          </button>
          <div className="navbar-cta__user flex flex-row items-center gap-2 justify-center relative">
            <p className="text-xl">{"Balikis Oyeleye"}</p>
            <BsChevronDown
              className="text-xl cursor-pointer"
              onClick={toggleDropdown}
            />
            <ul
              className={`navbar-cta__user-dropdown ${
                dropdown ? "absolute" : "hidden"
              } -bottom-28 border py-4 px-2 w-40 dark:bg-black`}
            >
              <li className="mb-2">
                <span className="bg-primary-red py-1 px-2 rounded mr-2">{`${1}/${1}`}</span>
                Completed
              </li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
        {/* Navbar Cta ends */}
      </div>
    </nav>
  );
};

export default Navbar;
