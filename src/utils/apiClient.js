import request from "./request";

const API_URL = "http://localhost:3000";


// export const submitVerificationCode = (payload) =>request('POST', API_URL + '/verification',payload);
export const login = (payload) =>request('POST', API_URL + '/verification',payload);


