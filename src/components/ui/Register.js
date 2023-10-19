import React, { useState } from "react";
import {useForm} from '../../hooks/useForm';
import FormInput from '../form/FormInput';
import PrimaryLink from './PrimaryLink';
// import LogoNegro from '../../assets/img/logo-utn-n.png';
import LogoNegro from '../../assets/img/logo-arania.png';
import Swal from 'sweetalert2'
import axios from "axios";
import { InputLabel, TextField} from '@material-ui/core';

//import { registerCompanyRequest } from "../../api/auth.request";

function RegistrationComponent() {
  const [errorMail, setErrorMail] = useState({
    errorMail: false,
    message: "",
  });
  const [errorPassword, setErrorPassword] = useState({
    errorPassword: false,
    message: "",
  });

  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const passwordValidation = (password) => {
    const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,-])(?=.{8,})/ ;
    return regex.test(password);
  };

 const [values, handleInputChange, reset] = useForm({
        cuit: '',
        razon_social: '',
        email: '',
        direccion: '',
        telefono: '',
        password: ''
      }); 
        const handleSubmit = (e) => {
          e.preventDefault()
          if (!emailValidation((values.email))) {
            setErrorMail({
              errorMail: true,
              message: "El email no es valido. Debe ser del tipo email@example.com",
            });
            return;
          }
          console.log((values.email));
          setErrorMail({
            errorMail: false,
            message: "",
          });
          if (!passwordValidation((values.password))) {
            setErrorPassword({
              errorPassword: true,
              message: "Debe contener como mínimo 8 caracteres y al menos uno de cada tipo (mayúsculas, minúsculas, números y caracteres especiales)",
            });
            return;
          }
          console.log((values.password));
          setErrorPassword({
            errorPassword: false,
            message: "",
          });
          axios.post("http://localhost:8888/auth/company/register",{
          cuit:values.cuit,
          razon_social:values.razon_social,
          email:values.email,
          direccion:values.direccion,
          telefono: values.telefono,
          password: values.password,
          id_rol:'3'
        }).then(()=>{Swal.fire({
          title: "<strong>Registro exitoso!!!</strong>",
          html: "<i>Te enviaremos un mail cuando tu cuenta sea activada por un administrador y esté lista para usarse.</i>",
          icon: 'success',
          timer: 3000 
        })
      }).catch(function(error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: "<i>Ocurrió un error en el momento del registro. <br>Intente de nuevo más tarde</i>",
          timer: 3000,
          
        })
          console.log(values.cuit,values.razon_social, values.email, values.direccion, values.telefono, )
          })
        
        reset()
    }
      
      
  return (
    
    <div className="flex flex-col md:flex-row p-4  bg-white rounded-md shadow-md">
      {/* Left section */}
      <section className="flex-1 p-4 space-y-4 pt-24 ">
        <div className="text-lg font-bold">¿Cómo obtengo una cuenta?</div>
        <p className="text-gray-600">
          {" "}
          El primer paso es tener una cuenta de email de la UTN-FRRO. Para
          obtenerla, retirá el formulario en la Secretaría de Asuntos
          Universitarios (Zeballos 1341, Rosario).
        </p>

        <div className="text-lg font-bold">
          ¿Cómo acceso al sistema de bolsa de Trabajo?
        </div>
        <p className="text-gray-600">
          {" "}
          Debes iniciar sesión en el sistema introduciendo el correo y el
          password que te fueron asignados. Al ingresar por primera vez, debés
          cambiar la clave por defecto de la cuenta de correo @frro.utn.edu.ar.
          <br />
          No olvides propiciar tus datos y CV una vez que ingreses al sistema.
          De otra manera, no podrás postularte a ninguna vacante..
        </p>

        <div className="text-lg font-bold">
          Busco postular trabajos, ¿cómo puedo hacerlo?
        </div>
        <p className="text-gray-600">pharetra pharetra massa. Aliquet risus feugiat in ante metus dictum at. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Nibh cras pulvinar mattis nunc. Ac placerat vestibulum lectus </p>
      </section>

      {/* Register section */}
      <section className="flex-1 p-4 space-y-4">
        <div className="flex justify-center ">
          <img src={LogoNegro} alt="UTN Logo" className=" h-16" />
        </div>

        <div className="text-lg font-bold text-center">Registro
        <p className="text-sm text-center text-gray-600">Para empresas</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <InputLabel
              htmlFor="cuit"
              className="block text-sm font-medium text-gray-700"
            >
              CUIT
            </InputLabel>
            
            <FormInput
              type="text"
              id="cuit"
              placeholder="CUIT"
              value={values.cuit}
              onChange={handleInputChange}
              ariaLabel="CUIT"
              required
            />


            <InputLabel
              htmlFor="razon_social"
              className="block text-sm font-medium text-gray-700"
            >
              Razon social
            </InputLabel>
            <FormInput
              type="text"
              id="razon_social"
              placeholder="Razon social"
              value={values.razon_social}
              onChange={handleInputChange}
              ariaLabel="Razon social"
              required
            />

            <InputLabel
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-700"
            >
              Direccion
            </InputLabel>
            <FormInput
              type="text"
              id="direccion"
              placeholder="Direccion"
              value={values.direccion}
              onChange={handleInputChange}
              ariaLabel="Direccion"
              required
            />
            <InputLabel
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Telefono
            </InputLabel>
            <FormInput
              type="number"
              id="telefono"
              placeholder="Telefono de contacto"
              value={values.telefono}
              onChange={handleInputChange}
              ariaLabel="Telefono"
              required
            />
            <InputLabel
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </InputLabel>
            <TextField
      className="block w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300  shadow-sm ring-1 focus:ring-2 focus:ring-inset"
      id="email"
            type="email"
            variant="outlined"
            placeholder="Email"
            helperText={errorMail.message}
            value={values.email}
            onChange={handleInputChange}
            />
            <InputLabel
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </InputLabel>
            <TextField
            className="block w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300  shadow-sm ring-1 focus:ring-2 focus:ring-inset"
            variant="outlined"
            id="password"
            type="password"
            placeholder="Contraseña"
            error={errorPassword.errorPassword}
            helperText={errorPassword.message}
            value={values.password}
            onChange={handleInputChange}
            />

            
          </div>
              
        <button type="submit" className="block w-full mt-3 h-14 bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 "
>
            Registrarme
            </button> 
</form>
        <div className="text-center mt-2">
          <PrimaryLink
            id="login"
            to="/login"
            text="¿Tenés cuenta?"
          />
        </div>
      </section>
    </div>
  );
};

export default RegistrationComponent;