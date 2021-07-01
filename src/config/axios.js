import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'https://notes-backend-node.herokuapp.com/'
});

export default clienteAxios;