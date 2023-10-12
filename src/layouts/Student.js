import Navbar from "./../components/ui/Navbar.js";
import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer.js";
import { HomeIcon, UserIcon, BookmarkIcon //} from "@heroicons/react/outline";
   } from "@heroicons/react/24/outline";


 
function Student(children) {
  return (
    <div className="App  bg-gray-800 ">
      {/* <div className="App bg-gray-800 h-100 grid grid-row-1 gap-1"> */}
      {/* <div className="App bg-gray-800 h-100 grid grid-cols-1 gap-0 "> */}
      <header className="header">
        {/*le pasamos como parametros los 3 iconos de la parte derecha*/}
        <Navbar
          buttons={[
            //home
            <HomeIcon className="w-6"/>,
            
            //bookmark
            <BookmarkIcon className="w-6 "  />,
            //usuario
            <Link to={"/settings"}>
              <UserIcon className="w-6" />
            </Link>,
          ]}
        />
      </header>

      <main>{children.children}</main>

      {/* <Footer /> */}
    </div>
  );
}

export default Student;
