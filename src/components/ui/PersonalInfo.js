import React, { useState } from 'react';

function PersonalInfo() {

  const [nombre, setNombre] = useState('');  
  const [apellido, setApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('dni');
  const [estadoCivil, setEstadoCivil] = useState('Soltero');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('masculino');
  const [provincia, setProvincia] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [calle, setCalle] = useState('');
  const [nroCalle, setNroCalle] = useState('');

  
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };
  const handleTipoDocumentoChange = (e) => {
    setTipoDocumento(e.target.value);
  };

  const handleNumeroDocumentoChange = (e) => {
    setNumeroDocumento(e.target.value);
  };

  const handleFechaNacimientoChange = (e) => {
    setFechaNacimiento(e.target.value);
  };

  const handleEstadoCivilChange = (e) => {
    setEstadoCivil(e.target.value);
  };

  const handleSexoChange = (e) => {
    setSexo(e.target.value);
  }; 
  
  const handleProvinciaChange = (e) => {
    setProvincia(e.target.value);
  };
  const handleCiudadChange = (e) => {
    setCiudad(e.target.value);
  };
  const handleCalleChange = (e) => {
    setCalle(e.target.value);
  };

  const handleNroCalleChange = (e) => {
    setNroCalle(e.target.value);
  };

  return (
    <div className="mb-4 w-1/3">
      <label className="block font-semibold mb-1">Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={handleNombreChange}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Nombre"
      />

      <label className="block font-semibold mb-1">Apellido:</label>
      <input
        type="text"
        value={apellido}
        onChange={handleApellidoChange}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Apellido"
      />

      <div className="flex mb-2">
        <div className="w-1/2 mr-2">
          <label className="block font-semibold mb-1">Tipo de Documento:</label>
          <select
            value={tipoDocumento}
            onChange={handleTipoDocumentoChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="w-1/2 ml-2">
          <label className="block font-semibold mb-1">Número de Documento:</label>
          <input
            type="number"
            value={numeroDocumento}
            onChange={handleNumeroDocumentoChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Número de Documento"
          />
        </div>
      </div>

      <div className="w-1/3 ">
          <label className="block font-semibold mb-1">Fecha de Nacimiento:</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={handleFechaNacimientoChange}
            className="w-full border border-gray-300 rounded p-2"
          />
      </div>

      <div className=" mb-2">
        <div className="w-1/3 mr-2">
          <label className="block font-semibold mb-1">Estado civil:</label>
          <select
            value={estadoCivil}
            onChange={handleEstadoCivilChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="dni">Soltero</option>
            <option value="pasaporte">Casado</option>
          </select>
        </div>
      </div>

      <div className=" mb-2">
        <div className="w-1/3 mr-2">
          <label className="block font-semibold mb-1">Sexo:</label>
          <select
            value={sexo}
            onChange={handleSexoChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="dni">Masculino </option>
            <option value="pasaporte">Femenino</option>
          </select>
        </div>
      </div>


      
      <label className="block font-semibold mb-1">Provincia:</label>
      <input
        type="text"
        value={provincia}
        onChange={handleProvinciaChange}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Provincia"
      />

      <label className="block font-semibold mb-1">Ciudad:</label>
      <input
        type="text"
        value={ciudad}
        onChange={handleCiudadChange}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Ciudad"
      />
    
      <label className="block font-semibold mb-1">Calle:</label>
      <input
        type="text"
        value={calle}
        onChange={handleCalleChange}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Calle"
      />

      <label className="block font-semibold mb-1">Nro Calle:</label>
      <input
        type="text"
        value={nroCalle}
        onChange={handleNroCalleChange}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Nro Calle"
      />
      
      


      {/* Apellido, usuario , apellido , email , tipo y nro de documento, fecha de nacimiento , estado civil,calle , nro calle , piso, depto.   */}
    </div>
  );
}

export default PersonalInfo;