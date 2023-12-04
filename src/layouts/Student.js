
 
import Navbar from "./../components/ui/Navbar.js"; 
import { Link } from 'react-router-dom'
import Footer from "../components/ui/Footer.js";
import { HomeIcon, BriefcaseIcon, UserIcon,
        IdentificationIcon, SquaresPlusIcon
      } from "@heroicons/react/20/solid";


 
function Student(children) {
  return (

    <div className="   bg-gray-800   ">
 
    {/* <div className="App bg-gray-800 h-100 grid grid-row-1 gap-1">
    {/* <div className="App bg-gray-800 h-100 grid grid-cols-1 gap-0 "> */}

      <header className="header">
        {/*le pasamos como parametros los 3 iconos de la parte derecha*/}
       <Navbar
          buttons={[
           {
            link: "/",
            icon: <HomeIcon className="w-6 "/>,
            text: "Home",
          },
          {
            link: "/applications",
            icon: <BriefcaseIcon className="w-6 "/>,
            text: "Mis Postulaciones",
          },
          {
            link: "/settings",
            icon: <UserIcon className="w-6 "/>,
            text: "Mi Perfil",
            options:[{
              link: '/settings',
              icon: IdentificationIcon,
              text: 'Informacion'
          },
          {
              link: '/jobs',
              icon: SquaresPlusIcon,
              text: 'Trabajos subidos'
          }]
            
           }
          ]}
          
        />
 
              
      </header>
     
          
      <main>{children.children}</main>

      {/* <Footer /> */}
    </div>
  );
}

export default Student;
