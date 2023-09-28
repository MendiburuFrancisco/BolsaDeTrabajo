import React from 'react';

const JobFilters = () => {
    return (
        <div className="bg-gray-500 px-4 py-3">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex flex-wrap justify-start space-x-4 items-center">
                
                    {/* Dropdown Filters */}
                    <select className="p-2 border rounded-md mr-2 bg-white">
                        <option>Ordenar por</option>
                        <option>Mas Reciente</option>
                        <option>Postulaciones</option>
                        <option></option>
                        {/* Add other options as needed */}
                    </select>

                    <select className="p-2 border rounded-md mr-2 bg-white">
                        <option>Especialidad</option>
                        <option>Ingenieria en Sistemas</option>
                        <option>Ingenieria Eletronica</option>
                        <option>Ingenieria Quimica</option>
                        <option>Ingenieria Otra</option>
                        {/* Add other options as needed */}
                    </select>

                    <select className="p-2 border  rounded-md mr-2 bg-white">
                        <option>Tipo Trabajo</option>
                        <option>Bolsa de trabajo</option>
                        <option>Pasantia</option>
                        {/* Add other options as needed */}
                    </select>

                    <select className="p-2 border   rounded-md bg-white">
                        <option>Oficiales</option>
                        {/* Add other options as needed */}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default JobFilters;
