
import axios from 'axios';
const API = axios.create({
  baseURL: 'https://surveys.api.domoforge.com/api/',
});
export default API;
