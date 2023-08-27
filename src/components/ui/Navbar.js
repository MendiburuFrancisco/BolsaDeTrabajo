import React from 'react';
import UTN_LOGO from './../../assets/img/logo_utn.png'
const Navbar = ({ buttons }) => {
  return (
    <nav className="flex items-center justify-between p-2 bg-gray-700">
      {/* Left side with search bar */}
      {/* add an image */}
        <a className="flex items-cente pl-4 space-x-4" href="#">
            <img
            src={UTN_LOGO}
            alt="logo"
            className=" h-10"
            />
        </a>
      <div className="rounded-full p-2 bg-white flex items-center">
        <input
          type="text"
          placeholder="Buscar trabajos"
          className="rounded-l-full py-1 px-4 focus:outline-none w-72"
        />
        <button className="rounded-r-full  text-gray-700 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            {/* Search */}
        </button>
      </div>

      {/* Right side with buttons */}
      <div className="flex space-x-4">
        {buttons.map((button, index) => (
          <button key={index} className=" text-white px-4 py-2 rounded">
            {button}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;