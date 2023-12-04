import React, { useState } from "react";
import { Link } from 'react-router-dom';
// Icons
import { BsBuilding, BsPeople,BsBriefcase, BsHouse } from "react-icons/bs";

const Sidebar = ({links}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`
        bg-gray-700 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1095249842.jpg"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Juan Perez</h1>
          <p className="bg-primary-100 py-2 px-4 rounded-full text-white">
            Administrador
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
        <nav className="flex flex-col gap-8">
          {
          
          links.map((link) => (
            <Link
              to={link.path}
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              {link.icon} {link.title}
            </Link>
          ))  
          }
        </nav>

      </div>
      </div>
    </>
  );
};

export default Sidebar;