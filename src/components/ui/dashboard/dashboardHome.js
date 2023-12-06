import {
  BsBuilding,
  BsPeople,
  BsBriefcase,
  BsArrowRight,
  BsFolderPlus  
} from "react-icons/bs";
import React from "react";

const cards = [
  {
    name: "Usuarios",
    href: "/admin/users",
    icon: <BsPeople/>,
    description:
      "Ver usuarios registrados en la base de datos de nuestro sistema, modificar sus datos, dar de alta usuarios nuevos y eliminarlos si se desea.",
  },
  {
    name: "Empresas",
    href: "/admin/company",
    icon: <BsBuilding/>,
    description:
      "Ver empresas registradas en la base de datos de nuestro sistema, modificar sus datos, dar de alta empresas nuevas y eliminarlas si se desea.",
  },
  {
    name: "Trabajos",
    href: "/admin/jobs",
    icon: <BsBriefcase/>,
    description:
      "Ver trabajos registrados en la base de datos de nuestro sistema, modificar sus datos de la oferta, dar de alta puestos de trabajos nuevos y eliminarlos si se desea.",
  },
  {
    name: "Tipo Trabajo",
    href: "/admin/jobtype",
    icon: <BsFolderPlus />,
    description:
      "Ver tipos de trabajo registrados en la base de datos de nuestro sistema, modificar sus datos de la oferta, dar de alta tipos de trabajos nuevos y eliminarlos si se desea.",
  },
];

function dashboardHome() {
  return (
    <div class="flex flex-wrap justify-center mt-10">
      {cards.map((card) => (
        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                {card.icon}
              </div>
              <h2 class="text-white dark:text-white text-2xl font-medium">
                {card.name}
              </h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-white dark:text-gray-300">
                {card.description}
              </p>
              <a
                href={card.href}
                class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
              >
                {" "}
                Ver {card.name.toLowerCase()}
                <BsArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default dashboardHome;
