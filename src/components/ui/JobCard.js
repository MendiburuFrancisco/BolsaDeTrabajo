import React from "react";
// import './Card.css'; // Importar el archivo de estilos
import "../../assets/css/root.css"; // Importar el archivo de estilos
// import '../assets/JobCard.css'; // Importar el archivo de estilos
import "tailwindcss/tailwind.css";
//import { Button } from '@material-ui/core';

const iconVerified = (
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
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    />
  </svg>
);

const iconSave = (filled) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled === true ? "black" : "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  );
};

const Card = ({ id, title, type, specialitys }) => {
  const id_car = "card-" + id;

  const handleClick = () => {
    // setSelectedJob({ title, subtitle, subSubtitle, text, button1Label, button2Label });
  };

  function handleSaveButton() {
    // modifica el icono de guardado
    const saveIcon = document.getElementById(id + "-save");
    if (saveIcon) {
      if (saveIcon.innerHTML === iconSave(true)) {
        saveIcon.innerHTML = iconSave(false);
      }
      else {
        saveIcon.innerHTML = iconSave(true);
      }
    }
  }

  return (
    <div
      id={id_car}
      className="card rounded text-black mb-4 shadow-md bg-white hover:bg-blue-100"
      onClick={handleClick}
      // style={{ transition: "all 0.9s ease-in-out" }}
    >
      <div className="flex justify-between p-4 items-center mb-1">
        <strong className=" font-bold me-4">{title}</strong>
        <div className="flex">
          <span className="text-blue-500 text-xl" title="Este trabajo fue subido de forma oficial por la facultad" aria-label="Este trabajo fue subido de forma oficial por la facultad">{iconVerified}</span>
          <span
            className={id+"-save text-black-500 text-xl mr-2 hover:text-blue-500 transition duration-300 "}
            onClick={handleSaveButton}
          >
            {iconSave(false)}
          </span>
        </div>
      </div>
      <p className="opacity-70 text-left  pl-4 mb-3">{specialitys}</p>
      <div className="bg-gray-900 text-white p-2 ">
        {/* <div className="bg-gray-900 text-white p-2 rounded-b-lg"> */}
        <p className="text-left">{type}</p>
      </div>
    </div>
  );
};

export default Card;
