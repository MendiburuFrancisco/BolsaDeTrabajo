import axios from "./axios";
 

export const getJobsRequest = async () => axios.get("/jobs");
export const createJobRequest = async (job) => axios.post("/jobs", job);

export const updateJobRequest = async (job) => axios.put(`/jobs/${job.id}`, job);

export const deleteJobRequest = async (id) => axios.delete(`/jobs/${id}`);

export const getJobRequest = async (id) => axios.get(`/jobs/${id}`);

 