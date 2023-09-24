import React from "react";
import Layout from "../layouts/Account";

const GetAccount = () => {
  return (
    <Layout >
      <div className="login-card w-2/3 text-center mx-auto border-white-500 border-l-2 ">
        <p className="text-xl font-semibold ">¿Cómo obtengo una cuenta?</p>
        <p className=" ">
          El primer paso es tener una cuenta de email de la UTN-FRRO. Para
          obtenerla, retirá el formulario en la Secretaría de Asuntos
          Universitarios (Zeballos 1341, Rosario).
        </p>

        <br />
        <p className="text-xl font-semibold ">
          ¿Cómo accedo al sistema de Bolsa de Trabajo?
        </p>

        <p className=" ">
          Debes iniciar sesión en el sistema introduciendo el correo y el
          password que te fueron asignados. Al ingresar por primera vez, debés
          cambiar la clave por defecto de la cuenta de correo @frro.utn.edu.ar.
          <br />
          No olvides propiciar tus datos y CV una vez que ingreses al sistema.
          De otra manera, no podrás postularte a ninguna vacante.
        </p>
      </div>
    </Layout>
  );
};

export default GetAccount;
