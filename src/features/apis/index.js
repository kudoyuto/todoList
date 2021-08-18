import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cf4717d273a0017e2f536.mockapi.io',
});

export default api;