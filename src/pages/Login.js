// UI-Imports
import Layout from "../layouts/Account";
import LogoNegro from "./../assets/img/logo-arania.png";
import FormInput from "../components/form/FormInput";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/ui/PrimaryButton.js";
import PrimaryLink from "../components/ui/PrimaryLink.js";
import "./../assets/css/Login.css";
// Logic-Imports
import React, { Suspense, useContext } from "react";
import { redirect } from "react-router-dom";
import { useForm } from "../hooks/useForm.js"; 
import { useAuth,AuthProvider } from "../context/AuthContext.js";

const Login = () => {
  const [values, handleInputChange] = useForm({
    usuario: "",
    password: "",
  });
  // const { signin } = useAuth();

  const { signin, loading, isAuthenticated,user,errors } = useAuth();

  const handlerLogin = async (event) => {
    event.preventDefault();
    const button = document.getElementById("login-button");
    const mensajeError = document.getElementById("mensaje-error");
    try {
      mensajeError.classList.add("hidden");

      button.innerText = "...";
      const datos = {
        email: values.usuario.toLowerCase() + "@frro.utn.edu.ar",
        password: values.password,
      }
      console.log(datos)

      
      await signin(datos);
        console.log("A"+isAuthenticated+"     U :"+user)
        
        if(isAuthenticated){
          button.innerText = "Ingresando...";
          window.location.href = "/";
        }else{
          button.innerText = "Ingresar";
          mensajeError.classList.remove("hidden");

        }
 
      
      
  
    } catch (error) {
      console.error(error);
      button.innerText = "Error";
      mensajeError.classList.remove("hidden");
    }
  };

  return (
    <Layout className="login-card h-[calc(100vh-0px)]" >
 
        <div className="flex justify-center">
          <img className="login-logo w-40" alt="logo" src={LogoNegro} />
        </div>

        <h2 className="text-xl font-semibold pb-8">Bolsa de Trabajo</h2>

        <form
          onSubmit={handlerLogin}
          className="space-y-6 mx-6"
        >
          {/* Email Input */}
          <div className="mb-4 ">
            <label
              htmlFor="email"
              className="block text-sm text-left font-medium leading-6 text-gray-900"
            >
              Usuario
            </label>
            <div className="flex items-center justify-between">
              <FormInput
                type="text"
                id="usuario"
                name="usuario"
                onChange={(e) => handleInputChange({target: e.target})}
                required
                ariaLabel="Ingrese su usuario"
              />

              <p className="text-md font-semibold   text-black-500 ms-2">

                @frro.utn.edu.ar
              </p>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-gray-700 text-left text-sm font-semibold mb-1"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <Link to={"/login/password/reset"}>
                  <p className="text-sm font-semibold text-blue-500 hover:text-blue-800">
                    ¿Olvidaste la contraseña?
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <FormInput
                type="password"
                id="password"
                name="password" 
                onChange={(e) => handleInputChange({target: e.target})} 
                required
                ariaLabel="Ingrese su contraseña"
              />
            </div>
          </div>
          <PrimaryButton id="login-button" text="Ingresar" />
          <p id="mensaje-error" className="text-center text-red-500 font-semibold hidden">
            creedenciales incorrectas
          </p>

        

        </form>
        
        <PrimaryLink to={"/singin"} text="¿Como obtengo una cuenta?" ariaLabel="Obtener una cuenta" type="submit" />
      
  
    </Layout>
  );
}

export default Login;

 