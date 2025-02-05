import axiosModule from 'axios';

export const axios = axiosModule.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
