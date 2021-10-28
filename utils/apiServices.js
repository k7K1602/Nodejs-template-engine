const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1',
});

exports.getCall = async (endpoint, params = {}) => axiosInstance.get(endpoint, params);
