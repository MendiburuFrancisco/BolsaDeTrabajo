import React from "react";
import {useForm} from '../../hooks/useForm';
import FormInput from '../form/FormInput';
import PrimaryButton from './PrimaryButton';
import PrimaryLink from './PrimaryLink';
// import LogoNegro from '../../assets/img/logo-utn-n.png';
import LogoNegro from '../../assets/img/logo-arania.png';


const RegistrationComponent = () => {
    const [values, handleInputChange, reset] = useForm({
        cuit: '',
        razonSocial: '',
        email: '',
        rubro: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
      }

  return (
    
    <div className="flex flex-col md:flex-row p-4 bg-white rounded-md shadow-md">
      {/* Left section */}
      <section className="flex-1 p-4 space-y-4">
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
            htmlFor="razonSocial"
            className="block text-sm font-medium text-gray-700"
          >
            Razon social
          </label>
          <FormInput
            type="text"
            id="razonSocial"
            placeholder="Razon social"
            value={values.razonSocial}
            onChange={handleInputChange}
            ariaLabel="Razon social"
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
            htmlFor="rubro"
            className="block text-sm font-medium text-gray-700"
          >
            Rubro
          </label>
          <FormInput
            type="text"
            id="rubro"
            placeholder="Rubro"
            value={values.rubro}
            onChange={handleInputChange}
            ariaLabel="Rubro"
            required
          />
        </div>
        <PrimaryButton
          id="submit"
          text="Registrarme"
          onClick={handleSubmit}
        />

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
