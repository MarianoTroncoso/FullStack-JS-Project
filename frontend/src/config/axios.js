// aqui es donde definimos el cliente de axios

import axios from 'axios';

const clienteAxios = axios.create({
    // definimos nuesta url base
    baseURL: process.env.REACT_APP_BACKEND_URL
})


export default clienteAxios