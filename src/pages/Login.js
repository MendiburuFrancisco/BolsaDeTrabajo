import React, { Component, Suspense } from "react";
import Layout from "../layouts/Account";
import LogoNegro from "./../assets/img/logo-arania.png";
import "./../assets/css/Login.css";
import FormInput from "../components/form/FormInput";
import { Link } from "react-router-dom";
// import { fetchData } from "../hooks/fetchData.js";
import useAuth from "../hooks/useAuth.js"; 
import PrimaryButton from "../components/ui/PrimaryButton.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  handlerLogin = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Debe completar todos los campos" });
      return;
    }
    const response = useAuth.login({ email, password });
    if (response) {
      this.props.history.push("/home");
    } else {
      // cambio de color el boton a rojo
      this.setState({ error: "Usuario o contraseña incorrecta" });
      this.document.getElementById("login_button").className =
        "block w-full  bg-red-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 ";
    }
  };

  render() {
    return (
      <Layout>
 
          <div className="flex justify-center">
            <img className="login-logo w-40" alt="logo" src={LogoNegro} />
          </div>

          <h2 className="text-xl font-semibold pb-8">Bolsa de Trabajo</h2>

          <form
            onSubmit={this.handlerLogin}
            // method="POST"
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
                  // placeholder="                         "
                  required
                  // value={this.state.email}
                  // onChange={(event) =>  setEmail(event.target.value)}
                />
                <p className="text-md font-semibold  font-medium   text-black-500 ms-2">
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
                  // onChange={(event) => setPasswordHandler(event.target.value)}

                  required
                />
              </div>
            </div>

            <Suspense
              fallback={
                <div>
                  <button className="w-64 bg-blue-500 text-white py-2 rounded hover:bg-red-700 transition duration-300 ">
                    Loading...
                  </button>
                </div>
              }
            >
              <PrimaryButton text="Ingresar" />
            </Suspense>
          </form>

          <Link to={"/singin"}>
            <p className="text-gray-600 text-sm hover:text-gray-900 mt-2">
              ¿Como obtengo una cuenta?
            </p>
          </Link>
  
      </Layout>
    );
  }
}

export default Login;
