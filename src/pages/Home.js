import React, { Suspense, useState } from "react";
import JobCard from "../components/ui/JobCard.js";
import JobDescription from "../components/ui/JobDescription.js";
import StudentLayout from "../layouts/Student.js";
import { fetchData } from "../hooks/fetchData.js";

const apiData = fetchData("/jobs");

function Home() {
  const trabajos = apiData.read();
  const [selectedJob, setSelectedJob] = useState(trabajos[0]);
  const [jobClicked, setJobClicked] = useState(false);

  function handlerSelectedJob(trabajo, clicked) {
    setSelectedJob(trabajo);
    setJobClicked(clicked);
  }

  return (
    <>
      <StudentLayout className="flex items-center justify-center h-[calc(100vh-0px)]">
        <div role="main" className="grid lg:grid-cols-12 md:grid-cols-12 lg:gap-12 md:gap-12 m-4">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="lg:col-span-4 md:col-span-5 sm:col-span-10">
              {trabajos?.map((trabajo, index) => (
                <a
                  key={index}
                  tabIndex="0"
                  role="button"
                  aria-label={`Select job: ${trabajo.titulo}`}
                  onClick={() => handlerSelectedJob(trabajo, true)}
                >
                  <JobCard
                    id={trabajo.id}
                    title={trabajo.titulo}
                    type={trabajo.tipo}
                    specialitys={"ISI"}
                    description={trabajo.descripcion}
                    chequeado={trabajo.chequeado}
                  />
                </a>
              ))}
            </div>
          </Suspense>
          <div className="lg:col-span-8 md:col-span-7 h-[calc(85vh-0px)] sm:col-span-10">
            <JobDescription
              title={selectedJob.titulo}
              subtitle={selectedJob.tipo}
              subSubtitle="ISI,EC"
              text={selectedJob.descripcion}
              chequeado={selectedJob.chequeado}
              subidoPor={selectedJob.usuario}
              button1Label="Volver atras"
              button2Label="Postularme"
            />
          </div>
        </div>
      </StudentLayout>
    </>
  );
}

export default Home;
