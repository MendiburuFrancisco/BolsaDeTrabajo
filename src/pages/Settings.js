import React from "react";
import PersonalInfo from "../components/ui/PersonalInfo";
import ContactInfo from "../components/ui/ContactInfo";
import CVUpload from "../components/ui/CVUpload";
import Navbar from "../components/ui/Navbar";
// import { MultiSelectDropdown} from 'reactjs-dropdown-component';
import  MultiSelectDropdown from '../components/form/MultiSelectDropdown';
import { Link } from "react-router-dom";
import {
  UserCircleIcon,
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon,
  WrenchIcon,
  IdentificationIcon,
  SquaresPlusIcon,
} from "@heroicons/react/20/solid"; // Asegúrate de tener heroicons instalado

import Student from "../layouts/Student";
import UniversityInfo from "../components/ui/UniversityInfo";
// import Skill from "../components/ui/Skill";

const Settings = () => {
  return (
    <>
      <Student>
        <div className="flex justify-center p-4  h-screen">
          <div className="flex">
            {/* Sidebar */}
            {/* <div className="w-96  p-5 rounded-l-lg shadow-lg"> */}
            <div className="w-80 p-5 ">
              <div className="flex items-center space-x-4 p-2 mb-5">
                <div>
                  <h4 className="font-semibold text-white text-lg text-gray-700">
                    Francisco Mendiburu
                  </h4>
                  
                  <span className="text-sm text-gray-200">
                    fmendiburu@frro.utn.edu.ar
                  </span>
                  {/* <br/> */}
                  {/* <span className="text-sm text-gray-200">
                    Ingeniería en Sistemas
                  </span> */}
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-3 text-blue-200">
                  <WrenchIcon className="h-5 w-5" />
                  <span>Preferencias</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IdentificationIcon className="h-5 w-5" />
                  <span className="rounded">Informacion</span>
                </li>
                <li className="">
                  <button className="flex w-full py-2 rounded items-center space-x-3 text-gray-300 hover:bg-blue-500 hover:text-">
                    <SquaresPlusIcon className="h-5 w-5" />
                    <span className="rounded">Trabajos subidos</span>
                  </button>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <hr />
 
              <button className="mt-auto flex items-center py-2 w-full py-2 rounded items-center space-x-3 text-red-400 hover:bg-red-500 hover:text-white">
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />

                <span>Cerrar sesión</span>
              </button>
            </div>

            {/* Form */}
            <div className="flex-1 bg-white p-5 rounded-r-lg shadow-lg  ">
              <h2 className="font-bold text-2xl text-gray-700 mb-5 ">Perfil</h2>
              <div className="grid grid-cols-4 gap-4 mb-5 ">
              <PersonalInfo />
              <MultiSelectDropdown placeholder="Seleccionar carreras" options={["ISI","IE","IQ","IM"]} />
              
              <>.</>
              <ContactInfo />
  
              
              </div>
              <div className="flex justify-center space-x-3">
                <button className="bg-blue-500 text-white px-5 py-2 rounded shadow">
                  Guardar
                </button>
                <button className="bg-gray-300 text-gray-700 px-5 py-2 rounded shadow">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Student>
    </>
  );
};

export default Settings;
