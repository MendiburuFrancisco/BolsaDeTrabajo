import React from "react";
import {useForm} from '../../hooks/useForm';
import FormInput from '../form/FormInput';
import PrimaryLink from './PrimaryLink';
// import LogoNegro from '../../assets/img/logo-utn-n.png';
import LogoNegro from '../../assets/img/logo-arania.png';
import Axios from "axios";
import Swal from 'sweetalert2'

function RegistrationComponent() {

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
          Axios.post("http://localhost:8888/auth/company/register",{
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
        
        console.log(values.cuit,values.razon_social, values.email, values.telefono, values.direccion)
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
          <div className="space-y-2">
            <label
              htmlFor="cuit"
              className="block text-sm font-medium text-gray-700"
            >
              CUIT
            </label>
            
            <FormInput
              type="text"
              id="cuit"
              placeholder="CUIT"
              value={values.cuit}
              onChange={handleInputChange}
              ariaLabel="CUIT"
              required
            />

            <label
              htmlFor="razon_social"
              className="block text-sm font-medium text-gray-700"
            >
              Razon social
            </label>
            <FormInput
              type="text"
              id="razon_social"
              placeholder="Razon social"
              value={values.razon_social}
              onChange={handleInputChange}
              ariaLabel="Razon social"
              required
            />

            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-700"
            >
              Direccion
            </label>
            <FormInput
              type="text"
              id="direccion"
              placeholder="Direccion"
              value={values.direccion}
              onChange={handleInputChange}
              ariaLabel="Direccion"
              required
            />
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Telefono
            </label>
            <FormInput
              type="number"
              id="telefono"
              placeholder="Telefono de contacto"
              value={values.telefono}
              onChange={handleInputChange}
              ariaLabel="Telefono"
              required
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <FormInput
              type="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleInputChange}
              ariaLabel="Email"
              required
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <FormInput
              type="password"
              id="password"
              placeholder="Contraseña"
              value={values.password}
              onChange={handleInputChange}
              ariaLabel="password"
              required
            />

            
          </div>
          <div className="card text-center card-footer text-muted">
        {
          <button className='rounded bg-cyan-600 px-6 pb-2 pt-2.5 font-medium text-white hover:bg-cyan-700 ' onClick={handleSubmit}>Registrarme</button>
        }   
        </div>
      

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