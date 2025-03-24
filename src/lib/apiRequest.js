import axios from "axios"

const apiRequest = axios.create({
    baseURL: "yours-server.vercel.app/api",
    withCredentials: true,
});

export default apiRequest;