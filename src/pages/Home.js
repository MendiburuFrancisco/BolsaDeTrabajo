 
 
import { fetchData } from "../hooks/fetchData.js";
 
import { useJobContext } from '../context/JobContext';

import React, { useState, useEffect } from "react";
import JobCard from "../components/ui/JobCard.js";
import JobDescription from "../components/ui/JobDescription.js";
import StudentLayout from "../layouts/Student.js";
import { getJobsRequest } from "../api/jobs.request.js";
import JobFilters from "../components/ui/JobFilter.js";

// const apiData = getJobsRequest() ;
// const apiData = fetchData("/jobs");


function Home() {
  const { jobs, setJobs } = useJobContext();
  const [trabajos, setTrabajos] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobClicked, setJobClicked] = useState(false);
 
  useEffect(() => {
    getJobsRequest()
      .then((res) => {
        // setTrabajos(res.data);
        setJobs(res.data);
        setSelectedJob(jobs[0])
        // localStorage.setItem('trabajos', JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handlerSelectedJob(trabajo, clicked) {
    setSelectedJob(trabajo);
    setJobClicked(clicked);
  }

 
 

  return (
    <>
 

      <StudentLayout className="flex items-center justify-center h-[calc(100vh-0px)]">
        <JobFilters />

        <div role="main" className="grid lg:grid-cols-12 md:grid-cols-12 lg:gap-12 md:gap-12 m-4">
          <div className="lg:col-span-4 md:col-span-5 sm:col-span-10">
          {jobs.map((trabajo, index) => (
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
          <div className="lg:col-span-8 md:col-span-7 h-[calc(85vh-0px)] sm:col-span-10">
            {selectedJob && (
              <JobDescription
                id = {selectedJob.id}
                title={selectedJob.titulo}
                subtitle={selectedJob.tipo}
                subSubtitle="ISI,EC"
                text={selectedJob.descripcion}
                chequeado={selectedJob.chequeado}
                subidoPor={selectedJob.usuario}
                fechaDesde={selectedJob.fecha_desde}
                fechaHasta={selectedJob.fecha_hasta}
              />
            )}
          </div>
        </div>
      </StudentLayout>
 
 
    </>
  );
}

export default Home;
 