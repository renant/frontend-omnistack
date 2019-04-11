import axios from 'axios';

const api = axios.create({
    baseURL: "https://omministack-backend.herokuapp.com"
});

export default api;