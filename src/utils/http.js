
import axios from "axios";
    
const http = axios.create({
    baseURL: "http://localhost:5000/uetcs/digischool",
    // baseURL: process.env.APP_API_BASE_URL,
});

// http.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('digischool');
//     const tenantID = localStorage.getItem('tenantID');
//     config.headers.Authorization =  token ? `Bearer ${token}` : '';
//     config.headers.tenantID =  tenantID ? tenantID : '';
//     return config;
// });

export default http;