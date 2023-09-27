import React from 'react'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/Navbar'
const GetAccount = () => {
  return (
    <div className='App bg-gray-800 h-100 '>

        <Navbar
          esconde= {' hidden' } 
          buttons={[     ]}
        />
        <div className='w-1/2 text-center mx-auto my-20 border-white-500 border-l-2 ' >
              <p className="text-xl font-semibold text-white ">
              ¿Cómo obtengo una cuenta?
              </p>
              <p className='text-white'>
              El primer paso es tener una cuenta de email de 
              la UTN-FRRO. Para obtenerla, retirá el formulario en la Secretaría de Asuntos Universitarios (Zeballos 1341, Rosario).
              </p>
              <br/>
              <br/>
              <p className="text-xl font-semibold text-white">
              ¿Cómo accedo al sistema de Bolsa de Trabajo?
              </p>
              

              <p className='text-white'>
              Debes iniciar sesión en el sistema introduciendo el correo y el password que te fueron asignados.
              Al ingresar por primera vez, debés cambiar la clave por defecto de la cuenta de correo @frro.utn.edu.ar.
              <br/>
              No olvides propiciar tus datos y CV una vez que ingreses al sistema. De otra manera, no podrás postularte a ninguna vacante.
              </p>
              <br/>
              <br/>
              <p className="text-xl font-semibold text-white">
              Busco ofrecer trabajos, ¿cómo lo hago?</p>
                <p className='text-white'>Para el caso de empresas deberas completar la solicitud de alta 
                en nuestra bolsa de trabajo haciendo click <a class="boton" href='../'>aquí</a>.</p>
  
              

        </div>
        
      

        <Footer/>
    </div>
  )
}

export default GetAccount