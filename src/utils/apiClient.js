import request from "./request";

const API_URL = "http://localhost:3000/api";


export const login = (payload) =>request('POST', API_URL + '/user/login',false,payload);

export const fetchEmployees = () =>request('GET', API_URL + '/employee',true);

export const fetchUsers = () =>request('GET', API_URL + '/user',true);


export const addEmployeer = (payload) =>request('POST', API_URL + '/employeer/add',true,payload);

export const addEmployee = (payload) =>request('POST', API_URL + '/employee/add',true,payload);

export const fetchEmployee = (id) =>request('GET', API_URL + `/employee/${id}`,true);

export const deleteEmployee = (id) =>request('DELETE', API_URL + `/employee/${id}`,true);

export const updateEmployee = (id,payload) =>request('PATCH', API_URL + `/employee/${id}`,true,payload);

export const bulkUpload = (payload) =>request('POST', API_URL + `/files/bulk-upload`,true,payload);


