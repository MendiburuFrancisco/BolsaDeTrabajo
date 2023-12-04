 
 import { useJobContext } from '../context/JobContext';

 import React, { useState, useEffect } from "react";
 
 import StudentLayout from "../layouts/Student.js";
 import { getJobsRequest } from "../api/jobs.request.js";
 import AdminJobs from "../components/ui/dashboard/dashboardJobs.js";
 
 function UploadedJobs() {
 
   return (
       <StudentLayout className="flex items-center justify-center   ">
 
        <AdminJobs/>
 
      
  
 
       </StudentLayout>
   );
 }
 
 export default UploadedJobs;
  