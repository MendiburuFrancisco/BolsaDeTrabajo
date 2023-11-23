import { getJobFilterRequest } from "../../api/jobs.request";
import { useJobContext } from "../../context/JobContext"


import React, { useState } from "react";
import {
    AdjustmentsVerticalIcon,
    ArrowsUpDownIcon,
    TrashIcon,
} from "@heroicons/react/20/solid"; 

const SelectFilter = ({ options, value, onChange }) => {
    return (
        <select
            className="p-3 border border-gray-300 rounded-md text-gray-700"
            value={value}
            onChange={onChange}
        >
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
};

const JobFilters = () => {
    
    const [sortBy, setSortBy] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [jobType, setJobType] = useState("");
    const [officials, setOfficials] = useState("");
    
    const   { filters,setFilters,setSearchTerm } = useJobContext();

    const deleteFilters = () => {
        setSortBy("");
        setSpecialty("");
        setJobType("");
        setOfficials("");
        setFilters({page: 1 });
    };

    const applyFilters = () => {
            console.log({ sortBy, specialty, jobType, officials });
            const id_tipo_trabajo = (jobType === "Bolsa de trabajo") ? 1 : 3;
            const chequeado = (officials === "Oficiales") ? 1 : 0
            if (chequeado === 1) {
                setFilters({id_tipo_trabajo, chequeado, page: 1 });
            }
            else{
                setFilters({id_tipo_trabajo, page: 1 });
            }

    };

 
 


    return (
        <div className="bg-gray-500 px-4 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex flex-wrap justify-center space-x-6 items-center">
                    {/* Icon buttons for small screens */}
                    <button className="sm:hidden inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                        <ArrowsUpDownIcon className="h-5 w-5" />
                        <span>Ordenar</span>
                    </button>

                    <button className="sm:hidden inline-flex items-center px-5 py-3 text-sm leading-4 font-medium rounded-md text-white focus:outline-none ">
                        <AdjustmentsVerticalIcon className="h-5 w-5" />
                        <span>Filtrar</span>
                    </button>

                    {/* Full dropdowns for larger screens */}
                    <div className="hidden sm:flex space-x-4">
                        {/* Dropdown Filters */}
                        <SelectFilter
                            options={["Ordenar por", "Mas Reciente", "Postulaciones"]}
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        />

                        <SelectFilter
                            options={[
                                "Especialidad",
                                "Ingenieria en Sistemas",
                                "Ingenieria Eletronica",
                                "Ingenieria Quimica",
                                "Ingenieria Otra",
                            ]}
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        />

                        <SelectFilter
                            options={["Tipo Trabajo", "Bolsa de trabajo", "Pasantia"]}
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                        />

                        <SelectFilter
                            options={["Oficiales","Todos"]}
                            value={officials}
                            onChange={(e) => setOfficials(e.target.value)}
                        />

                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={applyFilters}
                        >
                            Aplicar Filtros
                        </button>

           
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={deleteFilters}
                        >
                            <TrashIcon className="h-5 w-5" />

                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFilters;
