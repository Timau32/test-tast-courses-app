import axios, { CancelToken } from 'axios';
import { ICourse } from 'interfaces';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const getCourses = (token: CancelToken) => instance.get<ICourse[]>('/courses.json', { cancelToken: token });

const api = {
  getCourses,
};

export default api;
