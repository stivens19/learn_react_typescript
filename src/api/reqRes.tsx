import axios from 'axios';

export const reqResApi=axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
})