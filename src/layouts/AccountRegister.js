import Navbar from "../components/ui/Navbar.js";
import Footer from "../components/ui/Footer.js";

function AccountRegister(children) {
  return (
    <div className="App bg-gray-800   ">
      <header className="header">
        <Navbar esconde={" hidden"} buttons={[]} />
      </header>

      <main className=" h-[calc(100vh-0px)] text-left ">
        <div className="auth-card lg:w-9/12 sm:w-fit  rounded-lg   mb-8 flex items-center justify-center">
          <div> {children.children} </div>
        </div>
      </main>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default AccountRegister;
