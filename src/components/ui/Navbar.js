import React from "react";
import UTN_LOGO from "./../../assets/img/logo_utn.png";
import "../../assets/css/Navbar.css";
//Plantilla para boton hamburguesa
class NavBarButton extends React.Component {
  constructor({ type, svg, text }) {
    // super(props);
    super();
    this.type = type;
    this.svg = svg;
    this.text = text;
  }

  render() {
    return (
      <button
        className={ this.type + " flex items-center space-x-2 text-white px-4 py-2 rounded" }
        title={this.text}
      >
        {this.svg}
        {/* {this.text} */}
      </button>
    );
  }
}

const Navbar = ({ buttons }) => {
  return (
    <nav className=" navbar flex items-center justify-between p-2 bg-gray-700">
      {/* Left side with search bar */}
      {/* add an image */}
      <a className="logo-navbar flex items-cente pl-4 space-x-4" href="#">
        <img src={UTN_LOGO} alt="logo" className=" h-10" />
      </a>
      <div className="rounded-full p-2 bg-white flex items-center">
        <input
          type="text"
          placeholder="Buscar trabajos"
          className="rounded-l-full py-1 px-4 focus:outline-none w-72"
        />
        <button className="rounded-r-full text-gray-700 px-4" title="Buscar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          {/* Search */}
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
          svg={
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          }
          text="Menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
