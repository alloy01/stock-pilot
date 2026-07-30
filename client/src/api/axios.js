import axios from "axios";

// creation of base api and specifing that we need cookies too
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

export default api;