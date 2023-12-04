import React, { useState } from "react";
import {
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/20/solid";

 

const ProfileDropdown = ({ options, icon, text }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="desktopbutton text-white text-center flex flex-col items-center px-4 py-2 text-xs  hover:text-blue-200  transition duration-300">
          {icon}

          <span>{text}</span>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-2 top-12 w-48 py-2 mt-2 bg-white rounded-md shadow-xl z-10">
          {options.map((option, index) => (
            <a
              href={option.link}
              className="block px-4 py-2 text-sm hover:underline"
            >
              <option.icon className="inline h-5 w-5 mr-2" /> {option.text}
            </a>
          ))}

          <hr className="my-2" />
          <a href="#" className="block px-4 py-2 text-sm hover:underline">
            <ArrowLeftOnRectangleIcon className="inline h-5 w-5 mr-2" />
            Cerrar sesión
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
