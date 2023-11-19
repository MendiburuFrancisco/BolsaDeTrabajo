import React from "react";
import UTN_LOGO from "./../../assets/img/logo_utn.png";
import "../../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import Filter from "./JobFilter.js";

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
  return (
    <>
      <nav className=" navbar w-full top-0 left-0 flex items-center justify-between p-2 bg-gray-700 fixed">
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
        <div className={`rounded-full p-2 bg-white flex items-center ${esconde}`}>
          <input
            type="text"
            placeholder="Buscar trabajos"
            className="rounded-l-full py-1 px-4 focus:outline-none lg:w-72 sm:w-40"
            aria-label="Buscar trabajos"
            role="search"
          />

          <button className="rounded-r-full text-gray-700 px-4" title="Buscar">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Right side with buttons */}
        <div className="flex space-x-4  ">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="desktopbutton text-white px-4 py-2 rounded"
            >
              {button}
            </button>
          ))}

          {/*boton hamburguesa*/}
          <NavBarButton
            type="cellphonebutton hidden"
            icon={<Bars3Icon className="w-6 h-6" />}
            text="Menu"
          />
        </div>
      </nav>
      <div className="flex items-center justify-center h-20" />
    </>
  );
};

export default Navbar;
