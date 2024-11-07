import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:5000';


export const publicRequest = axios.create(
    {
      baseURL: BASE_URL
    }
  );

export const privateRequest = axios.create(
    {
      baseURL: BASE_URL,
      headers:{"Content-Type":'application/json'},
      withCredentials:false
    }
  )