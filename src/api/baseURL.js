import axios from 'axios';
const baseURL = axios.create({
    baseURL: 'http://localhost:8080'
});

export default baseURL;