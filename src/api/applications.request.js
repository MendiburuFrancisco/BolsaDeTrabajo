import axios from "./axios";
 

export const getApplicationsRequest = async () => axios.get("/applications");

export const getApplicationFilterRequest = async (params,token) =>  axios.get("/applications",{
        headers: {Authorization: `Bearer ${token}`},
        params:params
        });
 
export const createApplicationRequest = async (application, token) => axios.post(`/applications`,  application, {
        headers: {Authorization: `Bearer ${token}`}
});
export const getApplicationByUserRequest = async (token) => axios.get(`/applications/`, {
        headers: {Authorization: `Bearer ${token}`} });

export const updateApplicationRequest = async (application) => axios.put(`/applications/${application.id}`, application);

export const deleteApplicationRequest = async (id) => axios.delete(`/applications/${id}`);

export const getApplicationRequest = async (id) => axios.get(`/applications/${id}`);

 