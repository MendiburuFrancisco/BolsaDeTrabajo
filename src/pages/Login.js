import React, { Component, Suspense } from "react";
import Layout from "./../layouts/Register";
//import Logo from './../assets/img/logo_utn.png'
import LogoNegro from "./../assets/img/logo-arania.png";
import "./../assets/css/Login.css";
import { Link } from "react-router-dom";
// import fetchData from "../hooks/fetchData.js";
import { fetchData } from "../hooks/fetchData.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  fetchLogin(data) {
    const result = fetchData("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return result.read();
  }

  handlerLogin = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Debe completar todos los campos" });
      return;
    }
    const resultData = this.fetchLogin({ email, password });

    console.log(resultData);

    if (resultData?.token) {
      localStorage.setItem("token", resultData.token);
      this.props.history.push("/settings");
    } else {
      this.setState({ error: resultData.message });
    }
  };

  render() {
    return (
      <Layout>
        <>
          <div className="login-card bg-white-100  rounded-lg  shadow-md min-w-fit  mb-8 flex items-center justify-center">
            <div>

            
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
                  <input
                    type="text"
                    id="usuario"
                    // placeholder="                         "
                    className="block w-full w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300  shadow-sm ring-1 focus:ring-2 focus:ring-inset"
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
                    <Link to={"/login/GetBackAccount"}>
                      <p className="text-sm font-semibold text-blue-500 hover:text-blue-800">
                        ¿Olvidaste la contraseña?
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    className="block w-full w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300  shadow-sm ring-1 focus:ring-2 focus:ring-inset"
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
                <button
                  id="login_button"
                  className="block w-full  bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 "
                >
                  Ingresar
                </button>
              </Suspense>
            </form>

            <Link to={"/login/GetAccount"}>
              <p className="text-gray-600 text-sm hover:text-gray-900 mt-2">
                ¿Como obtengo una cuenta?
              </p>
            </Link>
          <div className="bg-gray-700 block w-full mt-5 h-5"/>
          </div>
          </div>

        </>
      </Layout>
    );
  }
}

export default Login;
