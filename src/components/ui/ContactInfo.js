import React, { useState } from 'react';

function ContactInfo() {

    const [telefono, setTelefono] = useState('');

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
      };


    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };

        
    const [linkedin, setLinkedin] = useState('');

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value);
      };

    return (
      <div className="mb-4">
        <label className="block font-semibold mb-1">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Email"
        />

        <label className="block font-semibold mb-1">Telefono:</label>
        <input
          type="text"
          value={telefono}
          onChange={handleTelefonoChange}
          className="w-full border border-gray-300 rounded p-2"
          placeholder=""
        />

        <label className="block font-semibold mb-1">LinkedIn:</label>
        <input
          type="text"
          value={linkedin}
          onChange={handleLinkedinChange}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="ingrese url de su perfil aqui"
        />
        
      </div>
    );
  }
  
  export default ContactInfo;