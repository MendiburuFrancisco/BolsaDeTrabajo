import Footer from "../components/ui/Footer";
import Sidebar from "../components/ui/Sidebar";

function AdminDashboard(children) {
  return (
    <>
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
      <div> {children.children} </div>
      </main>
    </div> 
    <footer>
        <Footer />
      </footer></>
  );
}

export default AdminDashboard;