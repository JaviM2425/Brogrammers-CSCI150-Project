import axios from 'axios';

// for Android emulator use "http://10.0.2.2:5000/api"
// for iOS simulator use "http://localhost:5000/api"
// for physical devices, "http://<your-computer-ip>:5000/api"
const api = axios.create({
    baseURL: 'http://10.0.0.27:5000/api',
});

export default api;