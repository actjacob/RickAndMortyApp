import axios from 'axios';
import {BASE_URL} from './baseUrl';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;

export default axiosClient;
