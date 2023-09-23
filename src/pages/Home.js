import Footer from "../components/ui/Footer.js";
import JobCard from "./../components/ui/JobCard.js";
//import JobCard2 from "./../components/ui/MyCard.js";
import JobDescription from "./../components/ui/JobDescription";
import StudentLayout from "./../layouts/Student.js";
// import  UseFetch  from "../hooks/UseFetch.js";
import { fetchData } from "../hooks/fetchData.js";
import React, {Suspense} from "react";


// function getJobsFromApi(){
//  const {data,loading,error} = useFetch("http://localhost:3000/api/v1/jobs");
// const apiData = fetchData("/jobs");
const apiData = ""
function Home() {
  const trabajos = apiData.read();
  return (
    <>
    <StudentLayout className> 
    <body className="grid grid-cols-12 gap-12 justify-items-center p-4 ">
        
      <Suspense fallback={<div>
          <JobCard
            key={0}ss
            title={"Cargando"}
            type={"..."}
            specialitys={"..."}
            description={"..."}
            />

        </div>}>
        <div className="lg:col-span-4 md:col-span-12 ">
        
          {/* <h1>{tzrabajo.titulo}</h1>  */}
           {trabajos?.map((trabajo, index) => (
            <JobCard
            id={trabajo.id}
            title={trabajo.titulo}
            type={trabajo.tipo}
            specialitys={"ISI"}
            description={trabajo.descripcion}

            /> 
           ))}
         </div>
         </Suspense> 
        {/*como vincular la JobCard con su JobDescription?? evento onclick y hidden? */}
        {/* Hacer array de JobDescription para cada JobCard? */}
        <div className="lg:col-span-8 md:col-span-12 ">
          <JobDescription
            title={trabajos?.[0].titulo}
            subtitle={trabajos?.[0].tipo}
            subSubtitle="ISI,EC"
            text={trabajos?.[0].descripcion}
            button1Label="Volver atras"
            button2Label="Postularme"
            />
        </div>

      </body>
    </StudentLayout>
    
    </>
  );
}

export default Home;
