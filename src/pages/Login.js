import React, { Component } from 'react';
import Layout from './../layouts/Register';
//import Logo from './../assets/img/logo_utn.png'
import LogoNegro from './../assets/img/logo-utn-n.png'
import './../assets/css/Login.css'
import Footer from "../components/ui/Footer.js";
import { Link } from 'react-router-dom'

class Login extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null,
        };
    }
  
  
  render (){

   return   <Layout >
    <>
    <div className="login-card bg-white-100 p-6 rounded-lg  shadow-md min-w-fit " >
    
        <img className="login-logo  shadow-md  w-40" alt="logo" src={LogoNegro} />
        
    
        <h2 className="text-xl font-semibold">Iniciar sesión</h2>
        
        {/* Email Input */}
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
            <input type="email" id="email  " placeholder="                         @frro.utn.edu.ar"
            className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 " />
        </div>

        {/* Password Input */}
        <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
            <div className=''>
            <input type="password" id="password"
            className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
            <Link to={"/login/GetBackAccount"}>
            <p className=' text-gray-400 text-sm'>¿Olvidaste la contraseña?</p>
            </Link>
            </div>
            
        </div>
        

        {/* Login Button */}
        <button className="w-64 bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 ">
            Login
        </button>
        <br/>
        <Link to={"/login/GetAccount"}> 
        <p className=' text-gray-400 text-sm'>¿Como obtengo una cuenta ?</p>
        </Link>
        {/* Register Button ** no me parece necesario tener esta funcion xq los alumnos ingresan a la pagina ya con una cuenta activa SIEMPRE
        <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Register
        </button> */}

    </div>
    <Footer/>
    </>
 </Layout> 
 
}
}

export default Login;
