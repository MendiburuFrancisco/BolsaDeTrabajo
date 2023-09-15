import React from 'react'
import PersonalInfo from '../components/ui/PersonalInfo'
import ContactInfo from '../components/ui/ContactInfo' 
import CVUpload from '../components/ui/CVUpload'
import Navbar from '../components/ui/Navbar'
import { Link } from 'react-router-dom'
import UniversityInfo from '../components/ui/UniversityInfo'
import Skill from '../components/ui/Skill'

const Settings = () => {
  return (
    <>
    <Navbar
          esconde= {' hidden' } 
          buttons={[    

            //campanita
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>,
            //home
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>,
           ]}
        />

    {/* <h1 className="text-2xl font-semibold mb-4">Detalles del postulante</h1> */}
        {/* deberiamos tratar de hacer en esta pagina varias solapitas(4) para los distintos tipos de datos del usuario , 
        como en la pagina original */}
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Datos Personales</h1>
      <PersonalInfo />

      {/*este componente se podria colocar al lado de PersonalInfo con flex*/}
      <h1 className="text-2xl font-semibold mb-4">Informacion de contacto</h1>
      <ContactInfo />
      <CVUpload />
      <h1 className="text-2xl font-semibold mb-4">Datos Universitarios</h1>
      <UniversityInfo/>
      <h1 className="text-2xl font-semibold mb-4">Conocimientos</h1>
      <Skill/>
      
      <button className="px-4 py-2 bg-gray-700 text-white rounded">
          Guardar
      </button>

      <Link to={"/"}>
      <button className="px-4 py-2 text-black rounded">
          Volver Atras
      </button>
      </Link>
      
    </div>

    </>
  )
}

export default Settings