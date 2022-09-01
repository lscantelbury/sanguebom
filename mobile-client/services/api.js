import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sangue-bom-api.herokuapp.com'
});

export default api;