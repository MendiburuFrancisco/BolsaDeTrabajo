import React from "react";
import PrimaryButton from "./PrimaryButton";
import PrimaryLink from "./PrimaryLink.js";
import { BriefcaseIcon, CheckBadgeIcon, BuildingLibraryIcon, CalendarDaysIcon, BookmarkIcon } from '@heroicons/react/20/solid'

const JobDescription = ({
  title,
  subtitle,
  subSubtitle,
  text,
  button1Label,
  button2Label,
  chequeado,
  subidoPor,
  
}) => {
  return (
    <section aria-labelledby="job-title" className="bg-white p-6 rounded-lg shadow-md mb-4">
      <header className="flex justify-between items-center mb-4">
        <h2 id="job-title" className="text-2xl text-left font-semibold">{title}</h2>
        <BookmarkIcon className="h-7 w-7" aria-hidden="true" />
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
            <CalendarDaysIcon className="mr-1 h-6 w-6 text-gray-400" aria-hidden="true" />
            10/20/2023
          </div>
          <div className="flex items-center ps-3">
            <CalendarDaysIcon className="mr-1 h-6 w-6 text-gray-400" aria-hidden="true" />
            13/20/2023
          </div>
        </div>

        <textarea 
          className="w-full h-[calc(50vh-0px)] mt-4 text-gray-700 font-sans text-left overflow-auto" 
          disabled 
          aria-label="Job Description"
          readOnly
        >
          {text}
        </textarea>

        <div className="mt-4">
          <PrimaryButton text={button2Label} />
          <div className="px-4 py-2 rounded">
            <PrimaryLink to="" text={button1Label} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default JobDescription;
