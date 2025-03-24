import axios from "axios"

const apiRequest = axios.create({
    baseURL: "https://yours-server.vercel.app/api",
    withCredentials: true,
});

export default apiRequest;