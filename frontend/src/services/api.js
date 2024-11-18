import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Add Authorization header with token, if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const register = (userData) => api.post('/auth/register', userData);
export const login = (userData) => api.post('/auth/login', userData);
export const fetchPosts = () => api.get('/posts');
export const fetchPostById = (id) => api.get(`/posts/${id}`);
export const createPost = (postData) => api.post('/posts', postData);
export const updatePost = (id, postData) => api.put(`/posts/${id}`, postData);
export const deletePost = (id) => api.delete(`/posts/${id}`);

export default api;
