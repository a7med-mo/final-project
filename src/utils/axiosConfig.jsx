import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});