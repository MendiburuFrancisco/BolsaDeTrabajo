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
    <div className="mb-4">
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
 
      


      {/* Apellido, usuario , apellido , email , tipo y nro de documento, fecha de nacimiento , estado civil,calle , nro calle , piso, depto.   */}
    </div>
  );
}

export default PersonalInfo;