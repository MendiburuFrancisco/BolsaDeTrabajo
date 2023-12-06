import axios from "./axios";
 

export const getJobTypesRequest = async () => axios.get("/jobtypes");

export const getJobTypeFilterRequest = async (params) =>  axios.get("/jobtype",{
        params:params});
 
export const createJobTypeRequest = async (job) => axios.post("/jobtypes", job);

export const updateJobTypeRequest = async (job) => axios.put(`/jobtypes/${job.id}`, job);

export const deleteJobTypeRequest = async (id) => axios.delete(`/jobtypes/${id}`);

export const getJobTypeRequest = async (id) => axios.get(`/jobtypes/${id}`);

 