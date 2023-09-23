 import Navbar from "../components/ui/Navbar.js"; 
 import Footer from "../components/ui/Footer.js";


function Register(children) {
  return (
    <div className="App bg-gray-800  "> 
      <header className="header">
        <Navbar
          esconde= {' hidden' } 
          buttons={[ 
          ]}
        />
      </header>

      <main className=" h-[calc(90vh-0px)] ">
          {children.children} 
      </main>

      <Footer />

    
    </div>
  );
}

export default Register;
