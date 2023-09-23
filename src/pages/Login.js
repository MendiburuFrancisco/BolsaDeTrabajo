import React, { Component,Suspense } from "react";
import Layout from "./../layouts/Register";
//import Logo from './../assets/img/logo_utn.png'
import LogoNegro from "./../assets/img/logo-arania.png";
import "./../assets/css/Login.css";
import Footer from "../components/ui/Footer.js";
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
  
  fetchLogin(data){
    const result = fetchData('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) })
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
          <div className="login-card bg-white-100 p-6 rounded-lg  shadow-md min-w-fit  mb-8">
            <div className="flex justify-center">
              <img
                className="login-logo w-40"
                alt="logo"
                src={LogoNegro}
              />
            </div>

            <h2 className="text-xl font-semibold">Iniciar sesión</h2>

            <form onSubmit={this.handlerLogin}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="                         @frro.utn.edu.ar"
                  className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 "
                  required
                  // value={this.state.email}
                  // onChange={(event) =>  setEmail(event.target.value)}
                  />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Password
                </label>
                <div className="">
                  <input
                    type="password"
                    id="password"
                    className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    // onChange={(event) => setPasswordHandler(event.target.value)} 
                    
                
                    required
                  />
                  <Link to={"/login/GetBackAccount"}>
                    <p className=" text-gray-400 text-sm">
                      ¿Olvidaste la contraseña?
                    </p>
                  </Link>
                </div>
              </div>

            <Suspense fallback={<div>
              
              <button className="w-64 bg-blue-500 text-white py-2 rounded hover:bg-red-700 transition duration-300 ">
              Loading...
            </button>
        </div>}>

            <button id="login_button"className="w-64 bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 " >
              Login
            </button>
            </Suspense>
            </form>

            <br />
            <Link to={"/login/GetAccount"}>
              <p className=" text-gray-400 text-sm">
                ¿Como obtengo una cuenta?
              </p>
            </Link>
     
          </div>
          <Footer />
        </>
      </Layout>
    );
  }
}

export default Login;
