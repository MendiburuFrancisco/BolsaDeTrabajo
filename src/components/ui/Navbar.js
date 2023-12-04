import React, { useState } from "react";
import { Link } from "react-router-dom";

import UTN_LOGO from "./../../assets/img/logo_utn.png";
import "../../assets/css/Navbar.css";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";

import { useJobContext } from "../../context/JobContext";
import ProfileDropdown from "./ProfileDropDown";

class NavBarButton extends React.Component {
  constructor({ type, icon, text,onClick }) {
    super();
    this.type = type;
    this.icon = icon;
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    return (
      <button
        className={
          this.type +
          " flex items-center space-x-2 text-white px-4 py-2 rounded "
        }
        title={this.text}
        onClick={this.onClick}
      >
        {this.icon}
      </button>
    );
  }
}

const Navbar = ({ buttons, esconde }) => {
  const [search, setSearch] = useState("");
  const { searchTerm, setSearchTerm } = useJobContext();

  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const applyFilters = () => {
    setSearchTerm(search);
  };

  const insertButtonInNavbar = (button, index) => {
    if (button.options?.length > 0)
      return (
        <ProfileDropdown
          options={button.options}
          icon={button.icon}
          text={button.text}
        />
      );

    return (
      <Link to={button.link}>
        <button
          key={index}
          className="desktopbutton text-white text-center flex flex-col items-center px-4 py-2 text-xs  hover:text-blue-200  transition duration-300"
        >
          {button.icon}
          <span>{button.text}</span>
        </button>
      </Link>
    );
  };

  const SideBarButton = (icon,text,link) => {
    return (
      <Link
            to={link}
            className="block px-4 py-2  text-white hover:underline"
          >
          {icon}
          <span>{text}</span>

      </Link>
    )

  }

  const inserButtonInSideBar = (button, index) => {
    let botones = [];

    if (button.options?.length > 0) {
      console.log(button.options);
      button.options.map((option, index) => {
        botones.push( 
          <Link
            to={option.link}
            className="block px-4 py-2  text-white hover:underline"
            onClick={() => setisSideBarOpen(false)}
          >
            {option.text}
          </Link>
        );
      });
      return <>      
      {botones} </>;
    }

    return (
      <Link
        to={button.link}
        className="block px-4 py-2  text-white hover:underline"
      >
        {button.text}
      </Link>
    );
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
            onKeyPress  ={(e) => { if (e.key === 'Enter') applyFilters() }}
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
            <>{insertButtonInNavbar(button, index)}</>
          ))}

          {/*boton hamburguesa*/}
          <NavBarButton
            type="cellphonebutton hidden"
            icon={<Bars3Icon className="w-6 h-6" />}
            onClick={() => setisSideBarOpen(!isSideBarOpen)}
            text="Menu"
          />
        </div>
      </nav>

      {isSideBarOpen && (
        <sidebar className=" bg-gray-700  absolute  w-full h-screen py-2      z-20">
            <br />
          
          <div className="    pl-4 space-x-4 flex justify-between">
            <Link to={"/"}>
              <img src={UTN_LOGO} alt="logo" className=" h-8" />
              <div className="inline-block text-white">Bolsa de Trabajo</div>
            </Link>
            <button className="text-white text-2xl px-8"
                    onclick={() => setisSideBarOpen(false)}
            ><XMarkIcon className="h-10 w-10" /></button>
          </div>
          <br />
          <br />
          {buttons.map((button, index) =>
            inserButtonInSideBar(button, index)
 
          )}

          <div classname="absolute bottom-1">
            <br />
            <br />
            <br />
            <hr className="my-2" />
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-white hover:underline"
            >
              <ArrowLeftOnRectangleIcon className="inline h-5 w-5 mr-2" />
              Cerrar sesión
            </Link>
          </div>
        </sidebar>
      )}
      <div className="flex items-center justify-center h-14" />
    </>
  );
};

export default Navbar;
