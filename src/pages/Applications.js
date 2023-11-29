 
 
import { useJobContext } from '../context/JobContext';
import {useAuth} from '../context/AuthContext';

import React, { useState, useEffect } from "react";
import JobCard from "../components/ui/JobCard.js";
import JobDescription from "../components/ui/JobDescription.js";
import StudentLayout from "../layouts/Student.js";
import { getApplicationByUserRequest } from "../api/applications.request.js";

 

function Home() {
 
  const { user,getToken } = useAuth();

  const {applicatedJobs, setApplicatedJobs} = useJobContext();
  const [trabajos, setTrabajos] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobClicked, setJobClicked] = useState(false);

  const user_token = getToken();

  useEffect(() => {
    getApplicationByUserRequest(user_token)
      .then((res) => {
        console.log("AAAAAAA",res.data)

         let _trabajos = res.data.map((arreglo) => {
          console.log(arreglo.trabajo)
          return arreglo.trabajo
        })

        // setApplicatedJobs(trabajos);
        // setSelectedJob(applicatedJobs[0])
        setTrabajos(_trabajos);
        setSelectedJob(trabajos[0])
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
        <div role="main" className="grid lg:grid-cols-12 md:grid-cols-12 lg:gap-12 md:gap-12 m-4">
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
          <div className="lg:col-span-8 md:col-span-7 h-[calc(85vh-0px)] sm:col-span-10">
            {selectedJob && (
              <JobDescription
                
                title={selectedJob.titulo}
                subtitle={selectedJob.tipo}
                subSubtitle="ISI,EC"
                text={selectedJob.descripcion}
                chequeado={selectedJob.chequeado}
                subidoPor={selectedJob.usuario}
                fechaDesde={selectedJob.fecha_desde}
                fechaHasta={selectedJob.fecha_hasta}
                esconderBoton={true}
              />
            )}
          </div>
        </div>
      </StudentLayout>
 
 
    </>
  );
}

export default Home;
 