import { BsBuilding, BsPeople,BsBriefcase   } from "react-icons/bs";
import React from "react";
function dashboardHome() {
  return (
<div class="flex flex-wrap justify-center mt-10">

<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
               <BsPeople />
            </div>
            <h2 class="text-white dark:text-white text-2xl font-medium">Usuarios</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
              Ver usuarios registrados en la base de datos de nuestro sistema, modificar sus datos, dar de alta usuarios nuevos y eliminarlos si se desea.
            </p>
            <a href="/admin/users" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"> Ver mas 
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
              <BsBuilding />
            </div>
            <h1 class="text-white dark:text-white text-2xl font-medium ">Empresas</h1>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
            Ver empresas registradas en la base de datos de nuestro sistema, modificar sus datos, dar de alta empresas nuevas y eliminarlas si se desea.
            </p>
            <a href="/admin/company" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"> Ver mas 
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
               <BsBriefcase />
            </div>
            <h2 class="text-white dark:text-white text-2xl font-medium">Trabajos</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
            Ver trabajos registrados en la base de datos de nuestro sistema, modificar sus datos de la oferta, dar de alta puestos de trabajos nuevos y eliminarlos si se desea.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"> Ver mas 
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

</div>
)}

export default dashboardHome;