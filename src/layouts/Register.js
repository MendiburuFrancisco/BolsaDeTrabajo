 import Navbar from "../components/ui/Navbar.js"; 


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

      {/* <main> */}
          {children.children} 
      {/* </main> */}
    
    </div>
  );
}

export default Register;
