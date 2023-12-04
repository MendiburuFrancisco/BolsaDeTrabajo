import axios from "./axios";
 

export const getCompanyRequest = async () => axios.get("/company");
 
export const createCompanyRequest = async (comp) => axios.post("/company", comp);

export const updateCompanyRequest = async (comp) => axios.put(`/company/${comp.id}`, comp);

export const deleteCompanyRequest = async (id) => axios.delete(`/company/${id}`);

export const getCompRequest = async (id) => axios.get(`/company/${id}`);