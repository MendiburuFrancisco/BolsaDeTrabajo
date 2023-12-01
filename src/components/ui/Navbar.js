import React from "react";
import UTN_LOGO from "./../../assets/img/logo_utn.png";
import "../../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useJobContext } from "../../context/JobContext";

// import Filter from "./JobFilter.js";

//Plantilla para boton hamburguesa
class NavBarButton extends React.Component {
  constructor({ type, icon, text }) {
    super();
    this.type = type;
    this.icon = icon;
    this.text = text;
  }

  render() {
    return (
      <button
        className={
          this.type +
          " flex items-center space-x-2 text-white px-4 py-2 rounded"
        }
        title={this.text}
      >
        {this.icon}
      </button>
    );
  }
}

const Navbar = ({ buttons, esconde }) => {
  const [search, setSearch] = useState("");
  const { searchTerm, setSearchTerm } = useJobContext();

  const applyFilters = () => {
    setSearchTerm(search);
  };

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      setSearchTerm("");
    }
    setSearch(event.target.value);
  };

  return (
    <>
      <nav className=" navbar w-full top-0 left-0 flex items-center justify-between px-2 py-1 bg-gray-700 fixed">
        <a
          className="logo-navbar  items-center pl-4 space-x-4 inline-block"
          href="#"
        >
          <Link to={"/"}>
            <img src={UTN_LOGO} alt="logo" className=" h-8" />
            <div className="inline-block text-white">Bolsa de Trabajo</div>
          </Link>
        </a>

        {/* Search */}

        <div
          className={`rounded-2xl  bg-white flex items-center ${esconde}
          
          relative h-10  
          `}
        >
          <input
            type="text"
            placeholder="Buscar trabajos"
            className="rounded-2xl p-2  focus:outline-none lg:w-72 sm:w-40
            text-gray-700 bg-white border border-gray-200 rounded-lg peer  focus:border-primary focus:border-primary focus:outline-none focus:ring focus:ring-primary placeholder-gray-400 focus:ring-opacity-80
            "
            aria-label="Buscar trabajos"
            role="search"
            value={search}
            onChange={handleInputChange}
          />

          {/* <input
            type="text"
            placeholder="Buscar trabajos"
            className="rounded-l-full py-1 px-4 focus:outline-none lg:w-72 sm:w-40"
            aria-label="Buscar trabajos"
            role="search"
            value={search}

            onChange={handleInputChange}
          />
          <button className="rounded-r-full text-gray-700 px-4"  */}


          <button
            className="absolute px-2 py-1 text-xs text-gray-400 
                transition-opacity duration-75 -translate-y-1/2 border rounded-lg 
                 border-none right-2 top-1/2 peer-focus:opacity-0 
            "
            onClick={applyFilters}
            title="Buscar"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
          <button class="absolute  px-2 py-1  text-gray-500 -translate-y-1/2 right-2 focus:outline-none top-1/2  peer-focus:block hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right side with buttons */}
        <div className="flex space-x-4   ">
          {buttons.map((button, index) => (
            // <div className=" flex justify-center items-center h-full ">

            <Link to={button.link}>
              <button
                key={index}
                className="desktopbutton text-white text-center flex flex-col items-center px-4 py-2 text-xs  hover:text-blue-200  transition duration-300"
              >
                {button.icon}
                {button.text}
              </button>
            </Link>
          ))}

          {/*boton hamburguesa*/}
          <NavBarButton
            type="cellphonebutton hidden"
            icon={<Bars3Icon className="w-6 h-6" />}
            text="Menu"
          />
        </div>
      </nav>
      <div className="flex items-center justify-center h-14" />
    </>
  );
};

export default Navbar;
