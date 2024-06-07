import axios from 'axios';
import { ICourse } from 'interfaces';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const getCourses = () => instance.get<ICourse[]>('/courses.json');

const api = {
  getCourses,
};

export default api;
