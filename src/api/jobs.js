// import axios from "./axios";
import {fetchData} from "./fetchData";

// export const getJobsRequest = async () => axios.get("/jobs");
// export const createJobRequest = async (task) => axios.post("/jobs", task);

// export const updateJobRequest = async (task) =>
//   axios.put(`/jobs/${task._id}`, task);

// export const deleteJobRequest = async (id) => axios.delete(`/jobs/${id}`);

// export const getJobRequest = async (id) => axios.get(`/jobs/${id}`);

class JobRequest {
  static getJobsRequest = async () => fetchData("/jobs");

  static createJobRequest = async (task) =>
    fetchData("/jobs", {
      method: "POST",
      body: JSON.stringify(task),
    });

  static updateJobRequest = async (task) =>
    fetchData(`/jobs/${task._id}`, {
      method: "PUT",
      body: JSON.stringify(task),
    });

  static deleteJobRequest = async (id) =>
    fetchData(`/jobs/${id}`, {
      method: "DELETE",
    });
}

export default JobRequest;