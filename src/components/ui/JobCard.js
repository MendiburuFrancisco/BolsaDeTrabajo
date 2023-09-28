import React from "react";

import "tailwindcss/tailwind.css";

import { CheckBadgeIcon, BookmarkIcon } from "@heroicons/react/24/outline";
 

const iconSave = (filled) => {
  return <BookmarkIcon className="h-6 w-6" fill={filled ? "black" : "none"} />;
};

const Card = ({ id, title, type, specialitys, chequeado }) => {
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
      } else {
        saveIcon.innerHTML = iconSave(true);
      }
    }
  }

  return (
    <div
      id={id_car}
      className="card rounded text-black mb-4 shadow-md bg-white hover:bg-blue-100  transition duration-300"
      onClick={handleClick}
      // style={{ transition: "all 0.9s ease-in-out" }}
    >
      <div className="flex justify-between p-4 items-center mb-1">
        <strong className=" font-bold me-4">{title}</strong>
        <div className="flex">
          {chequeado == true ? (
            <span
              className="text-blue-500 text-xl cursor-help"
              title="Este trabajo fue subido de forma oficial por la facultad"
              aria-label="Este trabajo fue subido de forma oficial por la facultad"
            >
              <CheckBadgeIcon className="w-6 h-6" strokeWidth="2"/>
            </span>
          ) : null}

          <button
            className={
              id +
              "-save text-black-500 text-xl mr-2 hover:text-blue-500 transition duration-300  "
            }
            onClick={handleSaveButton}
          >
            {iconSave(false)}
          </button>
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
