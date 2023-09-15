import React from 'react'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/Navbar'
import LogoNegro from './../assets/img/logo-utn-n.png'

const GetBackAccount = () => {
  return (
    <div className="App bg-gray-800 h-100 ">
    
      <header className="header">
        {/*hay q quitar barra de busqueda*/}
        <Navbar
          esconde= {' hidden' } 
          buttons={[     ]}
        />
      </header>


      <div className="login-card bg-white-100 p-6 rounded-lg  shadow-md min-w-fit mb-8" >
    
        <img className="login-logo  shadow-md  w-40" alt="logo" src={LogoNegro} />
        
    
        <h2 className="text-xl font-semibold">Recupera tu cuenta </h2>
        <p>Por favor, ingresa tu correo de UTN-FRRO. <br/>Pronto recibirás un enlace para restablecer tu contraseña.</p>
        {/* Email Input */}


        <div className="mb-4">
            <div className='bg-white-800'>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1 ">Email</label>
            <input type="email" id="email  " placeholder="                         @frro.utn.edu.ar"
            className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 " />
            </div>

        </div>

      
        

        {/* Login Button */}
        <button className="w-64 bg-blue-500 text-white py-2 rounded hover:bg-gray-700 transition duration-300 ">
            Enviar
        </button>
        <br/>
        
    

    </div>


      <div className='mt-8'>

      </div>
      <Footer/>
    </div>
  )
}

export default GetBackAccount