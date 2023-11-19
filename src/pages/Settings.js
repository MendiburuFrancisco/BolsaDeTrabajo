import React from "react";
import PersonalInfo from "../components/ui/PersonalInfo";
import ContactInfo from "../components/ui/ContactInfo";
import CVUpload from "../components/ui/CVUpload";
import Navbar from "../components/ui/Navbar";
import { Link } from "react-router-dom";
import Student from "../layouts/Student";
import UniversityInfo from "../components/ui/UniversityInfo";
// import Skill from "../components/ui/Skill"; 

const Settings = () => {
  return (
    <>
      <Navbar
          buttons={[1,2,3]}
        />
        {/* Main content */}
        <div className="bg-gray-700 flex justify-center">

        <main className="w-3/4 ml-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            {/* PersonalInfo and ContactInfo side by side */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <h1 className="text-xl font-semibold mb-2">Datos Personales</h1>
                <hr className="mb-4 "/>
                <PersonalInfo />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <h1 className="text-xl font-semibold mb-2">Informacion de contacto</h1>
                <hr className="mb-4 "/>

                <ContactInfo />
              </div>
            </div>

            <CVUpload />

            {/* UniversityInfo and Skill commented out for now */}
            {/* <UniversityInfo/> */}
            {/* <Skill/> */}

            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Guardar
              </button>

              <Link to="/">
                <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                  Volver Atras
                </button>
              </Link>
            </div>
          </div>
        </main>
        </div>
  
    </>
  );
};

export default Settings;
