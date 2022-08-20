import NProgress from 'nprogress';
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
}, function (error) {
    NProgress.done();
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    NProgress.done();
    return Promise.reject(error);
});