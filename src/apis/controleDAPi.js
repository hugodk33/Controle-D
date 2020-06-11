import axios from 'axios';

export const alimentoAPI = axios.create({
  baseURL: `http://3.15.237.4:8080/api/`
});

export default alimentoAPI;