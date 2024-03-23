import axios from "axios"

const baseurl = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({
    // `baseUrl` is the url that will be used as the base URL for every request
    baseURL: baseurl
})