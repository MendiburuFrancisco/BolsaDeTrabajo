import React, { useState } from 'react';


export default function UniversityInfo() {

    const [especialidad, setEspecialidad] = useState('Ingenieria en Sistemas de Informacion');
   
    const [numeroMaterias, setNumeroMaterias] = useState();
    const [plan, setPlan] = useState();

    const [añoCursado, setAñoCursado] = useState(''); 
    
    const [turnoCursado, setTurnoCursado] = useState(); 

    const handleEspecialidadChange = (e) => {
        setEspecialidad(e.target.value);
      };


      const handleNumeroMateriasChange = (e) => {
        setNumeroMaterias(e.target.value);
      };

      const handlePlanChange = (e) => {
        setPlan(e.target.value);
      };

      const handleAñoCursadoChange = (e) => {
        setAñoCursado(e.target.value);
      };  

      const handleTurnoCursadoChange = (e) => {
        setTurnoCursado (e.target.value);
      }; 
  return (
    <div className="mb-4 ">
        <div className=" mb-2">
        <div className="w-1/3 mr-2">
          <label className="block font-semibold mb-1">Especialidad:</label>
          <select
            value={especialidad}
            onChange={handleEspecialidadChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="isi">Ingenieria en Sistema de Informacion</option>
            <option value="iq">Ingenieria Quimica</option>
            <option value="im">Ingenieria Mecanica</option>
            <option value="ic">Ingenieria Civil</option>
            <option value="ie">Ingenieria Electrica</option>
          </select>
        </div>
      </div>


      <div className="w-1/5 ">
          <label className="block font-semibold mb-1">Cantidad de Materias aprobadas:</label>
          <input
            type="number"
            value={numeroMaterias}
            onChange={handleNumeroMateriasChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder=""
          />
        </div>

        <div className="w-1/5 ">
          <label className="block font-semibold mb-1">Plan Especialidad:</label>
          <input
            type="number"
            value={plan}
            onChange={handlePlanChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder=""
          />
        </div>
        

        <div className=" mb-2">
        <div className="w-1/3 mr-2">
          <label className="block font-semibold mb-1">Año que cursa:</label>
          <select
            value={añoCursado}
            onChange={handleAñoCursadoChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="1ero">1º Año</option>
            <option value="2do">2º  Año</option>
            <option value="3ero">3º Año</option>
            <option value="4to">4º Año</option>
            <option value="5to">5º  Año</option>
          </select>
        </div>
        </div>

        <div className=" mb-2">
        <div className="w-1/3 mr-2">
          <label className="block font-semibold mb-1">Turno que Cursa:</label>
          <select
            value={turnoCursado}
            onChange={handleTurnoCursadoChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
           
          </select>
        </div>
        </div>

        <div className="mb-4 w-1/3">
        <label className="block font-semibold mb-1">Titulo Universitario (PDF):</label>
        <input
          type="file"
          accept=".pdf"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>



    </div>
  )
}
