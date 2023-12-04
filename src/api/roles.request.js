import axios from "./axios";
 

export const getRolesRequest = async () => axios.get("/roles");
 
export const createRolesRequest = async (rol) => axios.post("/roles", rol);

export const updateRolesRequest = async (rol) => axios.put(`/roles/${rol.id}`, rol);

export const deleteRolesRequest = async (id) => axios.delete(`/roles/${id}`);

export const getRolRequest = async (id) => axios.get(`/roles/${id}`);