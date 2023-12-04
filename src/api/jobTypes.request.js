import axios from "./axios";
 

export const getJobTypesRequest = async () => axios.get("/jobtype");

export const getJobTypeFilterRequest = async (params) =>  axios.get("/jobtype",{
        params:params});
 
export const createJobTypeRequest = async (job) => axios.post("/jobtype", job);

export const updateJobTypeRequest = async (job) => axios.put(`/jobtype/${job.id}`, job);

export const deleteJobTypeRequest = async (id) => axios.delete(`/jobtype/${id}`);

export const getJobTypeRequest = async (id) => axios.get(`/jobtype/${id}`);

 