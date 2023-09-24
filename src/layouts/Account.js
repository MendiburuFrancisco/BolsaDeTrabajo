 import Navbar from "../components/ui/Navbar.js"; 
 import Footer from "../components/ui/Footer.js";
 import AccountCard from "../components/ui/account/account.card";



function Account(children) {
  return (
    <div className="App bg-gray-800   "> 
      <header className="header">
        <Navbar
          esconde= {' hidden' } 
          buttons={[ 
          ]}
        />
      </header>

      <main className=" h-[calc(90vh-0px)] ">
        <AccountCard>
          {children.children} 
          </AccountCard>
      </main>

      <Footer />

    
    </div>
  );
}

export default Account;
