import React from "react"; 
import LogoNegro from "./../assets/img/logo-arania.png";
import FormInput from "../components/form/FormInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Layout from "../layouts/Account";

const GetBackAccount = () => {
  return (
    <Layout>
 
      <div className="login-card " >

        <div className="flex justify-center">
          <img className="login-logo w-40" alt="logo" src={LogoNegro} />
        </div>
        <h2 className="text-xl font-semibold mb-2">Recupera tu cuenta </h2>
        <p>
          Por favor, ingresa tu correo de UTN-FRRO. <br />
          Pronto recibirás un enlace para restablecer tu contraseña.
        </p>

        {/* Email Input */}
        <div className="flex items-center justify-between my-4">
          <FormInput
            type="text"
            id="usuario"
            // placeholder="                         "
            required
            // value={this.state.email}
            // onChange={(event) =>  setEmail(event.target.value)}
          />
          <p className="text-md font-semibold  font-medium   text-black-500 ms-2">
            @frro.utn.edu.ar
          </p>
        </div>

        {/* Login Button */}
        <PrimaryButton text="Enviar" />
        </div>

 
    </Layout>
  );
};

export default GetBackAccount;
