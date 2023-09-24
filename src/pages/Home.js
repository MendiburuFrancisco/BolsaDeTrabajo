import JobCard from "./../components/ui/JobCard.js";
import JobDescription from "./../components/ui/JobDescription";
import StudentLayout from "./../layouts/Student.js";
// import  UseFetch  from "../hooks/UseFetch.js";
import { fetchData } from "../hooks/fetchData.js";
import React, { Suspense } from "react";

const apiData = fetchData("/jobs");
function Home() {
  const trabajos = apiData.read();
  return (
    <>
      <StudentLayout className=" flex items-center justify-center">
        {/* <h3 className="text  text-left text-white">Se encontraron N oportunidades de trabajo </h3> */}
        <body className="grid grid-cols-12 gap-12 m-4">
          {/* <body className="grid grid-cols-12 gap-12 justify-items-center "> */}
          <Suspense
            fallback={
              <JobCard
                key={0}
                title={"Cargando"}
                type={"..."}
                specialitys={"..."}
                description={"..."}
              />
            }
          >
            <div className="lg:col-span-4 md:col-span-12  ">
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
