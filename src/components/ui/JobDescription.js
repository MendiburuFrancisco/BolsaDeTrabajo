import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import PrimaryLink from "./PrimaryLink.js";


const JobDescription = ({ title, subtitle, subSubtitle, text, button1Label, button2Label }) => {
  const [selectedJob, setSelectedJob] = useState({ title, subtitle, subSubtitle, text, button1Label, button2Label });
  
  return (
    <div className="bg-white p-6 rounded-lg  shadow-md mb-4">
      <h2 className="text-xl font-semibold text-left">{selectedJob.title}</h2>
      <h3 className="text-gray-600 mt-1 text-left">{selectedJob.subtitle}</h3>
      <h4 className="text-gray-400 mt-1 text-left">{selectedJob.subSubtitle}</h4>
 
      <div className="mt-4 text-gray-700 font-sans text-left overflow-auto">
        {selectedJob.text}
      </div>
 
      {/* <p className="mt-4 text-gray-700">{selectedJob.text}</p> */}
      <div className="flex justify-end mt-4">
        <div className="px-4 py-2 rounded">
          {/* La idea es que al presionar este boton se desaparezca */}
          <PrimaryLink to=""text={selectedJob.button1Label}/>
        </div>
        <div className="">
          <PrimaryButton text={selectedJob.button2Label}/>
          
        </div>

      </div>
    </div>
  );
};

export default JobDescription;
