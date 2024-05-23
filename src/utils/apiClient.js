import request from "./request";

const API_URL = "http://localhost:3000/api";


export const login = (payload) =>request('POST', API_URL + '/user/login',false,payload);

export const fetchEmployees = (payload) =>request('GET', API_URL + '/employee',true,payload);


export const addEmployeer = (payload) =>request('POST', API_URL + '/employeer/add',true,payload);

export const addEmployee = (payload) =>request('POST', API_URL + '/employee/add',true,payload);

export const fetchEmployee = (id) =>request('GET', API_URL + `/employee/${id}`,true);

export const updateEmployee = (id,payload) =>request('PATCH', API_URL + `/employee/${id}`,true,payload);


