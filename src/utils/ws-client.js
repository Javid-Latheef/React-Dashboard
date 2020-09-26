
import axios from 'axios'

export const request = ({ method, url, ...options }) => {
    const headers = {
      'Content-Type': 'application/json'
    }

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
    }, function (error) {
    // Do something with response error
    return Promise.reject(error);
    });

    return axios({
      method: method.toLowerCase(),
      url,
      headers:headers,
      ...options
    }).catch((err) => { throw new Error(err) })
  }