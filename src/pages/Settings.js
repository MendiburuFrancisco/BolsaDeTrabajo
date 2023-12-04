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
         
            {/* Form */}
            <div className="flex-1 bg-white p-5 rounded-r-lg shadow-lg  ">
              <h2 className="font-bold text-2xl text-gray-700 mb-5 ">Perfil</h2>
              <div className="grid grid-cols-2 gap-4 mb-5 ">
              <PersonalInfo />
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
 
      </Student>
    </>
  );
};

export default Settings;
