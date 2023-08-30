 import Navbar from "../components/ui/Navbar.js"; 


function Register(children) {
  return (
    <div className="App bg-gray-800 "> 
      <header className="header">
        <Navbar
          buttons={[ 
          ]}
        />
      </header>

      {/* <main> */}
          {children.children} 
      {/* </main> */}
    <footer>
        
    </footer>
    </div>
  );
}

export default Register;
