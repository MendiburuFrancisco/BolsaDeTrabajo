import React from "react";
import PrimaryButton from "./PrimaryButton";
import PrimaryLink from "./PrimaryLink.js";
import { useState } from "react";
import FormInput from "../form/FormInput"
import { BriefcaseIcon, CheckBadgeIcon, BuildingLibraryIcon, CalendarDaysIcon, BookmarkIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { updateJobRequest } from "../../api/jobs.request";




const JobDescription = ({
  title,
  subtitle,
  subSubtitle,
  text,
  chequeado,
  subidoPor,
  fechaDesde,
  fechaHasta,
  
}) => {

  // console.log(job)
    // const { titulo, tipo, descripcion, chequeado, usuario }= job
    // const subSubtitle = "ISI,EC"
    // const title = titulo
    // const subtitle = tipo
    // const text = descripcion
    // const subidoPor = usuario

  // const {title,subtitle, subSubtitle, text, chequeado, subidoPor }= job

  const [editableMode, setEditableMode] = useState(false)

  const HeaderElement = () => {
    if (editableMode) {
      return <FormInput id="job-title" type="text" placeholder={"Titulo del trabajo"}
                value={title} className="text-2xl text-left font-semibold block w-full"/>
    } else {
      return <h2 id="job-title" className="text-2xl text-left font-semibold">{title}</h2>
    }
  }


  const DateElement = ({date}) => {
      if(editableMode){
        return <FormInput id="job-date" type="date" placeholder={"Fecha desde"} value={date} 
                  className="text-left font-semibold block w-full py-0"/>
      }else{
        
            return <>
             <CalendarDaysIcon className="mr-1 h-6 w-6 text-gray-400" aria-hidden="true" /> 
            <p> {date}</p>
             </>
      }
  }

  const DescriptionElement = () => {
    if (editableMode) {
      return       <textarea 
        className="w-full h-[calc(50vh-0px)] mt-4 text-gray-700 font-sans text-left overflow-auto" 
        aria-label="Job Description">{text}</textarea>
    } else {
      return <textarea 
        className="w-full h-[calc(50vh-0px)] mt-4 text-gray-700 font-sans text-left overflow-auto" 
        aria-label="Job Description"
        disabled readOnly
      >{text}</textarea>
    }
    
  }

  const updateJobRequest = async (job) => {
    const authData = JSON.stringify(job);
    const response = await updateJobRequest(authData, user.id);
    return response;        
  }

  // const applicationRequest = async (user) => {
  //   const authData = JSON.stringify(user);
  //   const response = await axios.post("/auth/login",  authData,
  //     {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   return response;
  // }
  

  return (
    <section aria-labelledby="job-title" className="bg-white p-6 rounded-lg shadow-md mb-4">
      <header className="flex justify-between items-center mb-4">
        <HeaderElement />
        <div>
        <BookmarkIcon className="h-7 w-7" aria-hidden="true" /> 
        <button onClick={() => setEditableMode(!editableMode)}>
        <PencilSquareIcon className="h-7 w-7" aria-hidden="true" />
        </button>

        </div>
      </header>
      
      <article>
        <div className="flex items-center">
          <h3 className="text-gray-600 mt-1 text-left">
            Este trabajo fue subido por <b>{subidoPor.nombreApellido}</b>
          </h3>
          {chequeado? (
            <CheckBadgeIcon
              className="text-blue-400 h-6 w-6 ms-3"
              aria-label="Este trabajo fue subido de forma oficial por la facultad"
            /> )
            : null}
        </div>

        <div className="flex items-center text-gray-600 mt-1">
          <BriefcaseIcon className="mr-1 h-6 w-6 text-gray-400" aria-hidden="true" />
          <span>{subtitle}</span>
        </div>

        <div className="flex items-center text-gray-400 mt-1">
          <BuildingLibraryIcon className="mr-1 h-6 w-6 text-gray-400" aria-hidden="true" />
          {subSubtitle}
        </div>

        <div className="flex mt-1 text-gray-400">
          <div className="flex items-center pe-3">
            <DateElement date={fechaDesde} />
          </div>

          <div className="flex items-center ps-3">
              <DateElement date={fechaHasta} />
          </div>
        </div>

        <DescriptionElement/>
    
        <div className="mt-4">
          <PrimaryButton text={"Postularme"} />
          <div className="px-4 py-2 rounded">
            <PrimaryLink to="" text={"Volver atras"} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default JobDescription;
