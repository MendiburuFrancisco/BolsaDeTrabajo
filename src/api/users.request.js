import axios from "./axios";
 

export const getUsersRequest = async () => axios.get("/users");

export const getUserFilterRequest = async (params) =>  axios.get("/users",{
        params:params});
 
export const createUserRequest = async (user) => axios.post("/users", user);

export const updateUserRequest = async (user) => axios.put(`/users/${user.id}`, user);

export const deleteUserRequest = async (id) => axios.delete(`/users/${id}`);

export const getUserRequest = async (id) => axios.get(`/users/${id}`);

 