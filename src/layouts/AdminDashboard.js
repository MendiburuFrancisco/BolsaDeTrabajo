import Footer from "../components/ui/Footer";
import Sidebar from "../components/ui/Sidebar";
import { BsBuilding, BsPeople,BsBriefcase, BsHouse , BsFolderPlus } from "react-icons/bs";


const links = [
  {
    title: "Home",
    path: "/admin/",
    icon: <BsHouse />,
  },
  {
    title: "Usuarios",
    path: "/admin/users",
    icon: <BsPeople />,
  },
   {
    title: "Empresas",
    path: "/admin/company",
    icon: <BsBuilding />,
  },
   {
    title: "Trabajos",
    path: "/admin/jobs",
    icon: <BsBriefcase />,
  },
   {
    title: "Tipo trabajo",
    path: "/admin/jobtype",
    icon: <BsFolderPlus  />,
  }
];

function AdminDashboard(children) {
  return (
    <>
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar links={links} />
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