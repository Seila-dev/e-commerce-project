import axios from "axios"

const api = axios.create({
    baseURL: "https://e-commerce-project-api-r1x4.onrender.com/"
})

export default api